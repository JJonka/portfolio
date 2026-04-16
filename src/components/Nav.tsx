"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6 text-sm font-medium">
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
  );
};
