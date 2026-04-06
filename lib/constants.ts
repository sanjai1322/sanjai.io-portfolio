export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: "⚡",
    color: "red" as const,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: "🔧",
    color: "blue" as const,
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "AI / ML",
    icon: "🧠",
    color: "red" as const,
    skills: ["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "CNNs", "Vision Transformers"],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "blue" as const,
    skills: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "red" as const,
    skills: ["Vercel", "AWS", "Docker", "GitHub Actions"],
  },
  {
    category: "Creative & Tools",
    icon: "🎨",
    color: "blue" as const,
    skills: ["Figma", "Remotion", "After Effects", "Canva", "Blender"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "AstroSpectra AI (PGAIS)",
    description: "Physics-Guided AI for Exoplanet Atmospheric Analysis using 1D CNNs and JWST data.",
    tags: ["Python", "TensorFlow", "CNN", "Space Tech"],
    color: "red" as const,
    gradient: "from-red-900/40 to-bg-primary",
    span: "col-span-2",
  },
  {
    id: 2,
    name: "ComplianceAI",
    description: "AI-powered compliance copilot for SaaS startups with real-time regulatory guidance.",
    tags: ["Next.js", "Supabase", "Groq", "LLM"],
    color: "blue" as const,
    gradient: "from-blue-900/40 to-bg-primary",
    span: "col-span-1",
  },
  {
    id: 3,
    name: "Code Constellation Website",
    description: "Premium AI studio landing page with cinematic animations and immersive UX.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "red" as const,
    gradient: "from-purple-900/40 to-bg-primary",
    span: "col-span-1",
  },
  {
    id: 4,
    name: "AgriSense-PINN",
    description: "AI precision agriculture using Physics-Informed Neural Networks and Sentinel-2 satellite data.",
    tags: ["Python", "PyTorch", "Satellite Data"],
    color: "blue" as const,
    gradient: "from-green-900/40 to-bg-primary",
    span: "col-span-1",
  },
  {
    id: 5,
    name: "Vaagai Tamil Sangam",
    description: "Tamil language learning Flutter app with gamification and Firebase backend.",
    tags: ["Flutter", "Firebase", "Dart"],
    color: "red" as const,
    gradient: "from-orange-900/40 to-bg-primary",
    span: "col-span-1",
  },
  {
    id: 6,
    name: "NeuroVault",
    description: "AI tools showcase Instagram brand producing cinematic short-form content.",
    tags: ["Content", "AI Tools", "Video"],
    color: "blue" as const,
    gradient: "from-pink-900/40 to-bg-primary",
    span: "col-span-1",
  },
];

export const SERVICES = [
  { icon: "⚡", label: "SaaS Development" },
  { icon: "🎬", label: "Animated Landing Pages" },
  { icon: "🧠", label: "AI/ML Projects" },
  { icon: "📄", label: "IEEE Paper Writing" },
  { icon: "🔬", label: "Engineering Projects" },
  { icon: "🎨", label: "UI/UX Design" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sanjai delivered an exceptional AI dashboard for our research team. His technical depth is unmatched — he understood our requirements on a scientific level.",
    name: "Dr. Research Lead",
    role: "// Senior Researcher, Space Analytics Lab",
  },
  {
    quote:
      "The landing page Code Constellation built for us was cinematic. Absolutely premium quality — it converted visitors at a rate we'd never seen before.",
    name: "Startup Founder",
    role: "// CEO, TechVenture India",
  },
  {
    quote:
      "His understanding of both AI and full-stack development is rare. Sanjai delivered a production-grade ML pipeline in record time. Highly recommended.",
    name: "Tech Mentor",
    role: "// Senior Engineer, AI Startup",
  },
  {
    quote:
      "Working with Sanjai was effortless. He brings both technical excellence and a design sensibility that you rarely find in developers.",
    name: "Product Manager",
    role: "// Product Lead, SaaS Company",
  },
  {
    quote:
      "Sanjai's work on our compliance platform was transformative. The AI integration was seamless and the code quality was enterprise-grade.",
    name: "CTO",
    role: "// CTO, RegTech Startup",
  },
];

export const BLOG_POSTS = [
  {
    slug: "building-ai-exoplanet-analysis-1d-cnns",
    title: "Building AI-Powered Exoplanet Analysis with 1D CNNs",
    date: "March 15, 2026",
    excerpt:
      "How I built a physics-guided AI system to analyze exoplanet atmospheric signatures from JWST spectral data using 1D Convolutional Neural Networks.",
    readTime: "8 min read",
  },
  {
    slug: "premium-saas-landing-page-48-hours",
    title: "How I Built a Premium SaaS Landing Page in 48 Hours",
    date: "February 28, 2026",
    excerpt:
      "A deep-dive into building a cinematic, high-converting SaaS landing page from concept to deployment using Next.js and Framer Motion.",
    readTime: "6 min read",
  },
  {
    slug: "future-of-ai-studios-india",
    title: "The Future of AI Studios in India",
    date: "February 10, 2026",
    excerpt:
      "Why India is poised to become the world's leading hub for AI-first digital studios — and how Code Constellation is leading the charge.",
    readTime: "5 min read",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/sanjai-k", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sanjai-k", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/sanjai.io", icon: "instagram" },
  { label: "Twitter", href: "https://twitter.com/sanjai_io", icon: "twitter" },
];
