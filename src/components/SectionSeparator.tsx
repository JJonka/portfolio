import type { ReactNode } from "react";
import ArrowDown from "../public/icon-down.svg";

interface SectionSeparatorProps {
  label?: string;
  children?: ReactNode;
  className?: string;
  targetId?: string;
}

export function SectionSeparator({
  label,
  children,
  className = "",
  targetId,
}: SectionSeparatorProps) {
  const inner = children ? (
    <span className="text-muted text-sm font-semibold tracking-[0.2em] uppercase">
      {label ?? "Section"}
    </span>
  ) : (
    <svg
      className="animate-bounce text-foreground"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={60}
      height={60}
    >
      <path d="M12 16l-6-6h12l-6 6z" />
    </svg>
  );

  return (
    <section
      aria-label={label ?? "Section separator"}
      className={`border-border/70 bg-surface/90 relative right-1/2 left-1/2 my-14 w-screen -translate-x-1/2 border-y py-6 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6">
        {targetId ? (
          <a href={`#${targetId}`} className="cursor-pointer">
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    </section>
  );
}

export default SectionSeparator;
