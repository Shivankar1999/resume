'use client';
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Download, 
  Moon, 
  Sun, 
  Award, 
  Briefcase, 
  Code2, 
  GraduationCap 
} from 'lucide-react';

// --- DATA ---
const RESUME_DATA = {
  name: "Shubham Krishna Gaur",
  initials: "AR",
  location: "Mathura,Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Mathura,+Uttar+Pradesh",
  about: "Senior Frontend Developer specializing in high-performance web applications. I turn complex problems into elegant, scalable code. By merging technical architecture with intuitive design, I build interfaces that are as fast as they are functional. My focus is on writing clean, maintainable systems that prioritize the user experience without compromising on performance or accessibility",
  summary: "Highly skilled software engineer with 4+ years of experience in React, Next.js. Proven track record of leading teams to deliver scalable web applications that enhance user engagement and drive business growth. Adept at collaborating with cross-functional teams to translate complex requirements into efficient technical solutions.",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  contact: {
    email: "sgaur2424@gmail.com",
    tel: "+91-9027022567",
    social: [
      { name: "GitHub", url: "https://github.com/Shivankar1999", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/shubham-gaur-565b99215", icon: Linkedin },
    ],
  },
  education: [
    {
      school: "Rajiv Academy of Technology and Management ,Mathura",
      degree: "Bachelor's Degree in Computer Applications",
      start: "2016",
      end: "2029",
    },
  ],
  work: [
    {
      company: "Millipixels Interactive",
      link: "https://millipixels.com/",
      badges: ["Remote"],
      title: "Senior Frontend Developer",
      start: "Jan 2025",
      end: "Present",
      description: "Architected a micro-frontend architecture using Next.js, reducing bundle sizes by 40%. Led a team of 4 engineers.",
    },
    {
      company: "WorldRef.",
      link: "https://worldref.co/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "Aug 2023",
      end: "Oct 2024",
      description: "Developed and maintained high-traffic web apps. Optimized database queries resulting in 30% faster load times.",
    },
       {
      company: "IntellyJelly",
      link: "http://www.intellyjelly.com",
      badges: ["Remote"],
      title: "Front -End Engineer - ReactJs Developer",
      start: "May 2021",
      end: "Jun 2023",
      description: "Developed a library of 20+ reusable UI components, reducing future development time for new features by ~25% , Optimized image handling and component structure, leading to a 15% improvement in Lighthouse performance scores.",
    },
  ],
  skills: [
   "HTML","CSS", "MUI", "JavaScript", "TypeScript", "React/Next.js", "Jest", "Tailwind CSS", "Cypress", 
  ],
  projects: [
    {
      title: "Digital News Paper Agency",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      description: "This platform is a modular, multi-brand digital news ecosystem designed for Reach PLC. It leverages a modern Next.js architecture to deliver high-performance, real-time journalism across multiple regional and national identities (The Mirror, Manchester Evening News, and Daily Express) through a single unified codebase.",
      link: "https://reachplc.vercel.app/",
    },
  ],
};

// --- COMPONENTS ---

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 ${className}`}>
    {children}
  </span>
);

const Card = ({ title, subtitle, period, description, badges = [], link }) => (
  <div className="rounded-lg bg-card text-card-foreground">
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center justify-between gap-x-2 text-base">
        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
          {link ? (
            <a className="hover:underline" href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : title}
          {badges.map((badge) => (
            <Badge key={badge} className="align-middle text-[10px] bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {badge}
            </Badge>
          ))}
        </h3>
        <div className="text-sm tabular-nums text-slate-500">{period}</div>
      </div>
      <h4 className="font-mono text-sm leading-none">{subtitle}</h4>
    </div>
    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
      {description}
    </div>
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [saveStatus, setSaveStatus] = useState(false);

  // Use Local Storage to remember theme and a "Bookmarked" state
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isBookmarked = localStorage.getItem('resume_bookmarked');
    if (savedTheme === 'light') setIsDarkMode(false);
    if (isBookmarked) setSaveStatus(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleBookmark = () => {
    const newState = !saveStatus;
    setSaveStatus(newState);
    localStorage.setItem('resume_bookmarked', newState ? 'true' : '');
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12 max-w-3xl">
          
          {/* Header Actions */}
          <div className="fixed top-4 right-4 flex gap-2 print:hidden z-50">
            {/* <button 
              onClick={handleBookmark}
              className={`p-2 rounded-full border shadow-sm ${saveStatus ? 'bg-yellow-100 border-yellow-400 text-yellow-600' : 'bg-white dark:bg-slate-800'}`}
              title="Save to local storage"
            >
              <Award className="w-5 h-5" fill={saveStatus ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border bg-white dark:bg-slate-800 shadow-sm"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
            <button 
              onClick={() => window.print()}
              className="p-2 cursor-pointer rounded-full border bg-white dark:bg-slate-800 shadow-sm"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>

          <section className="mx-auto w-full space-y-8 print:space-y-6">
            
            {/* Hero Section */}
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-1.5">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{RESUME_DATA.name}</h1>
                <p className="max-w-md text-slate-600 dark:text-slate-400 font-mono text-sm">
                  {RESUME_DATA.about}
                </p>
                <p className="max-w-md items-center text-slate-500 font-mono text-xs flex gap-1">
                  <a className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline" href={RESUME_DATA.locationLink} target="_blank" rel="noreferrer">
                    <MapPin className="h-3 w-3" />
                    {RESUME_DATA.location}
                  </a>
                </p>
                <div className="flex gap-x-1 pt-1 font-mono text-sm text-slate-500 print:hidden">
                  {RESUME_DATA.contact.social.map(s => (
                    <a key={s.name} href={s.url} className="p-2 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-2 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              {/* <div className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-800">
                <img className="aspect-square h-full w-full" src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} />
              </div> */}
            </div>

            {/* About */}
            <section className="flex flex-col gap-y-3">
              <h2 className="text-xl font-bold">About</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
            </section>

            {/* Experience */}
            <section className="flex flex-col gap-y-3">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Work Experience
              </h2>
              {RESUME_DATA.work.map((work) => (
                <Card 
                  key={work.company}
                  title={work.company}
                  subtitle={work.title}
                  period={`${work.start} - ${work.end}`}
                  description={work.description}
                  badges={work.badges}
                  link={work.link}
                />
              ))}
            </section>

            {/* Skills */}
            <section className="flex flex-col gap-y-3">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Code2 className="w-5 h-5" /> Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {RESUME_DATA.skills.map(skill => (
                  <Badge key={skill} className="px-3 py-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="flex flex-col gap-y-3 print:break-before-page">
              <h2 className="text-xl font-bold">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2">
                {RESUME_DATA.projects.map((project) => (
                  <div key={project.title} className="flex flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                       </a>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-mono text-slate-400">#{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
          </section>

          {/* Footer / SEO */}
          <footer className="mt-16 border-t pt-8 text-center text-xs text-slate-400 font-mono print:hidden">
            <p>© {new Date().getFullYear()} {RESUME_DATA.name} — Built with Next.js & Tailwind</p>
          </footer>
        </main>
      </div>
    </div>
  );
}