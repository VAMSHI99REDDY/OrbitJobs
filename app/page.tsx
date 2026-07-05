import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedJobs } from "@/components/home/featured-jobs";
import { Categories } from "@/components/home/categories";
import { TopCompanies } from "@/components/home/top-companies";
import { Testimonials } from "@/components/home/testimonials";
import { Cta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedJobs />
      <Categories />
      <TopCompanies />
      <Testimonials />
      <Cta />
    </>
  );
}
