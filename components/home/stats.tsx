import { stats } from "@/data/jobs";

export function Stats() {
  const doubled = [...stats, ...stats];

  return (
    <div className="border-y border-line bg-surface">
      <div className="no-scrollbar flex overflow-x-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center gap-10 py-4">
          {doubled.map((s, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap px-2">
              <span className="font-mono text-sm font-semibold text-primary">{s.value}</span>
              <span className="text-xs text-muted">{s.label}</span>
              <span className="text-line" aria-hidden>
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
