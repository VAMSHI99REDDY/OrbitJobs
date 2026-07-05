import Link from "next/link";
import {
  Code2,
  Palette,
  BarChart3,
  Lightbulb,
  Megaphone,
  Handshake,
  HeartHandshake,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/data/jobs";

const icons: Record<string, LucideIcon> = {
  Code2,
  Palette,
  BarChart3,
  Lightbulb,
  Megaphone,
  Handshake,
  HeartHandshake,
  FileText,
};

export function Categories() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-left">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">Explore by team</p>
        <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">
          Popular categories
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((cat) => {
          const Icon = icons[cat.icon] ?? Code2;
          return (
            <Link
              key={cat.name}
              href={`/browse-jobs?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center justify-center rounded-2xl border border-line bg-surface py-8 px-2 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <p className="font-display text-sm font-semibold text-ink">{cat.name}</p>
              <p className="mt-1 text-xs text-muted">
                {cat.count} {cat.count === 1 ? "role" : "roles"}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
