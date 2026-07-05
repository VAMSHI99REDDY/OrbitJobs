import Image from "next/image";
import type { Metadata } from "next";
import { Target, Eye, Sparkles, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about OrbitJobs' mission, vision, and the team building it.",
};

const logo = (seed: string) =>
  `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear&fontWeight=600`;

const team = [
  { name: "Elena Ford", role: "Founder & CEO" },
  { name: "Rahul Verma", role: "Head of Product" },
  { name: "Sofia Marchetti", role: "Lead Designer" },
  { name: "Daniel Cho", role: "Head of Engineering" },
];

const features = [
  {
    title: "Transparent salaries",
    description: "Every listing shows a real salary range — no vague banding, no guesswork.",
  },
  {
    title: "Real-time filtering",
    description: "Narrow thousands of roles down to the handful that actually fit in seconds.",
  },
  {
    title: "Curated companies",
    description: "We work directly with hiring teams at product-led companies, not aggregators.",
  },
  {
    title: "Built for candidates",
    description: "Save jobs, track applications, and come back exactly where you left off.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line bg-surface py-16 text-center md:py-20">
        <div className="container">
          <h1 className="font-display text-3xl font-semibold md:text-4xl">
            We&rsquo;re building a better way to hire in tech
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            OrbitJobs connects engineers, designers, and product builders with roles at
            companies that respect their time — with real salaries and real filters,
            not noise.
          </p>
        </div>
      </section>

      <section className="container grid gap-6 py-16 md:grid-cols-2 md:py-20">
        <Card>
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <CardTitle className="mt-2">Our mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted">
              Make the job search transparent and efficient for both candidates and
              companies — cutting the noise that has crept into modern hiring.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/15 text-amber-foreground">
              <Eye className="h-5 w-5" />
            </div>
            <CardTitle className="mt-2">Our vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted">
              A world where finding the right role — or the right hire — takes days,
              not months, backed by clear information at every step.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-medium text-primary">Why OrbitJobs</p>
            <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
              Built for how people actually job hunt
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-bg p-5">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">The people behind it</p>
          <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">Our team</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-line bg-surface p-6 text-center shadow-soft">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border border-line">
                <Image src={logo(member.name)} alt={member.name} fill className="object-cover" />
              </div>
              <p className="mt-4 font-display text-sm font-semibold">{member.name}</p>
              <p className="text-xs text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-primary">Get in touch</p>
            <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
              Questions, feedback, or partnerships
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              We read every message. For hiring partnerships, mention your company name
              and expected hiring volume.
            </p>
            <div className="mt-6 flex items-center gap-2.5 text-sm text-muted">
              <Mail className="h-4 w-4 text-primary" />
              hello@orbitjobs.com
            </div>
            <div className="mt-2 flex items-center gap-2.5 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              Remote-first, with hubs in NYC and Bengaluru
            </div>
          </div>

          <form className="space-y-4 rounded-2xl border border-line bg-bg p-6 shadow-soft">
            <div>
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" className="mt-2" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" className="mt-2" placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" className="mt-2" placeholder="How can we help?" />
            </div>
            <Button type="button" className="w-full">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
