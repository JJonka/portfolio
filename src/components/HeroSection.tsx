import Link from "next/link";
import Image from "next/image";
import { db } from "../lib/db";

const HeroSection = async () => {
  const profile = await db.profile.findFirst();

  return (
    <section className={"mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:flex-row"}>
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
          priority
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="mx-auto mt-6 max-w-sm md:max-w-md lg:max-w-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
