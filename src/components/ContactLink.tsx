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

const btnClass =
  "border-border text-foreground hover:border-accent  hover:text-accent flex w-fit items-center gap-3 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors";

export function ContactLink({
  children,
  href,
  type,
  label,
  description,
}: ContactLinkProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="border-border bg-surface hover:border-accent flex flex-col items-center rounded-xl border p-6 transition-colors">
      <p className="text-muted flex-1 text-sm leading-6">{description}</p>

      <div className="mt-6">
        {type === "email" ? (
          <>
            <a href={`mailto:${href}`} className={`${btnClass} md:hidden`}>
              {children}
              <span>Send email</span>
            </a>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`${btnClass} hidden cursor-pointer md:flex`}
            >
              {children}
              <span>{copied ? "Copied!" : "Copy email"}</span>
            </button>
          </>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
          >
            {children}
            <span>Go to my {label} profile</span>
          </a>
        )}
      </div>
    </div>
  );
}
