"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnchorItem {
  id: string;
  label: string;
}

export const SectionSidebar = ({ items }: { items: AnchorItem[] }) => {
  const pathname = usePathname();

  const sections = [
    { href: "/experience/work", label: "Work Experience" },
    { href: "/experience/recommendations", label: "Recommendations" },
  ];

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 space-y-6">
        <nav>
          <h3 className="text-muted mb-2 text-xs font-semibold tracking-wider uppercase">
            Sections
          </h3>
          <ul className="space-y-1">
            {sections.map(({ href, label }) => {
              const isActive = pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "text-accent font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {items.length > 0 && (
          <nav>
            <h3 className="text-muted mb-2 text-xs font-semibold tracking-wider uppercase">
              On this page
            </h3>
            <ul className="border-border space-y-1 border-l">
              {items.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-muted hover:border-accent hover:text-foreground block border-l-2 border-transparent px-3 py-1 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
};
