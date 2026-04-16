import { SectionSidebar } from "../../../components/SectionSidebar";
import { db } from "../../../lib/db";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default async function RecommendationsPage() {
  const recommendations = await db.recommendation.findMany();

  const anchorItems = recommendations.map((rec) => ({
    id: slugify(rec.authorName),
    label: rec.authorName,
  }));

  return (
    <>
      <SectionSidebar items={anchorItems} />
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold text-foreground">
          Recommendations
        </h2>
        <div className="mt-8 space-y-10">
          {recommendations.map((rec) => {
            const slug = slugify(rec.authorName);
            return (
              <section
                key={rec.id}
                id={slug}
                className="scroll-mt-24 rounded-lg border border-border p-6"
              >
                <blockquote className="leading-7 text-muted">
                  &ldquo;{rec.text}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-semibold text-accent">
                    {rec.authorName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {rec.authorName}
                    </p>
                    <p className="text-sm text-muted">
                      {rec.authorRole} at {rec.authorCompany}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
