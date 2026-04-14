"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/experience/work", label: "Work Experience" },
  { href: "/experience/recommendations", label: "Recommendations" },
];

export default function ExperienceSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="space-y-1">
        {sidebarLinks.map(({ href, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-surface text-accent"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
