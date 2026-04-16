import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Nav } from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joanna Jurasz - fullstack developer",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between py-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-accent flex flex-row items-center gap-4 justify-center"
            >
              <Image src={"/Logo.svg"} alt="Logo" width={40} height={40} />
              <h2 className="flex flex-col">
                <span className="text-accent">Joanna Jurasz</span>
                <small className="text-foreground text-xs">
                  FULLSTACK DEVELOPER
                </small>
              </h2>
            </Link>
            <Nav />
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} Joanna Jurasz. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
