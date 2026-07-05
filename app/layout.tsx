import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "OrbitJobs — Find your next role in tech",
    template: "%s | OrbitJobs",
  },
  description:
    "OrbitJobs is a modern job board connecting engineers, designers, and product talent with roles at Google, Amazon, Netflix, Adobe, and more — with transparent salaries and real-time filtering.",
  keywords: [
    "job board",
    "tech jobs",
    "engineering jobs",
    "remote jobs",
    "hiring",
    "careers",
  ],
  openGraph: {
    title: "OrbitJobs — Find your next role in tech",
    description:
      "Transparent salaries. Real-time filters. Roles at the world's best product companies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
