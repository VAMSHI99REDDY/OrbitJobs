import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Compass className="h-6 w-6" />
      </div>
      <h1 className="mt-5 font-display text-2xl font-semibold md:text-3xl">
        This page drifted out of orbit
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
