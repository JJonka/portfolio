import type { Metadata } from "next";
import parse from "html-react-parser";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Here's a look at my professional journey — the roles I've held, the companies I've worked for, and the technologies I've used along the way.",
  openGraph: {
    title: "Work Experience | Joanna Jurasz",
    description:
      "Here's a look at my professional journey — the roles I've held, the companies I've worked for, and the technologies I've used along the way.",
    url: "/experience/work",
    images: [{ url: "/og-image.png", alt: "Joanna Jurasz — Fullstack Developer" }],
  },
};
import { ExperienceSectionNav } from "../../../components/ExperienceSectionNav";
import { ExpandableText } from "../../../components/ExpandableText";
import { db } from "../../../lib/db";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const formatPeriod = (start: Date, end: Date | null) => {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}

const WorkExperiencePage = async () => {
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
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
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
                      <ExpandableText>{parse(exp.description)}</ExpandableText>
                    </div>
                  )}
                  {technologies.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
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
};

export default WorkExperiencePage;
