"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  streaming: boolean;
};

export const ChatInput = ({ value, onChange, onSubmit, streaming }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="border-border bg-surface flex items-center gap-3 rounded-xl border p-3"
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={streaming}
        placeholder="Ask me anything..."
        className="text-foreground placeholder:text-muted flex-1 bg-transparent text-sm outline-none disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={streaming || !value.trim()}
        className="bg-accent text-background hover:bg-blue cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        {streaming ? "..." : "Send"}
      </button>
    </form>
  );
};
