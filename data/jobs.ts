import { Job } from "@/types/job";

const getLogo = (website: string) => {
  const name = website.replace("https://", "").replace("http://", "").split(".")[0];
  return `/image/${name}.png`;
};

const daysAgo = (n: number) =>
  new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

export const companies = [
  {
    name: "Google",
    website: "https://google.com",
    description:
      "Google builds products used by billions of people every day, from Search to Cloud to Android.",
  },
  {
    name: "Microsoft",
    website: "https://microsoft.com",
    description:
      "Microsoft empowers every person and organization on the planet to achieve more, across cloud, productivity, and gaming.",
  },
  {
    name: "Amazon",
    website: "https://amazon.com",
    description:
      "Amazon is a global technology company focused on e-commerce, cloud computing, and logistics at scale.",
  },
  {
    name: "Netflix",
    website: "https://netflix.com",
    description:
      "Netflix entertains the world with a streaming platform reaching hundreds of millions of members.",
  },
  {
    name: "Adobe",
    website: "https://adobe.com",
    description:
      "Adobe powers creativity and digital experiences through Creative Cloud, Document Cloud, and Experience Cloud.",
  },
  {
    name: "Atlassian",
    website: "https://atlassian.com",
    description:
      "Atlassian builds tools like Jira and Confluence that unleash the potential of every team.",
  },
  {
    name: "Salesforce",
    website: "https://salesforce.com",
    description:
      "Salesforce is the world's #1 CRM, helping companies connect with customers in a whole new way.",
  },
  {
    name: "Uber",
    website: "https://uber.com",
    description:
      "Uber reimagines the way the world moves for the better, connecting riders, drivers, and couriers.",
  },
  {
    name: "Spotify",
    website: "https://spotify.com",
    description:
      "Spotify is the world's most popular audio streaming platform, connecting listeners with creators.",
  },
  {
    name: "Airbnb",
    website: "https://airbnb.com",
    description:
      "Airbnb hosts unlock unique stays and experiences for guests in every corner of the world.",
  },
];

const skillPool = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "GraphQL"],
  backend: ["Node.js", "Go", "Java", "PostgreSQL", "Kafka", "gRPC", "Kubernetes"],
  data: ["Python", "SQL", "Spark", "Airflow", "TensorFlow", "PyTorch", "dbt"],
  design: ["Figma", "Design Systems", "Prototyping", "User Research", "Motion Design"],
  devops: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Prometheus"],
  product: ["Roadmapping", "A/B Testing", "SQL", "Analytics", "Stakeholder Management"],
  mobile: ["Swift", "Kotlin", "React Native", "iOS", "Android"],
};

const baseBenefits = [
  "Comprehensive health, dental & vision insurance",
  "Flexible PTO and paid holidays",
  "401(k) / retirement matching",
  "Annual learning & development stipend",
  "Remote-friendly equipment budget",
  "Mental health & wellness support",
];

interface Seed {
  title: string;
  company: string;
  location: string;
  workMode: Job["workMode"];
  employmentType: Job["employmentType"];
  experienceLevel: Job["experienceLevel"];
  salaryMin: number;
  salaryMax: number;
  category: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDaysAgo: number;
  featured?: boolean;
  currency?: "USD" | "INR";
}

const seeds: Seed[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Google",
    location: "Mountain View, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 165000,
    salaryMax: 220000,
    category: "Engineering",
    skills: skillPool.frontend,
    description:
      "Join the Search Experience team to build fast, accessible interfaces used by billions of people every single day.",
    responsibilities: [
      "Lead architecture decisions for high-traffic UI surfaces",
      "Mentor mid-level engineers and run design reviews",
      "Partner with design and product to ship experiments at scale",
      "Improve core web vitals across flagship surfaces",
    ],
    requirements: [
      "6+ years building production web applications",
      "Deep knowledge of React and modern browser performance",
      "Experience with large-scale component systems",
      "Strong communication and mentorship skills",
    ],
    postedDaysAgo: 2,
    featured: true,
  },
  {
    title: "Backend Software Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 140000,
    salaryMax: 190000,
    category: "Engineering",
    skills: skillPool.backend,
    description:
      "Build and scale the services that power fulfillment operations across Amazon's global logistics network.",
    responsibilities: [
      "Design distributed services handling millions of daily events",
      "Own on-call rotation and production reliability",
      "Write RFCs for new service architecture",
      "Collaborate with SDEs across three time zones",
    ],
    requirements: [
      "3+ years with distributed systems in production",
      "Strong CS fundamentals: data structures, algorithms",
      "Experience with AWS primitives (SQS, DynamoDB, Lambda)",
      "Comfort with high-ambiguity, fast-paced environments",
    ],
    postedDaysAgo: 5,
    featured: true,
  },
  {
    title: "Product Designer, UX",
    company: "Airbnb",
    location: "San Francisco, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 130000,
    salaryMax: 175000,
    category: "Design",
    skills: skillPool.design,
    description:
      "Shape end-to-end booking and host experiences that guests trust in over 220 countries and regions.",
    responsibilities: [
      "Run discovery research with hosts and guests",
      "Prototype flows in Figma from concept to hi-fi",
      "Partner closely with PM and engineering leads",
      "Contribute to and evolve the shared design system",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio of shipped consumer products",
      "Fluency in interaction and visual design",
      "Comfortable presenting to senior stakeholders",
    ],
    postedDaysAgo: 3,
    featured: true,
  },
  {
    title: "Data Scientist, Personalization",
    company: "Netflix",
    location: "Los Gatos, CA",
    workMode: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 170000,
    salaryMax: 230000,
    category: "Data",
    skills: skillPool.data,
    description:
      "Improve the recommendation systems that help members find stories they'll love, at global streaming scale.",
    responsibilities: [
      "Design and analyze large-scale A/B tests",
      "Build models that personalize the member homepage",
      "Partner with ML engineering to productionize research",
      "Present findings to cross-functional leadership",
    ],
    requirements: [
      "5+ years in applied data science or ML",
      "Strong statistics and experimentation background",
      "Proficiency in Python and SQL at scale",
      "Experience with recommendation systems a plus",
    ],
    postedDaysAgo: 1,
    featured: true,
  },
  {
    title: "DevOps Engineer",
    company: "Atlassian",
    location: "Austin, TX",
    workMode: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 125000,
    salaryMax: 165000,
    category: "Engineering",
    skills: skillPool.devops,
    description:
      "Keep Jira and Confluence infrastructure fast, secure, and reliable for millions of teams worldwide.",
    responsibilities: [
      "Own CI/CD pipelines across dozens of services",
      "Build observability tooling and alerting",
      "Drive cost optimization across cloud infrastructure",
      "Participate in incident response and postmortems",
    ],
    requirements: [
      "3+ years in DevOps / platform / SRE roles",
      "Hands-on Terraform and Kubernetes experience",
      "Strong scripting ability (Go, Python, or Bash)",
      "Solid understanding of cloud networking and security",
    ],
    postedDaysAgo: 6,
  },
  {
    title: "Engineering Manager, Payments",
    company: "Uber",
    location: "San Francisco, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Lead",
    salaryMin: 200000,
    salaryMax: 260000,
    category: "Engineering",
    skills: ["Leadership", "System Design", "Go", "PostgreSQL", "Roadmapping"],
    description:
      "Lead a team building the payments platform that settles rides and deliveries across 70+ countries.",
    responsibilities: [
      "Grow and coach a team of 6-8 engineers",
      "Own technical roadmap for payments reliability",
      "Partner with finance and compliance stakeholders",
      "Drive quarterly planning and performance reviews",
    ],
    requirements: [
      "2+ years managing engineering teams",
      "Prior hands-on experience in backend systems",
      "Track record shipping payments or fintech products",
      "Excellent stakeholder and cross-team communication",
    ],
    postedDaysAgo: 4,
  },
  {
    title: "Machine Learning Engineer",
    company: "Spotify",
    location: "New York, NY",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 145000,
    salaryMax: 195000,
    category: "Data",
    skills: skillPool.data,
    description:
      "Build the ML pipelines behind Discover Weekly and other personalization features loved by millions.",
    responsibilities: [
      "Develop and deploy recommendation models to production",
      "Build feature pipelines using Spark and Airflow",
      "Collaborate with research scientists on new approaches",
      "Monitor model performance and drift over time",
    ],
    requirements: [
      "3+ years shipping ML systems in production",
      "Strong Python and distributed data processing skills",
      "Experience with TensorFlow or PyTorch",
      "Bonus: experience with audio or recommender systems",
    ],
    postedDaysAgo: 8,
  },
  {
    title: "Product Manager, Growth",
    company: "Salesforce",
    location: "Remote (US)",
    workMode: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 150000,
    salaryMax: 200000,
    category: "Product",
    skills: skillPool.product,
    description:
      "Own the self-serve growth funnel for Salesforce Essentials, from signup to activation to expansion.",
    responsibilities: [
      "Define and prioritize the growth product roadmap",
      "Run structured experimentation programs",
      "Partner with design, data, and marketing teams",
      "Present roadmap and results to executive stakeholders",
    ],
    requirements: [
      "5+ years of B2B SaaS product management",
      "Strong quantitative and analytical skills",
      "Experience running high-velocity experimentation",
      "Excellent written and verbal communication",
    ],
    postedDaysAgo: 7,
  },
  {
    title: "iOS Engineer",
    company: "Adobe",
    location: "San Jose, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 135000,
    salaryMax: 180000,
    category: "Engineering",
    skills: skillPool.mobile,
    description:
      "Build delightful, high-performance creative tools for the Adobe Lightroom mobile experience.",
    responsibilities: [
      "Ship new features across the Lightroom iOS app",
      "Optimize rendering pipelines for photo editing",
      "Write unit and UI tests to keep quality high",
      "Collaborate with design on native interaction patterns",
    ],
    requirements: [
      "3+ years of native iOS development in Swift",
      "Experience with Core Image or graphics pipelines a plus",
      "Strong understanding of iOS performance profiling",
      "Passion for craft and pixel-level polish",
    ],
    postedDaysAgo: 9,
  },
  {
    title: "Site Reliability Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 160000,
    salaryMax: 210000,
    category: "Engineering",
    skills: skillPool.devops,
    description:
      "Ensure Azure's core compute services stay reliable at massive global scale, 24/7/365.",
    responsibilities: [
      "Define SLOs and error budgets for core services",
      "Automate toil out of operational workflows",
      "Lead blameless postmortems after major incidents",
      "Partner with dev teams on reliability reviews",
    ],
    requirements: [
      "5+ years in SRE, infrastructure, or platform roles",
      "Deep knowledge of distributed systems at scale",
      "Strong scripting/automation skills",
      "Experience with on-call leadership",
    ],
    postedDaysAgo: 3,
  },
  {
    title: "Frontend Developer",
    company: "Spotify",
    location: "Remote (Global)",
    workMode: "Remote",
    employmentType: "Contract",
    experienceLevel: "Mid",
    salaryMin: 90000,
    salaryMax: 130000,
    category: "Engineering",
    skills: skillPool.frontend,
    description:
      "Contract role building web player experiences used by hundreds of millions of listeners.",
    responsibilities: [
      "Implement pixel-perfect, accessible UI from Figma specs",
      "Collaborate with a small squad on rapid iteration",
      "Write component tests and maintain documentation",
      "Participate in async standups across time zones",
    ],
    requirements: [
      "3+ years with React and modern CSS",
      "Comfort working async in a distributed team",
      "Strong eye for accessibility and detail",
      "Available for a 6-month contract, extendable",
    ],
    postedDaysAgo: 10,
  },
  {
    title: "Cloud Solutions Architect",
    company: "Amazon",
    location: "Arlington, VA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 175000,
    salaryMax: 235000,
    category: "Engineering",
    skills: ["AWS", "Terraform", "System Design", "Security", "Networking"],
    description:
      "Advise enterprise customers on designing secure, cost-efficient architectures on AWS.",
    responsibilities: [
      "Lead architecture reviews with enterprise customers",
      "Design reference architectures for regulated industries",
      "Deliver technical workshops and best-practice guidance",
      "Partner with account teams on strategic accounts",
    ],
    requirements: [
      "7+ years in cloud architecture or infrastructure consulting",
      "AWS certifications preferred (Solutions Architect Pro)",
      "Excellent client-facing communication skills",
      "Willingness to travel occasionally",
    ],
    postedDaysAgo: 12,
  },
  {
    title: "UX Researcher",
    company: "Google",
    location: "New York, NY",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 125000,
    salaryMax: 170000,
    category: "Design",
    skills: ["User Research", "Interviewing", "Survey Design", "Figma"],
    description:
      "Uncover deep user insight for Google Workspace to guide product strategy and design decisions.",
    responsibilities: [
      "Plan and conduct qualitative and quantitative research",
      "Synthesize findings into actionable recommendations",
      "Partner with PM and design on research roadmaps",
      "Build repeatable research operations and tooling",
    ],
    requirements: [
      "3+ years in UX research at a product company",
      "Strong grounding in research methodology",
      "Excellent storytelling and synthesis skills",
      "Experience with enterprise or productivity tools a plus",
    ],
    postedDaysAgo: 11,
  },
  {
    title: "Security Engineer",
    company: "Uber",
    location: "Amsterdam, Netherlands",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 130000,
    salaryMax: 175000,
    category: "Engineering",
    skills: ["Security", "Threat Modeling", "Go", "Cloud Security"],
    description:
      "Protect rider and driver data across Uber's global platform through proactive security engineering.",
    responsibilities: [
      "Perform threat modeling on new platform features",
      "Build internal tooling for automated security scanning",
      "Respond to and lead security incident investigations",
      "Partner with product teams on secure design reviews",
    ],
    requirements: [
      "5+ years in application or platform security",
      "Strong understanding of OWASP and cloud threat models",
      "Scripting ability in Go or Python",
      "Excellent judgment under ambiguity",
    ],
    postedDaysAgo: 14,
  },
  {
    title: "Data Analyst, Marketplace",
    company: "Airbnb",
    location: "Remote (US)",
    workMode: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Entry",
    salaryMin: 85000,
    salaryMax: 115000,
    category: "Data",
    skills: ["SQL", "Python", "Tableau", "Statistics"],
    description:
      "Analyze host and guest behavior to help the marketplace team make smarter, faster decisions.",
    responsibilities: [
      "Build dashboards tracking marketplace health",
      "Partner with PMs to scope analytical questions",
      "Run exploratory analysis to surface new insights",
      "Present findings clearly to non-technical stakeholders",
    ],
    requirements: [
      "1-3 years of analytics or data experience",
      "Strong SQL and spreadsheet/BI tool skills",
      "Curious, structured approach to problem solving",
      "Bachelor's degree in a quantitative field or equivalent",
    ],
    postedDaysAgo: 4,
  },
  {
    title: "Full Stack Developer",
    company: "Atlassian",
    location: "Sydney, Australia",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 120000,
    salaryMax: 160000,
    category: "Engineering",
    skills: [...skillPool.frontend.slice(0, 3), ...skillPool.backend.slice(0, 3)],
    description:
      "Build new collaboration features across the Confluence web app, from database to UI.",
    responsibilities: [
      "Ship features spanning frontend and backend services",
      "Write clean, well-tested, maintainable code",
      "Participate in sprint planning and code reviews",
      "Champion accessibility and performance best practices",
    ],
    requirements: [
      "3+ years of full stack web development",
      "Comfort across React and Java or Node backends",
      "Experience with relational databases",
      "Strong collaboration and communication skills",
    ],
    postedDaysAgo: 6,
  },
  {
    title: "AI Research Scientist",
    company: "Microsoft",
    location: "Cambridge, MA",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Lead",
    salaryMin: 210000,
    salaryMax: 280000,
    category: "Data",
    skills: ["PyTorch", "Deep Learning", "Research", "Python", "Distributed Training"],
    description:
      "Push the boundaries of applied AI research for next-generation Copilot experiences.",
    responsibilities: [
      "Design and run large-scale model training experiments",
      "Publish findings internally and at top-tier conferences",
      "Collaborate with product teams to productionize research",
      "Mentor junior researchers and PhD interns",
    ],
    requirements: [
      "PhD in ML, CS, or related field, or equivalent experience",
      "Track record of research publications or shipped models",
      "Deep expertise in transformer architectures",
      "Strong distributed systems intuition for training at scale",
    ],
    postedDaysAgo: 2,
    featured: true,
  },
  {
    title: "Growth Marketing Manager",
    company: "Netflix",
    location: "Los Angeles, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 110000,
    salaryMax: 150000,
    category: "Marketing",
    skills: ["Analytics", "A/B Testing", "SQL", "Lifecycle Marketing"],
    description:
      "Drive subscriber growth campaigns across paid, owned, and lifecycle marketing channels.",
    responsibilities: [
      "Plan and execute multi-channel growth campaigns",
      "Analyze funnel performance and iterate quickly",
      "Partner with creative and data teams on experiments",
      "Report results and learnings to leadership",
    ],
    requirements: [
      "4+ years in growth or performance marketing",
      "Strong analytical and experimentation mindset",
      "Experience with marketing analytics tooling",
      "Excellent cross-functional collaboration skills",
    ],
    postedDaysAgo: 5,
  },
  {
    title: "Customer Success Manager",
    company: "Salesforce",
    location: "Chicago, IL",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 95000,
    salaryMax: 130000,
    category: "Customer Success",
    skills: ["Account Management", "SaaS", "Communication", "CRM"],
    description:
      "Help enterprise customers unlock full value from the Salesforce platform post-sale.",
    responsibilities: [
      "Own renewal and expansion outcomes for a book of accounts",
      "Build and execute customer success plans",
      "Identify risk early and drive proactive interventions",
      "Advocate for customer needs internally",
    ],
    requirements: [
      "3+ years in customer success or account management",
      "Experience with enterprise SaaS products",
      "Strong relationship-building and communication skills",
      "Comfort managing a diverse portfolio of accounts",
    ],
    postedDaysAgo: 9,
  },
  {
    title: "QA / Test Automation Engineer",
    company: "Adobe",
    location: "Bengaluru, India",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 1800000,
    salaryMax: 2600000,
    currency: "INR" as const,
    category: "Engineering",
    skills: ["Selenium", "Cypress", "Python", "CI/CD", "Test Strategy"],
    description:
      "Build automated test frameworks that keep Creative Cloud releases fast and reliable.",
    responsibilities: [
      "Design and maintain end-to-end test automation suites",
      "Integrate automated tests into CI/CD pipelines",
      "Triage failures and collaborate with engineers on fixes",
      "Define quality gates for major releases",
    ],
    requirements: [
      "4+ years in QA automation or SDET roles",
      "Strong scripting skills in Python or JavaScript",
      "Experience with Cypress, Selenium, or Playwright",
      "Detail-oriented with a strong quality mindset",
    ],
    postedDaysAgo: 3,
  },
  {
    title: "Platform Engineer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryMin: 140000,
    salaryMax: 185000,
    category: "Engineering",
    skills: skillPool.devops,
    description:
      "Build the internal developer platform that hundreds of squads rely on to ship confidently.",
    responsibilities: [
      "Design self-serve tooling for service provisioning",
      "Improve developer experience across the deployment pipeline",
      "Own platform reliability and capacity planning",
      "Gather feedback from internal engineering teams",
    ],
    requirements: [
      "5+ years in platform, infra, or backend engineering",
      "Strong Kubernetes and cloud infrastructure experience",
      "Product mindset applied to internal tooling",
      "Excellent documentation habits",
    ],
    postedDaysAgo: 8,
  },
  {
    title: "Technical Writer",
    company: "Atlassian",
    location: "Remote (Global)",
    workMode: "Remote",
    employmentType: "Part-time",
    experienceLevel: "Entry",
    salaryMin: 55000,
    salaryMax: 80000,
    category: "Content",
    skills: ["Technical Writing", "Markdown", "API Documentation", "Editing"],
    description:
      "Craft clear, developer-friendly documentation for Atlassian's public REST APIs.",
    responsibilities: [
      "Write and maintain developer documentation and guides",
      "Collaborate with engineers to validate technical accuracy",
      "Improve information architecture across docs sites",
      "Review community contributions for clarity and tone",
    ],
    requirements: [
      "1-3 years of technical writing experience",
      "Comfort reading code samples across languages",
      "Excellent English writing and editing skills",
      "Portfolio of published documentation",
    ],
    postedDaysAgo: 15,
  },
  {
    title: "Sales Engineer",
    company: "Salesforce",
    location: "London, UK",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 90000,
    salaryMax: 130000,
    category: "Sales",
    skills: ["Solution Consulting", "Demos", "APIs", "Salesforce Platform"],
    description:
      "Partner with account executives to design and demo tailored Salesforce solutions for prospects.",
    responsibilities: [
      "Deliver technical product demonstrations to prospects",
      "Design proof-of-concept solutions for enterprise deals",
      "Respond to technical RFPs and security questionnaires",
      "Stay current on the evolving Salesforce platform",
    ],
    requirements: [
      "3+ years in pre-sales, solutions consulting, or engineering",
      "Strong presentation and storytelling skills",
      "Comfort with APIs and platform configuration",
      "Customer-first mindset under deal pressure",
    ],
    postedDaysAgo: 7,
  },
  {
    title: "Android Engineer",
    company: "Uber",
    location: "Bengaluru, India",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    salaryMin: 2200000,
    salaryMax: 3200000,
    currency: "INR" as const,
    category: "Engineering",
    skills: skillPool.mobile,
    description:
      "Build core rider-app experiences for one of the largest Android user bases in the world.",
    responsibilities: [
      "Ship features across the Uber rider Android app",
      "Optimize app startup time and memory footprint",
      "Write instrumented and unit tests for new features",
      "Collaborate closely with design and backend teams",
    ],
    requirements: [
      "3+ years of native Android development in Kotlin",
      "Experience with modern Android architecture (MVVM)",
      "Strong debugging and performance profiling skills",
      "Bonus: experience with maps or location-based features",
    ],
    postedDaysAgo: 10,
  },
  {
    title: "Business Analyst, Operations",
    company: "Amazon",
    location: "Hyderabad, India",
    workMode: "Onsite",
    employmentType: "Full-time",
    experienceLevel: "Entry",
    salaryMin: 1200000,
    salaryMax: 1800000,
    currency: "INR" as const,
    category: "Data",
    skills: ["SQL", "Excel", "Data Visualization", "Process Improvement"],
    description:
      "Analyze fulfillment center operations data to identify efficiency and cost-saving opportunities.",
    responsibilities: [
      "Build recurring operational reporting and dashboards",
      "Partner with ops leaders to identify improvement areas",
      "Run root-cause analysis on operational anomalies",
      "Present recommendations to site leadership",
    ],
    requirements: [
      "0-2 years of analytics or operations experience",
      "Strong Excel and SQL fundamentals",
      "Sharp attention to detail and structured thinking",
      "Bachelor's degree in engineering, stats, or related field",
    ],
    postedDaysAgo: 13,
  },
];

export const jobs: Job[] = seeds.map((s, i) => {
  const company = companies.find((c) => c.name === s.company)!;
  return {
    id: `job-${i + 1}`,
    title: s.title,
    company: s.company,
    companyLogo: getLogo(company.website),
    companyDescription: company.description,
    companyWebsite: company.website,
    location: s.location,
    workMode: s.workMode,
    employmentType: s.employmentType,
    experienceLevel: s.experienceLevel,
    salaryMin: s.salaryMin,
    salaryMax: s.salaryMax,
    currency: s.currency ?? "USD",
    category: s.category,
    skills: s.skills,
    description: s.description,
    responsibilities: s.responsibilities,
    requirements: s.requirements,
    benefits: baseBenefits,
    postedAt: daysAgo(s.postedDaysAgo),
    featured: s.featured,
  };
});

export const categories = [
  { name: "Engineering", icon: "Code2", count: jobs.filter((j) => j.category === "Engineering").length },
  { name: "Design", icon: "Palette", count: jobs.filter((j) => j.category === "Design").length },
  { name: "Data", icon: "BarChart3", count: jobs.filter((j) => j.category === "Data").length },
  { name: "Product", icon: "Lightbulb", count: jobs.filter((j) => j.category === "Product").length },
  { name: "Marketing", icon: "Megaphone", count: jobs.filter((j) => j.category === "Marketing").length },
  { name: "Sales", icon: "Handshake", count: jobs.filter((j) => j.category === "Sales").length },
  { name: "Customer Success", icon: "HeartHandshake", count: jobs.filter((j) => j.category === "Customer Success").length },
  { name: "Content", icon: "FileText", count: jobs.filter((j) => j.category === "Content").length },
];

export const testimonials = [
  {
    name: "Priya Nair",
    role: "Senior Frontend Engineer, hired at Google",
    quote:
      "OrbitJobs surfaced roles that actually matched my stack. I had two interviews within a week of applying.",
    avatar: "/image/person1.png",
  },
  {
    name: "Marcus Webb",
    role: "Product Designer, hired at Airbnb",
    quote:
      "The filters saved me hours. Salary transparency meant I never wasted time on a mismatched offer.",
    avatar: "/image/person2.png",
  },
  {
    name: "Ananya Rao",
    role: "Data Scientist, hired at Netflix",
    quote:
      "Posting my saved searches and getting notified felt like having a recruiter working just for me.",
    avatar: "/image/person3.png",
  },
];

export const stats = [
  { label: "Live job listings", value: "12,400+" },
  { label: "Hiring companies", value: "1,850+" },
  { label: "Candidates placed", value: "38,000+" },
  { label: "Avg. time to first interview", value: "6 days" },
];
