"use client";

import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type Message = { role: "user" | "assistant"; content: string };

type Props = {
  messages: Message[];
  streaming: boolean;
};

export const ChatMessages = ({ messages, streaming }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="border-border bg-surface chat-scroll flex max-h-[60vh] flex-col gap-4 overflow-y-auto rounded-xl border p-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-6 ${
              msg.role === "user"
                ? "bg-accent text-background"
                : "border-border bg-background text-foreground border"
            }`}
          >
            {msg.role === "user" ? (
              msg.content
            ) : (
              <>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    code: ({ children }) => <code className="bg-muted rounded px-1 py-0.5 text-xs font-mono">{children}</code>,
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
                {streaming && i === messages.length - 1 && (
                  <span className="animate-pulse ml-0.5">▋</span>
                )}
              </>
            )}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
