export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
        Contact
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg leading-8">
        Have a question or want to work together? Send me a message and
        I&apos;ll get back to you as soon as possible.
      </p>

      <form className="mt-10 max-w-xl space-y-6">
        <div>
          <label
            htmlFor="name"
            className="text-foreground block text-sm font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-border bg-surface text-foreground focus:border-accent focus:ring-accent/20 mt-1 block w-full rounded-lg border px-4 py-2.5 shadow-sm focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-foreground block text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border-border bg-surface text-foreground focus:border-accent focus:ring-accent/20 mt-1 block w-full rounded-lg border px-4 py-2.5 shadow-sm focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-foreground block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="border-border bg-surface text-foreground focus:border-accent focus:ring-accent/20 mt-1 block w-full rounded-lg border px-4 py-2.5 shadow-sm focus:ring-2"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-background hover:bg-foreground focus:ring-accent focus:ring-offset-background rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
