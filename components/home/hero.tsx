"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Senior Frontend Engineer",
  "Product Designer",
  "Data Scientist",
  "DevOps Engineer",
  "Product Manager",
];

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("location", location);
    router.push(`/browse-jobs?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/image/background.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden
      />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-amber/20 blur-3xl" aria-hidden />

      <div className="container relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            12,400+ live roles from 1,850+ companies
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
            Find your next role as a{" "}
            <span className="relative inline-block h-[1.15em] min-w-[280px] align-bottom md:min-w-[420px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 top-0 whitespace-nowrap text-amber"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-balance text-white/70">
            Transparent salaries, real filters, and roles at the companies engineers
            actually want to join — updated every day.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-9 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-lift sm:flex-row sm:rounded-2xl"
          >
            <div className="flex flex-1 items-center gap-2 rounded-xl px-3">
              <Search className="h-4.5 w-4.5 shrink-0 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill, or company"
                className="h-11 w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
            </div>
            <div className="hidden h-8 w-px bg-line sm:block" aria-hidden />
            <div className="flex flex-1 items-center gap-2 rounded-xl px-3">
              <MapPin className="h-4.5 w-4.5 shrink-0 text-muted" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or remote"
                className="h-11 w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
            </div>
            <Button type="submit" size="lg" className="shrink-0">
              Search jobs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
            <span>Popular:</span>
            {["Remote", "React", "Product Design", "Data Science"].map((tag) => (
              <button
                key={tag}
                onClick={() => router.push(`/browse-jobs?q=${encodeURIComponent(tag)}`)}
                className="rounded-full border border-white/15 px-3 py-1 transition-colors hover:bg-white/10 hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
