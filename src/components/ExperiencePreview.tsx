import Link from "next/link";
import { db } from "../lib/db";

const formatPeriod = (start: Date, end: Date | null) => {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
};

const ExperiencePreview = async () => {
  const experiences = await db.experience.findMany({
    orderBy: { orderIndex: "desc" },
    take: 2,
  });

  return (
    <Link
      href="/experience/work"
      className="group border-border bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors"
    >
      <h3 className="text-foreground text-lg font-semibold">Experience</h3>
      <div className="mt-4 flex-1 space-y-5">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-accent/30 border-l-2 pl-4">
            <p className="text-accent font-medium">{exp.role}</p>
            <p className="text-foreground text-sm">{exp.company}</p>
            <p className="text-muted mt-0.5 text-xs">
              {formatPeriod(exp.startDate, exp.endDate)}
            </p>
            {exp.description && (
              <p className="text-muted mt-2 line-clamp-2 text-sm">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="text-accent group-hover:text-foreground mt-6 text-sm font-medium transition-colors">
        View all experience →
      </p>
    </Link>
  );
};

export default ExperiencePreview;
