import Image from "next/image";
import Link from "next/link";
import { companies, jobs } from "@/data/jobs";

const getLogo = (website: string) => {
  const name = website.replace("https://", "").replace("http://", "").split(".")[0];
  return `/image/${name}.png`;
};

export function TopCompanies() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">Trusted by</p>
          <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
            Top companies hiring now
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {companies.map((c) => {
            const count = jobs.filter((j) => j.company === c.name).length;
            return (
              <Link
                key={c.name}
                href={`/browse-jobs?company=${encodeURIComponent(c.name)}`}
                className="flex flex-row items-center gap-4 rounded-[2rem] border border-line bg-bg px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden">
                  <Image src={getLogo(c.website)} alt={`${c.name} logo`} fill className="object-contain" />
                </div>
                <div className="text-left">
                  <p className="font-display text-sm font-bold text-ink">{c.name}</p>
                  <p className="text-xs font-medium text-muted">{count} open roles</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
