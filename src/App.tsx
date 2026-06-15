import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const HERO_WORDS = ["AI", "Builder.", "SaaS", "Founder.", "Automation", "Thinker."];

const SKILLS = [
  "AI Automation",
  "ETL + Data Quality",
  "Cloud Systems",
  "SaaS Architecture",
  "Debugging",
  "Prompt Engineering",
  "Product Thinking",
  "Growth Execution",
];

const WORKFLOW = [
  {
    title: "Claude Haiku / Sonnet",
    text: "Fast thinking loops and cost-effective daily development for speed without losing quality.",
  },
  {
    title: "GPT",
    text: "Reasoning depth, refined writing, and structured planning for product decisions.",
  },
  {
    title: "Codex",
    text: "Code generation, debugging, and refactoring directly inside real shipping workflows.",
  },
];

const PROJECTS = [
  {
    name: "Sky Free / XpressBot",
    details:
      "Omnichannel messaging, chatbot automation, campaigns, and white-label SaaS for real business operations.",
  },
  {
    name: "AI Agent Workflows",
    details:
      "AWS Bedrock AgentCore, Strands agents, Lambda tools, Step Functions, DynamoDB, and structured logging.",
  },
  {
    name: "Data Quality Automation",
    details:
      "ETL validation, rules engine thinking, SQL testing, and data warehouse checks to protect data trust.",
  },
];

const TIMELINE = [
  { year: "2021", event: "Started building practical automation-first products." },
  { year: "2023", event: "Scaled multi-channel SaaS operations with white-label architecture." },
  { year: "2025", event: "Integrated AI agents into daily execution and product pipelines." },
  { year: "Now", event: "Focused on faster experimentation, stronger systems, and global SaaS scale." },
];

const CONTACTS = [
  { label: "Email", href: "mailto:hello@ariradha.com" },
  { label: "GitHub", href: "https://github.com/ariradha" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X/Twitter", href: "https://x.com" },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function ParticleLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 34 }).map((_, index) => {
        const size = 2 + (index % 4);
        const left = (index * 97) % 100;
        const delay = (index % 9) * 0.4;
        const duration = 6 + (index % 7);

        return (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white/70"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${(index * 29) % 100}%`,
            }}
            animate={{ y: [0, -20, 10, 0], opacity: [0.2, 0.95, 0.35, 0.2] }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

function OrbitSkills() {
  return (
    <div className="relative mx-auto mt-10 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
      <div className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.03]" />
      <div className="absolute inset-[22%] rounded-full border border-glow/35 bg-sky/10 shadow-glow" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <p className="font-['Sora'] text-[0.8rem] uppercase tracking-[0.22em] text-slate-300">Core Mode</p>
          <p className="mt-2 text-2xl font-semibold text-white">Ari Radha</p>
        </div>
      </div>
      {SKILLS.map((skill, idx) => {
        const customStyle = {
          animationDelay: `${idx * 0.45}s`,
        } as CSSProperties;

        return (
          <div key={skill} className="absolute left-1/2 top-1/2" style={customStyle}>
            <div className="animate-orbit">
              <span className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-slate-200 shadow-card">
                {skill}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="relative bg-ink text-slate-100">
      <div className="fixed inset-0 -z-20 bg-hero-radial" />
      <div className="fixed inset-0 -z-10 cinematic-grid opacity-60" />
      <ParticleLayer />

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionMotion}
          className="relative min-h-[90vh] rounded-3xl border border-white/10 px-6 py-14 sm:px-10 sm:py-16"
        >
          <div className="absolute right-6 top-6 hidden rounded-full border border-glow/40 bg-glow/10 px-4 py-1 text-xs font-medium tracking-[0.2em] text-glow sm:block">
            ARIRADHA.COM
          </div>

          <div className="max-w-3xl">
            <p className="font-['Sora'] text-[0.78rem] uppercase tracking-[0.28em] text-slate-300">Cinematic Personal Experience</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] text-white sm:text-7xl">
              <span className="gradient-text">Ari Radha</span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-2 text-xl font-medium text-slate-200 sm:text-2xl">
              {HERO_WORDS.map((word, index) => (
                <motion.span
                  key={word + index}
                  initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I build practical AI-powered products, automation systems, and SaaS platforms that turn ideas into real working businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full border border-sky/30 bg-gradient-to-r from-sky/30 to-glow/35 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white/12"
              >
                Contact Ari
              </a>
            </div>
          </div>

          <OrbitSkills />
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="font-['Sora'] text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              I am Ari Radha, a SaaS founder and AI-first builder. I work across AI automation, ETL/data quality, cloud systems, and product building. My main focus is creating tools that save time, reduce manual work, and help businesses scale.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="font-['Sora'] text-2xl font-semibold text-white">Personal Philosophy</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              "I do not just build clean demos. I build real systems, break things, learn fast, and improve until it works."
            </p>
          </div>
        </motion.section>

        <motion.section
          id="ai-workflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-9"
        >
          <h2 className="font-['Sora'] text-2xl font-semibold text-white">AI Workflow</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I use AI as a daily building partner: Claude Haiku/Sonnet for fast thinking and cost-effective development, GPT for reasoning and writing, and Codex for code generation, debugging, and refactoring. I test models by using them on real product tasks, not only benchmarks.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {WORKFLOW.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -6, rotateX: 6, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className="glass-card rounded-2xl p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-10"
        >
          <h2 className="font-['Sora'] text-2xl font-semibold text-white">Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.name}
                whileHover={{ y: -8, rotateX: 8, rotateY: -8 }}
                transition={{ type: "spring", stiffness: 170, damping: 14 }}
                className="glass-card rounded-2xl p-6 shadow-card"
              >
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.details}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-12"
        >
          <h2 className="font-['Sora'] text-2xl font-semibold text-white">Timeline</h2>
          <div className="relative mt-6 border-l border-slate-500/40 pl-6">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.45 }}
                className="relative mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full bg-glow shadow-glow" />
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{item.year}</p>
                <p className="mt-2 text-slate-200">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-9"
        >
          <h2 className="font-['Sora'] text-2xl font-semibold text-white">Skills</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-slate-200 transition-transform duration-300 hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="mt-12 rounded-3xl border border-sky/30 bg-gradient-to-r from-sky/10 via-white/5 to-glow/10 p-6 sm:p-9"
        >
          <h2 className="font-['Sora'] text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Open to product collaborations, AI consulting, and building serious automation systems that ship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-glow/60 hover:bg-glow/10"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;