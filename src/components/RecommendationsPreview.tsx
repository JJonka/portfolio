import Link from "next/link";
import { db } from "../lib/db";

const RecommendationsPreview = async () => {
  const recommendations = await db.recommendation.findMany({ take: 2 });

  return (
    <Link
      href="/experience/recommendations"
      className="group border-border bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors"
    >
      <h3 className="text-foreground text-lg font-semibold">
        Recommendations
      </h3>
      <div className="mt-4 flex-1 space-y-5">
        {recommendations.map((rec) => (
          <div key={rec.id} className="border-border rounded-lg border p-4">
            <p className="text-muted line-clamp-3 text-sm leading-6">
              &ldquo;{rec.text}&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="bg-background text-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                {rec.authorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-foreground text-xs font-semibold">
                  {rec.authorName}
                </p>
                <p className="text-muted text-xs">
                  {rec.authorRole}
                  {rec.authorCompany ? ` · ${rec.authorCompany}` : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-accent group-hover:text-foreground mt-6 text-sm font-medium transition-colors">
        View all recommendations →
      </p>
    </Link>
  );
};

export default RecommendationsPreview;
