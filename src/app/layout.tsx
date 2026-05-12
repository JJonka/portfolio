import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joanna Jurasz — fullstack Developer",
    template: "%s | Joanna Jurasz",
  },
  description:
    "I'm a fullstack developer, building modern web applications with clean code. Based in Poland, I'm open to remote work and new opportunities worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Joanna Jurasz",
    title: "Joanna Jurasz — fullstack Developer",
    description:
      "I'm a fullstack developer building modern web applications with clean code. Based in Poland, I'm open to remote work and new opportunities worldwide.",
    images: [
      {
        url: "/og-image.png",
        alt: "Joanna Jurasz — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joanna Jurasz — fullstack Developers",
    description:
      "I'm a fullstack developer building modern web applications with clean code. Based in Poland, I'm open to remote work and new opportunities worldwide.",
    images: ["/og-image.png"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <header className="border-border bg-surface/80 sticky top-0 z-50 border-b backdrop-blur">
          <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Logo />
            <Nav />
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
