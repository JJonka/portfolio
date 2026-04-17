"use client";

import { usePathname } from "next/navigation";

interface AnchorItem {
  id: string;
  label: string;
}

export const SectionSidebar = ({ items }: { items: AnchorItem[] }) => {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 space-y-6">
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
                    className={`block border-l-2 border-transparent px-3 py-1 text-sm ${pathname === `#${id}` ? "text-accent font-medium" : "text-muted"} hover:border-accent hover:text-foreground transition-colors`}
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
