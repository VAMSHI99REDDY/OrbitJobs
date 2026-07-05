export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship";

export type WorkMode = "Remote" | "Hybrid" | "Onsite";

export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead" | "Executive";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  companyDescription: string;
  companyWebsite: string;
  location: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  currency: "USD" | "INR";
  category: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedAt: string;
  featured?: boolean;
}

export interface JobFilters {
  query: string;
  location: string;
  employmentType: EmploymentType[];
  workMode: WorkMode[];
  experienceLevel: ExperienceLevel[];
  company: string[];
  salaryMin: number;
  salaryMax: number;
}

export type SortOption = "latest" | "salary" | "relevant";

export interface JobSubmission {
  id: string;
  company: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  experience: string;
  skills: string;
  employmentType: EmploymentType;
  submittedAt: string;
}
