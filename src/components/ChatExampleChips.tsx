"use client";

const EXAMPLE_QUESTIONS = [
  "What's Joanna's tech stack?",
  "Tell me her most complex project",
  "Is she available for freelance?",
  "What are her strongest skills?",
];

type Props = {
  onSelect: (question: string) => void;
  disabled: boolean;
};

export const ChatExampleChips = ({ onSelect, disabled }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {EXAMPLE_QUESTIONS.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          disabled={disabled}
          className="border-border text-muted hover:border-accent hover:text-foreground cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          {q}
        </button>
      ))}
    </div>
  );
};
