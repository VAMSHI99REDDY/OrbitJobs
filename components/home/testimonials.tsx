import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/jobs";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" aria-hidden />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[100px]" aria-hidden />
      
      <div className="container relative">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">Success stories</p>
          <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">
            People who found their role here
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-[2rem] border border-line bg-surface p-8 shadow-soft"
            >
              <blockquote className="text-[15px] font-medium leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <div className="mt-8 flex items-end justify-between gap-4">
                <figcaption className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line/50">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs font-medium text-muted">{t.role}</p>
                  </div>
                </figcaption>
                <div className="mb-1 flex text-amber">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
