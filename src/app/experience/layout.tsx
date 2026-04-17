export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        Experience
      </h1>
      <div className="mt-8 flex gap-10 md:mt-10">{children}</div>
    </div>
  );
}
