export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Experience
      </h1>
      <div className="mt-10 flex gap-10">{children}</div>
    </div>
  );
}
