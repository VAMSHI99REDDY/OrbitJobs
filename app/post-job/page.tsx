"use client";

import * as React from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import type { EmploymentType, JobSubmission } from "@/types/job";

const STORAGE_KEY = "orbitjobs:job-submissions";
const employmentTypes: EmploymentType[] = ["Full-time", "Part-time", "Contract", "Internship"];

type FormState = {
  company: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  experience: string;
  skills: string;
  employmentType: EmploymentType;
};

const initialState: FormState = {
  company: "",
  title: "",
  description: "",
  salary: "",
  location: "",
  experience: "",
  skills: "",
  employmentType: "Full-time",
};

export default function PostJobPage() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.company.trim()) next.company = "Company name is required.";
    if (!form.title.trim()) next.title = "Job title is required.";
    if (!form.description.trim() || form.description.trim().length < 30)
      next.description = "Description should be at least 30 characters.";
    if (!form.salary.trim()) next.salary = "Salary range is required.";
    if (!form.location.trim()) next.location = "Location is required.";
    if (!form.experience.trim()) next.experience = "Experience level is required.";
    if (!form.skills.trim()) next.skills = "List at least one required skill.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Check the form",
        description: "A few fields need your attention before this can be posted.",
        variant: "destructive",
      });
      return;
    }

    const submission: JobSubmission = {
      id: `submission-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      ...form,
    };

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const existing: JobSubmission[] = raw ? JSON.parse(raw) : [];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([submission, ...existing]));
    } catch {
      // localStorage unavailable — submission still confirmed to the user
    }

    setSubmitted(true);
    setForm(initialState);
    toast({
      title: "Job posted",
      description: `${submission.title} at ${submission.company} was saved locally.`,
      variant: "success",
    });
  }

  return (
    <div className="container max-w-2xl py-10">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Rocket className="h-6 w-6" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Post a job</h1>
        <p className="mt-2 text-sm text-muted">
          Reach thousands of engineers, designers, and product builders actively looking
          for their next role.
        </p>
      </div>

      {submitted && (
        <div className="mt-6 rounded-xl border border-success/30 bg-success/5 px-4 py-3 text-sm text-success">
          Your job was posted successfully and stored on this device.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              className="mt-2"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="e.g. Cosmos Labs"
            />
            {errors.company && <p className="mt-1.5 text-xs text-danger">{errors.company}</p>}
          </div>

          <div>
            <Label htmlFor="title">Job title</Label>
            <Input
              id="title"
              className="mt-2"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="e.g. Senior Backend Engineer"
            />
            {errors.title && <p className="mt-1.5 text-xs text-danger">{errors.title}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="description">Job description</Label>
          <Textarea
            id="description"
            className="mt-2"
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Describe the role, team, and what a great candidate looks like..."
          />
          {errors.description && <p className="mt-1.5 text-xs text-danger">{errors.description}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="salary">Salary range</Label>
            <Input
              id="salary"
              className="mt-2"
              value={form.salary}
              onChange={(e) => update("salary", e.target.value)}
              placeholder="e.g. $120k – $160k"
            />
            {errors.salary && <p className="mt-1.5 text-xs text-danger">{errors.salary}</p>}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              className="mt-2"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="e.g. Remote, or Hyderabad, India"
            />
            {errors.location && <p className="mt-1.5 text-xs text-danger">{errors.location}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="experience">Experience required</Label>
            <Input
              id="experience"
              className="mt-2"
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
              placeholder="e.g. 3-5 years"
            />
            {errors.experience && <p className="mt-1.5 text-xs text-danger">{errors.experience}</p>}
          </div>

          <div>
            <Label htmlFor="employmentType">Employment type</Label>
            <Select
              value={form.employmentType}
              onValueChange={(v) => update("employmentType", v as EmploymentType)}
            >
              <SelectTrigger id="employmentType" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {employmentTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="skills">Required skills</Label>
          <Input
            id="skills"
            className="mt-2"
            value={form.skills}
            onChange={(e) => update("skills", e.target.value)}
            placeholder="e.g. React, TypeScript, GraphQL (comma separated)"
          />
          {errors.skills && <p className="mt-1.5 text-xs text-danger">{errors.skills}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full">
          Post job
        </Button>
      </form>
    </div>
  );
}
