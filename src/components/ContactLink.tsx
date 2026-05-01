"use client";

import type { ReactNode } from "react";
import { useState } from "react";

interface ContactLinkProps {
  children: ReactNode;
  href: string;
  type: "link" | "email";
  label?: string;
  description: string;
}

const tooltipClass =
  "bg-surface border-border text-foreground pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded border px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover/icon:opacity-100";

const cardClass =
  "group border-border bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors";

export function ContactLink({
  children,
  href,
  type,
  label,
  description,
}: ContactLinkProps) {
  const [copied, setCopied] = useState(false);

  if (type === "email") {
    const handleCopy = async () => {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className={`${cardClass} w-full cursor-pointer text-left`}
      >
        <p className="text-muted flex-1 text-sm leading-6">{description}</p>
        <div className="group/icon relative mt-6 w-fit self-center text-foreground transition-colors hover:text-blue">
          {children}
          <span className={tooltipClass}>
            {copied ? "Copied!" : "Copy e-mail address"}
          </span>
        </div>
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? href}
      className={cardClass}
    >
      <p className="text-muted flex-1 text-sm leading-6">{description}</p>
      <div className="group/icon relative mt-6 w-fit self-center text-foreground transition-colors hover:text-blue">
        {children}
        {label && <span className={tooltipClass}>Checkout my {label} profile</span>}
      </div>
    </a>
  );
}
