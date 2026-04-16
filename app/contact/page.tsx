export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Have a question or want to work together? Send me a message and
        I&apos;ll get back to you as soon as possible.
      </p>

      <form className="mt-10 max-w-xl space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
