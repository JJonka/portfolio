import Link from "next/link";
import { db } from "../lib/db";
import Image from "next/image";
import SectionSeparator from "../components/SectionSeparator";
import TechLogosGrid from "../components/TechLogosGrid";

function formatPeriod(start: Date, end: Date | null) {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}

export default async function Home() {
  const [profile, experiences, recommendations] = await Promise.all([
    db.profile.findFirst(),
    db.experience.findMany({ orderBy: { orderIndex: "desc" }, take: 2 }),
    db.recommendation.findMany({ take: 2 }),
  ]);

  return (
    <div className="min-h-screen">
      <section
        className={"mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:flex-row"}
      >
        <div className="order-2 flex flex-col justify-center text-left lg:order-1 lg:basis-2/5">
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, <br />
            <span className="text-accent">I&apos;m Joanna</span>
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
            {profile?.headline ??
              "A fullstack developer - hungry for good food and building web applications."}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-accent text-background hover:bg-blue rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/experience"
              className="border-border text-foreground hover:text-blue rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:basis-3/5 lg:justify-end">
          <Image
            src={"/hero.svg"}
            alt="Profile Picture"
            width={500}
            height={500}
            loading="eager"
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="mx-auto mt-6 max-w-sm md:max-w-md lg:max-w-none"
          />
        </div>
      </section>

      <SectionSeparator targetId="preview" />

      <section id="preview" className="mx-auto max-w-5xl scroll-mt-20 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            href="/experience/work"
            className="group border-border bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors"
          >
            <h3 className="text-foreground text-lg font-semibold">
              Experience
            </h3>
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

          <Link
            href="/experience/recommendations"
            className="group border-border bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors"
          >
            <h3 className="text-foreground text-lg font-semibold">
              Recommendations
            </h3>
            <div className="mt-4 flex-1 space-y-5">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="border-border rounded-lg border p-4"
                >
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
        </div>
      </section>

      <SectionSeparator label="Technologies" targetId="technologies" />

      <section id="technologies" className="mx-auto mt-20 scroll-mt-20 px-6">
        <h2 className="text-accent text-center text-5xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
        <TechLogosGrid />
      </section>
    </div>
  );
}
