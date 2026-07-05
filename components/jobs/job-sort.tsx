"use client";

import { ArrowDownUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SortOption } from "@/types/job";

const options: { value: SortOption; label: string }[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "latest", label: "Latest" },
  { value: "salary", label: "Highest salary" },
];

export function JobSort({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[180px]">
        <span className="flex items-center gap-2">
          <ArrowDownUp className="h-4 w-4 text-muted" />
          <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
