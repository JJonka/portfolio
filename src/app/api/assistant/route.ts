import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { db } from "../../../lib/db";

export const runtime = "nodejs";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"),
});

const MAX_MESSAGES = 20;
const MAX_CHARS = 2000;

type MessageParam = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return new Response("Too many requests", { status: 429 });
  }

  const { messages }: { messages: MessageParam[] } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid request", { status: 400 });
  }

  const safe = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-MAX_MESSAGES)
    .map((m) => ({ ...m, content: String(m.content).slice(0, MAX_CHARS) }));

  const firstUser = safe.findIndex((m) => m.role === "user");
  const validated = firstUser > 0 ? safe.slice(firstUser) : safe;

  if (validated.length === 0) {
    return new Response("Invalid request", { status: 400 });
  }

  const [experiences, profile] = await Promise.all([
    db.experience.findMany({ orderBy: { orderIndex: "asc" } }),
    db.profile.findFirst(),
  ]);

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const experienceBlock = experiences
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${fmt(e.startDate)} – ${e.endDate ? fmt(e.endDate) : "Present"})\n  Technologies: ${e.technologies ?? "N/A"}\n  ${
          e.description
            ? `Description: ${e.description
                .replace(/<[^>]+>/g, " ")
                .replace(/\s+/g, " ")
                .trim()}`
            : ""
        }`,
    )
    .join("\n\n");

  const systemPrompt = `You are an AI assistant representing ${profile?.name ?? "Joanna Jurasz"}, a fullstack developer. You speak on her behalf to recruiters and visitors viewing her portfolio.

About Joanna:
- Name: ${profile?.name ?? "Joanna Jurasz"}
- Headline: ${profile?.headline ?? "Fullstack Developer"}
- Location: ${profile?.location ?? "Poland (remote-friendly)"}
- Bio: ${profile?.bio ?? ""}
- Availability: ${profile?.availability ?? "Not specified"}

Work Experience:
${experienceBlock || "No experience entries available."}

Guidelines:
${profile?.assistantGuidelines ?? "No specific guidelines provided."}
- Today's date is ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;

  const client = new Anthropic();

  const stream = client.messages.stream({
    model: process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: systemPrompt,
    messages: validated as Anthropic.MessageParam[],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
