import type { Metadata } from "next";
import { AssistantChat } from "../../components/AssistantChat";

export const metadata: Metadata = {
  title: "AI Recruitment Assistant",
  description:
    "Ask the AI Recruitment Assistant about Joanna's skills, experience, tech stack, and availability. Get instant answers about her professional background.",
  openGraph: {
    title: "AI Recruitment Assistant | Joanna Jurasz",
    description:
      "Ask the AI Recruitment Assistant about Joanna's skills, experience, and availability.",
    url: "/assistant",
    images: [{ url: "/og-image.png", alt: "Joanna Jurasz — Fullstack Developer" }],
  },
};

const AssistantPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        AI Recruitment Assistant
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg leading-8">
        Ask me anything about Joanna&apos;s experience, tech stack, or
        availability.
      </p>
      <AssistantChat />
    </div>
  );
};

export default AssistantPage;
