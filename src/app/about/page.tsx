import { db } from "../../lib/db";

export default async function AboutPage() {
  const profile = await db.profile.findFirst();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        About Me
      </h1>
      <div className="mt-8 grid gap-12 md:grid-cols-3">
        <div className="text-muted space-y-6 leading-7 md:col-span-2">
          {profile?.bio ? (
            profile.bio
              .split("\n")
              .map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)
          ) : (
            <p>No bio available yet.</p>
          )}
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-muted text-sm font-semibold tracking-wider uppercase">
              Location
            </h2>
            <p className="text-foreground mt-1">
              {profile?.location ?? "Not specified"}
            </p>
          </div>
          {profile?.headline && (
            <div>
              <h2 className="text-muted text-sm font-semibold tracking-wider uppercase">
                Headline
              </h2>
              <p className="text-foreground mt-1">{profile.headline}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
