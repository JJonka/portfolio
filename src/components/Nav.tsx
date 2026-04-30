"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button – visible on mobile only */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-foreground md:hidden"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop nav */}
      <ul className="hidden gap-6 text-sm font-medium md:flex">
        {navLinks.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile nav dropdown */}
      {open && (
        <ul className="bg-surface border-border absolute top-full right-0 left-0 flex flex-col gap-2 border-b px-6 py-4 text-sm font-medium md:hidden">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
