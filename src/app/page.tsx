import Link from "next/link";
import { db } from "../lib/db";
import Image from "next/image";

export default async function Home() {
  const profile = await db.profile.findFirst();

  return (
    <div className="flex flex-row gap-10 mx-auto max-w-5xl px-6">
      <section className="flex min-h-[70vh] basis-2/5 flex-col items-left justify-center text-left">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Hi, <br />
          <span className="text-accent">I&apos;m Joanna</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {profile?.headline ??
            "A fullstack developer - hungry for good food and building web applications."}
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
      <section className="flex basis-3/5 justify-end">
        <Image
          src={"/hero.svg"}
          alt="Profile Picture"
          width={1000}
          height={1000}
          className="mt-6 mx-auto"
        />
      </section>
    </div>
  );
}
