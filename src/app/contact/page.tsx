import { db } from "../../lib/db";
import { ContactLink } from "../../components/ContactLink";
import GmailIcon from "../../components/svgs/gmail.svg";
import LinkedInIcon from "../../components/svgs/linkedin.svg";
import GitHubIcon from "../../components/svgs/github.svg";
import PinIcon from "../../components/svgs/pin.svg";

export default async function ContactPage() {
  const profile = await db.profile.findFirst();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        Contact
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg leading-8">
        Feel free to reach out — I&apos;m always open to new opportunities and
        conversations.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {profile?.email && (
          <ContactLink
            href={profile.email}
            type="email"
            description="If you'd like to talk about job opportunities or collaboration, feel free to reach out to me via e‑mail."
          >
            <GmailIcon className="h-6 w-6" aria-hidden="true" />
          </ContactLink>
        )}
        {profile?.linkedIn && (
          <ContactLink
            href={profile.linkedIn}
            type="link"
            label="LinkedIn"
            description="You can also visit my LinkedIn profile to see what I'm currently working on and what's been inspiring me lately."
          >
            <LinkedInIcon className="h-6 w-6" aria-hidden="true" />
          </ContactLink>
        )}
        {profile?.github && (
          <ContactLink
            href={profile.github}
            type="link"
            label="GitHub"
            description="And if you want to explore my code, experiments, and side projects, check out my GitHub account."
          >
            <GitHubIcon className="h-6 w-6" aria-hidden="true" />
          </ContactLink>
        )}
      </div>

      <div className="mt-17 flex flex-col items-center gap-5">
        <PinIcon className="text-foreground h-15 w-15" aria-hidden="true" />
        <p className="text-muted text-md lg:text-lg">
          Home base: Żywiec. Remote reach: anywhere.
        </p>
      </div>
    </div>
  );
}
