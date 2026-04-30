import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link
    href="/"
    className="text-accent flex flex-row items-center justify-center gap-4 text-lg font-bold tracking-tight"
  >
    <Image src={"/Logo.svg"} alt="Logo" width={40} height={40} />
    <h2 className="flex flex-col">
      <span className="text-accent">Joanna Jurasz</span>
      <small className="text-foreground text-xs">FULLSTACK DEVELOPER</small>
    </h2>
  </Link>
);
