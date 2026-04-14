import { db } from "@/app/lib/db";

export default async function AboutPage() {
  const profile = await db.profile.findFirst();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        About Me
      </h1>
      <div className="mt-8 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 text-muted leading-7">
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Location
            </h2>
            <p className="mt-1 text-foreground">
              {profile?.location ?? "Not specified"}
            </p>
          </div>
          {profile?.headline && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Headline
              </h2>
              <p className="mt-1 text-foreground">{profile.headline}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
