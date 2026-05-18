import { db } from "../lib/db";
import { ContactLink } from "./ContactLink";
import GmailIcon from "./svgs/gmail.svg";
import LinkedInIcon from "./svgs/linkedin.svg";
import GitHubIcon from "./svgs/github.svg";

export const ContactLinksSkeleton = () => (
  <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
    {[0, 1, 2].map((i) => (
      <div key={i} className="bg-surface h-40 animate-pulse rounded-xl" />
    ))}
  </div>
);

export const ContactLinks = async () => {
  const profile = await db.profile.findFirst();

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {profile?.email && (
        <ContactLink
          href={profile.email}
          type="email"
          description="If you'd like to talk about job opportunities or collaboration, feel free to reach out to me via e‑mail."
        >
          <GmailIcon className="h-6 w-6 lg:h-15 lg:w-15" aria-hidden="true" />
        </ContactLink>
      )}
      {profile?.linkedIn && (
        <ContactLink
          href={profile.linkedIn}
          type="link"
          label="LinkedIn"
          description="You can also visit my LinkedIn profile to see what I'm currently working on and what's been inspiring me lately."
        >
          <LinkedInIcon className="h-6 w-6 lg:h-15 lg:w-15" aria-hidden="true" />
        </ContactLink>
      )}
      {profile?.github && (
        <ContactLink
          href={profile.github}
          type="link"
          label="GitHub"
          description="And if you want to explore my code, experiments, and side projects, check out my GitHub account."
        >
          <GitHubIcon className="h-6 w-6 lg:h-15 lg:w-15" aria-hidden="true" />
        </ContactLink>
      )}
    </div>
  );
};
