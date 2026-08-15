import { eur, sizes, type SizeId } from "@/config/business";

export function SizeSelector({
  value,
  onChange,
  className = "",
}: {
  value: SizeId;
  onChange: (s: SizeId) => void;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-3 gap-2 sm:flex sm:flex-wrap ${className}`}>
      {sizes.map((s) => {
        const active = s.id === value;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(s.id)}
            aria-pressed={active}
            className={`min-w-0 border px-2 py-2.5 text-center text-[0.82rem] transition-colors sm:min-w-[7.5rem] sm:px-4 sm:text-left sm:text-sm ${
              active
                ? "border-honey bg-honey/12 text-foreground"
                : "border-border text-muted-foreground hover:border-honey/60"
            }`}
          >
            <span className="block whitespace-nowrap">{s.label}</span>
            <span className="block whitespace-nowrap text-xs text-muted-foreground">{eur(s.price)}</span>
          </button>
        );
      })}
    </div>
  );
}
