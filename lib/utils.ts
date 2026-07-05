import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSalary(min: number, max: number, currency = "USD") {
  const fmt = (n: number) =>
    n >= 1000 ? `${Math.round(n / 1000)}k` : `${n}`;
  const symbol = currency === "USD" ? "$" : currency === "INR" ? "₹" : currency;
  return `${symbol}${fmt(min)} – ${symbol}${fmt(max)}`;
}

export function timeAgo(dateISO: string) {
  const diff = Date.now() - new Date(dateISO).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return "1 week ago";
  if (weeks < 5) return `${weeks} weeks ago`;
  const months = Math.floor(days / 30);
  return months <= 1 ? "1 month ago" : `${months} months ago`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
