import type { CSSProperties, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const sectionGradient: CSSProperties = {
  width: "100vw",
  backgroundColor: "var(--background)",
  backgroundImage:
    "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)",
  backgroundRepeat: "no-repeat",
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={className} style={sectionGradient}>
      {children}
    </section>
  );
}

export default Section;
