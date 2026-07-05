"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { EmploymentType, ExperienceLevel, JobFilters, WorkMode } from "@/types/job";

const employmentTypes: EmploymentType[] = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels: ExperienceLevel[] = ["Entry", "Mid", "Senior", "Lead", "Executive"];
const workModes: WorkMode[] = ["Remote", "Hybrid", "Onsite"];

const MAX_SALARY = 300000;

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function JobFiltersPanel({
  filters,
  onChange,
  companies,
  onReset,
}: {
  filters: JobFilters;
  onChange: (next: JobFilters) => void;
  companies: string[];
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Reset all
        </Button>
      </div>

      <div>
        <Label htmlFor="location-filter">Location</Label>
        <Input
          id="location-filter"
          placeholder="e.g. Remote, San Francisco"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="mt-2"
        />
      </div>

      <Separator />

      <fieldset>
        <legend className="text-sm font-medium text-ink">Work mode</legend>
        <div className="mt-3 space-y-2.5">
          {workModes.map((mode) => (
            <label key={mode} className="flex items-center gap-2.5 text-sm text-muted">
              <Checkbox
                checked={filters.workMode.includes(mode)}
                onCheckedChange={() =>
                  onChange({ ...filters, workMode: toggle(filters.workMode, mode) })
                }
              />
              {mode}
            </label>
          ))}
        </div>
      </fieldset>

      <Separator />

      <fieldset>
        <legend className="text-sm font-medium text-ink">Job type</legend>
        <div className="mt-3 space-y-2.5">
          {employmentTypes.map((type) => (
            <label key={type} className="flex items-center gap-2.5 text-sm text-muted">
              <Checkbox
                checked={filters.employmentType.includes(type)}
                onCheckedChange={() =>
                  onChange({ ...filters, employmentType: toggle(filters.employmentType, type) })
                }
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <Separator />

      <fieldset>
        <legend className="text-sm font-medium text-ink">Experience</legend>
        <div className="mt-3 space-y-2.5">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center gap-2.5 text-sm text-muted">
              <Checkbox
                checked={filters.experienceLevel.includes(level)}
                onCheckedChange={() =>
                  onChange({ ...filters, experienceLevel: toggle(filters.experienceLevel, level) })
                }
              />
              {level}
            </label>
          ))}
        </div>
      </fieldset>

      <Separator />

      <div>
        <div className="flex items-center justify-between">
          <Label>Salary range (USD)</Label>
          <span className="font-mono text-xs text-muted">
            ${Math.round(filters.salaryMin / 1000)}k – ${Math.round(filters.salaryMax / 1000)}k
          </span>
        </div>
        <Slider
          className="mt-4"
          min={0}
          max={MAX_SALARY}
          step={5000}
          value={[filters.salaryMin, filters.salaryMax]}
          onValueChange={([min, max]) => onChange({ ...filters, salaryMin: min, salaryMax: max })}
        />
      </div>

      <Separator />

      <fieldset>
        <legend className="text-sm font-medium text-ink">Company</legend>
        <div className="mt-3 max-h-48 space-y-2.5 overflow-y-auto pr-1">
          {companies.map((company) => (
            <label key={company} className="flex items-center gap-2.5 text-sm text-muted">
              <Checkbox
                checked={filters.company.includes(company)}
                onCheckedChange={() =>
                  onChange({ ...filters, company: toggle(filters.company, company) })
                }
              />
              {company}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export { MAX_SALARY };
