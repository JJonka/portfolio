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
}
