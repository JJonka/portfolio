"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ExpandableText({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) setOverflows(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div>
      <div
        ref={ref}
        className={expanded ? undefined : "line-clamp-4 md:line-clamp-none"}
      >
        {children}
      </div>
      {overflows && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-accent text-sm font-medium md:hidden"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
