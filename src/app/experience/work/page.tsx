import { SectionSidebar } from "../../../components/SectionSidebar";
import { db } from "../../../lib/db";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function formatPeriod(start: Date, end: Date | null) {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}

export default async function WorkExperiencePage() {
  const experiences = await db.experience.findMany({
    orderBy: { orderIndex: "asc" },
  });

  const anchorItems = experiences.map((exp) => ({
    id: slugify(exp.company),
    label: exp.company,
  }));

  return (
    <>
      <SectionSidebar items={anchorItems} />
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold text-foreground">
          Work Experience
        </h2>
        <div className="mt-8 space-y-12">
          {experiences.toReversed().map((exp) => {
            const slug = slugify(exp.company);
            const technologies = exp.technologies
              ? exp.technologies.split(",").map((t) => t.trim())
              : [];
            return (
              <section
                key={exp.id}
                id={slug}
                className="scroll-mt-24 relative border-l-2 border-accent/30 pl-8"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent bg-background" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted">
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="mt-3 leading-7 text-muted">{exp.description}</p>
                )}
                {technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
