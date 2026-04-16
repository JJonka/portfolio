import Link from "next/link";
import { db } from "@/app/lib/db";

export default async function Home() {
  const profile = await db.profile.findFirst();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">{profile?.name ?? "Your Name"}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {profile?.headline ??
            "A passionate developer building modern web experiences."}
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground"
          >
            Get in Touch
          </Link>
          <Link
            href="/experience"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface"
          >
            View Experience
          </Link>
        </div>
      </section>
    </div>
  );
}
