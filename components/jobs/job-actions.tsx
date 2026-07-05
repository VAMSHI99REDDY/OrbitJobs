"use client";

import { Bookmark, Check, Send, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSavedJobs } from "@/hooks/use-saved-jobs";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { Job } from "@/types/job";
import * as React from "react";

export function JobActions({ job }: { job: Job }) {
  const { isSaved, toggleSaved, hydrated } = useSavedJobs();
  const [applied, setApplied] = React.useState(false);
  const saved = hydrated && isSaved(job.id);

  function handleApply() {
    setApplied(true);
    toast({
      title: "Application submitted",
      description: `Your application for ${job.title} at ${job.company} was sent.`,
      variant: "success",
    });
  }

  function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      navigator.share({ title: job.title, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "Job link copied to your clipboard." });
    }
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      <Button onClick={handleApply} disabled={applied} size="lg" className="min-w-[140px]">
        {applied ? (
          <>
            <Check className="h-4 w-4" />
            Applied
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Apply now
          </>
        )}
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={() => {
          const nowSaved = toggleSaved(job.id);
          toast({
            title: nowSaved ? "Job saved" : "Removed from saved jobs",
            description: `${job.title} at ${job.company}`,
          });
        }}
      >
        <Bookmark className={cn("h-4 w-4", saved && "fill-primary text-primary")} />
        {saved ? "Saved" : "Save job"}
      </Button>

      <Button variant="ghost" size="lg" onClick={handleShare}>
        <Share2 className="h-4 w-4" />
        Share
      </Button>
    </div>
  );
}
