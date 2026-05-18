import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactLinks, ContactLinksSkeleton } from "../../components/ContactLinks";
import PinIcon from "../../components/svgs/pin.svg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'd love to hear from you! Whether you have a project in mind or just want to say hi, reach out via email, LinkedIn, or GitHub — I'm always open to new conversations and opportunities.",
  openGraph: {
    title: "Contact Joanna Jurasz — fullstack Developer Available for Work",
    description:
      "I'd love to hear from you! Whether you have a project in mind or just want to say hi, reach out via email, LinkedIn, or GitHub — I'm always open to new conversations and opportunities.",
    url: "/contact",
    images: [
      { url: "/og-image.png", alt: "Joanna Jurasz — Fullstack Developer" },
    ],
  },
};

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        Contact
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg leading-8">
        Feel free to reach out — I&apos;m always open to new opportunities and
        conversations.
      </p>

      <Suspense fallback={<ContactLinksSkeleton />}>
        <ContactLinks />
      </Suspense>

      <div className="mt-17 flex flex-col items-center gap-5">
        <PinIcon className="text-foreground h-15 w-15" aria-hidden="true" />
        <p className="text-muted text-md lg:text-lg">
          Home base: Żywiec. Remote reach: anywhere.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
