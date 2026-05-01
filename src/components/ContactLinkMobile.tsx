import type { ReactNode } from "react";

interface ContactLinkMobileProps {
  children: ReactNode;
  href: string;
  type: "link" | "email";
  text: string;
}

export function ContactLinkMobile({
  children,
  href,
  type,
  text,
}: ContactLinkMobileProps) {
  const resolvedHref = type === "email" ? `mailto:${href}` : href;

  return (
    <a
      href={resolvedHref}
      target={type === "link" ? "_blank" : undefined}
      rel={type === "link" ? "noopener noreferrer" : undefined}
      className="border-border bg-surface hover:border-accent text-foreground hover:text-accent flex items-center gap-4 rounded-xl border px-6 py-4 transition-colors"
    >
      <div className="shrink-0">{children}</div>
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
}
