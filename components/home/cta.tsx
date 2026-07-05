import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="container pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-2xl bg-primary-dark px-8 py-14 text-center text-white md:py-20">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-amber/20 blur-3xl" aria-hidden />
        <div className="relative">
          <h2 className="text-balance font-display text-2xl font-semibold md:text-4xl">
            Hiring for your team? Reach candidates who are ready to move.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-white/70">
            Post a role in minutes and get in front of thousands of engineers,
            designers, and product builders actively job-hunting.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="amber">
              <Link href="/post-job">
                Post a job
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/browse-jobs">Browse jobs instead</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
