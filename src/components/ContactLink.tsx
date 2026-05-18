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
        {/* Mobile + tablet */}
        <div className="lg:hidden">
          {type === "email" ? (
            <a href={`mailto:${href}`} className={btnClass}>
              {children}
              <span>Send email</span>
            </a>
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

        {/* Desktop: icon only with tooltip */}
        <div className="hidden lg:flex">
          <div className="group relative">
            {type === "email" ? (
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-foreground hover:text-accent cursor-pointer transition-colors"
                aria-label={copied ? "Copied!" : "Copy email"}
              >
                {children}
              </button>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label={`Go to my ${label} profile`}
              >
                {children}
              </a>
            )}
            <span
              aria-hidden="true"
              className="border-border bg-surface text-foreground pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded border px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100"
            >
              {type === "email"
                ? copied
                  ? "Copied!"
                  : "Copy email"
                : `Go to my ${label} profile`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
