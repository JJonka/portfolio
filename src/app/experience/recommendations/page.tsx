import type { Metadata } from "next";
import parse from "html-react-parser";

export const metadata: Metadata = {
  title: "Recommendations",
  description:
    "Recommendations for Joanna Jurasz from colleagues and collaborators.",
  openGraph: {
    title: "Recommendations | Joanna Jurasz",
    description: "Recommendations from colleagues and collaborators.",
    url: "/experience/recommendations",
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

const RecommendationsPage = async () => {
  const recommendations = await db.recommendation.findMany();

  const anchorItems = recommendations
    .map((rec) => ({
      idx: rec.id,
      id: slugify(rec.authorName),
      label: rec.authorName,
    }))
    .sort((a, b) => b.idx - a.idx);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <ExperienceSectionNav anchorItems={anchorItems} />
      <div className="min-w-0 flex-1">
        <h2 className="text-foreground text-2xl font-semibold">
          Recommendations
        </h2>
        <div className="mt-8 space-y-10">
          {recommendations
            .sort((a, b) => b.id - a.id)
            .map((rec) => {
              const slug = slugify(rec.authorName);
              return (
                <section
                  key={rec.id}
                  id={slug}
                  className="border-border scroll-mt-24 rounded-lg border p-6"
                >
                  <blockquote className="text-muted leading-7">
                    <ExpandableText>
                      &ldquo;{parse(rec.text)}&rdquo;
                    </ExpandableText>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="bg-surface text-accent flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
                      {rec.authorName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">
                        {rec.authorName}
                      </p>
                      <p className="text-muted text-sm">
                        {rec.authorRole} at {rec.authorCompany}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
