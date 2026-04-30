import parse from "html-react-parser";
import { ExperienceSectionNav } from "../../../components/ExperienceSectionNav";
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

  const anchorItems = experiences
    .map((exp) => ({
      idx: exp.id,
      id: slugify(exp.company),
      label: exp.company,
    }))
    .sort((a, b) => b.idx - a.idx);

  return (
    <div className="flex gap-8">
      <ExperienceSectionNav anchorItems={anchorItems} />
      <div className="min-w-0 flex-1">
        <h2 className="text-foreground text-2xl font-semibold">
          Work Experience
        </h2>
        <div className="mt-8 space-y-12">
          {experiences
            .sort((a, b) => b.id - a.id)
            .map((exp) => {
              const slug = slugify(exp.company);
              const technologies = exp.technologies
                ? exp.technologies.split(",").map((t) => t.trim())
                : [];
              return (
                <section
                  key={exp.id}
                  id={slug}
                  className="border-accent/30 relative scroll-mt-24 border-l-2 pl-8"
                >
                  <div className="border-accent bg-background absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-foreground text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-muted text-sm">
                      {formatPeriod(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                  <p className="text-accent mt-1 text-sm font-medium">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <div className="text-muted mt-3 leading-7">
                      {parse(exp.description)}
                    </div>
                  )}
                  {technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-surface text-foreground rounded-full px-3 py-1 text-xs font-medium"
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
    </div>
  );
}
