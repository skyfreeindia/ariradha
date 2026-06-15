import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const snapshotCards = [
  {
    title: "Data Quality & ETL",
    text: "I care deeply about trustworthy data: clean pipelines, reliable validations, and fewer surprises in production.",
  },
  {
    title: "SaaS Founder",
    text: "I enjoy turning ideas into products that teams can actually use every day, not just prototypes.",
  },
  {
    title: "Automation Builder",
    text: "My goal is simple: reduce repetitive work and create systems that free people to focus on better decisions.",
  },
  {
    title: "Life in Canada",
    text: "Moving countries reshaped how I build: calm execution, practical priorities, and long-term thinking.",
  },
];

const storyItems = [
  {
    title: "India",
    text: "My foundation came from curiosity and resourcefulness, learning to build with whatever tools were available.",
  },
  {
    title: "Data & QA",
    text: "I learned that quality is not a final checklist. It is a mindset that starts from the first query.",
  },
  {
    title: "Canada",
    text: "A new country gave me a new lens: think globally, communicate clearly, and keep systems dependable.",
  },
  {
    title: "Sky Free",
    text: "Building Sky Free taught me the real rhythm of SaaS: ship, listen, improve, and stay close to real users.",
  },
  {
    title: "AI & Automation",
    text: "I use AI as a practical partner to accelerate building, testing, and iteration without losing product clarity.",
  },
  {
    title: "What’s Next",
    text: "I am focused on resilient systems, meaningful products, and work that makes complexity easier for people.",
  },
];

const whatIDo = [
  "ETL Development and Data Quality Testing",
  "SQL, AWS Athena, Redshift, and Data Warehouse validation",
  "QA testing and rule-based validation",
  "SaaS product building",
  "Workflow automation and AI-assisted tools",
];

const builtItems = [
  {
    title: "Sky Free / XpressBot",
    text: "Omnichannel messaging, chatbot automation, campaigns, white-label SaaS.",
  },
  {
    title: "AI Agent Workflows",
    text: "AWS Bedrock AgentCore, Lambda tools, Step Functions, DynamoDB, structured logging.",
  },
  {
    title: "Data Quality Systems",
    text: "Validation rules, ETL testing, reports, database checks, and quality controls.",
  },
];

type AvatarMode = "wave" | "walk" | "point" | "laptop" | "goodbye";

function AriAvatarGuide({ mode }: { mode: AvatarMode }) {
  const isWave = mode === "wave" || mode === "goodbye";
  const isWalk = mode === "walk";
  const isPoint = mode === "point";
  const hasLaptop = mode === "laptop";

  return (
    <motion.div
      className="ari-avatar"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: isWalk ? 0.7 : 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 180 180" aria-hidden="true">
        <defs>
          <linearGradient id="shirt" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6f8aa5" />
            <stop offset="100%" stopColor="#4f6b84" />
          </linearGradient>
        </defs>

        <motion.path
          d="M70 165 L95 145 L120 162"
          className="avatar-plane"
          animate={mode === "point" ? { x: [0, 14, 0], y: [0, -8, 0] } : { opacity: 0.5 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle cx="90" cy="52" r="23" className="avatar-head" />
        <circle cx="81" cy="50" r="2.7" className="avatar-eye" />
        <circle cx="99" cy="50" r="2.7" className="avatar-eye" />
        <path d="M82 61 Q90 67 98 61" className="avatar-smile" />

        <motion.rect
          x="62"
          y="76"
          width="56"
          height="52"
          rx="14"
          className="avatar-body"
          animate={isWalk ? { rotate: [1.2, -1.2, 1.2] } : { rotate: 0 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "90px 95px" }}
        />

        <motion.rect
          x="54"
          y="86"
          width="14"
          height="38"
          rx="7"
          className="avatar-limb"
          animate={
            isWave
              ? { rotate: [-18, 42, -18] }
              : isPoint
                ? { rotate: [-8, -20, -8] }
                : { rotate: isWalk ? [12, -8, 12] : 3 }
          }
          transition={{ duration: isWave ? 0.45 : 0.7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "61px 90px" }}
        />

        <motion.rect
          x="112"
          y="86"
          width="14"
          height="38"
          rx="7"
          className="avatar-limb"
          animate={
            isPoint
              ? { rotate: [-22, -42, -22] }
              : isWalk
                ? { rotate: [-10, 10, -10] }
                : { rotate: 0 }
          }
          transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "119px 90px" }}
        />

        {hasLaptop && (
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="46" y="118" width="54" height="28" rx="4" className="avatar-laptop" />
            <rect x="48" y="120" width="50" height="18" rx="2" className="avatar-screen" />
          </motion.g>
        )}

        <motion.rect
          x="72"
          y="127"
          width="12"
          height="35"
          rx="6"
          className="avatar-leg"
          animate={isWalk ? { rotate: [14, -14, 14] } : { rotate: 0 }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "78px 130px" }}
        />
        <motion.rect
          x="96"
          y="127"
          width="12"
          height="35"
          rx="6"
          className="avatar-leg"
          animate={isWalk ? { rotate: [-14, 14, -14] } : { rotate: 0 }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "102px 130px" }}
        />
      </svg>
    </motion.div>
  );
}

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const avatarX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["8vw", "74vw", "14vw", "76vw", "12vw"]);
  const avatarY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["72vh", "76vh", "74vh", "72vh", "76vh"]);

  const [avatarMode, setAvatarMode] = useState<AvatarMode>("wave");

  const sectionMap = useMemo(
    () => [
      { id: "hero", mode: "wave" as AvatarMode },
      { id: "story", mode: "walk" as AvatarMode },
      { id: "built", mode: "point" as AvatarMode },
      { id: "skills", mode: "laptop" as AvatarMode },
      { id: "contact", mode: "goodbye" as AvatarMode },
    ],
    [],
  );

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportMid = window.innerHeight * 0.4;

    for (const section of sectionMap) {
      const el = document.getElementById(section.id);
      if (!el) {
        continue;
      }

      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
        setAvatarMode(section.mode);
        return;
      }
    }
  });

  return (
    <div className="resume-root">
      <div className="moving-gradient" />
      <div className="floating-shape shape-a" />
      <div className="floating-shape shape-b" />
      <div className="floating-shape shape-c" />

      <motion.div
        className="cursor-glow"
        animate={{ x: cursor.x - 120, y: cursor.y - 120 }}
        transition={{ type: "spring", stiffness: 70, damping: 22, mass: 0.2 }}
      />

      <motion.div className="avatar-layer" style={{ x: avatarX, y: avatarY }}>
        <AriAvatarGuide mode={avatarMode} />
      </motion.div>

      <main className="page-wrap">
        <motion.section
          id="hero"
          className="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Digital Life Resume</p>
          <h1>Hi, I&apos;m Ari Radha.</h1>
          <h2>Data Quality Engineer • SaaS Founder • Automation Builder</h2>
          <p className="hero-copy">
            A builder from India, living in Canada. I work across data quality, automation, SaaS products, and
            practical AI systems.
          </p>
          <div className="hero-actions">
            <a href="#built" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.section>

        <motion.section
          id="story"
          className="section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">Personal Snapshot</p>
            <h3>A quick view of what defines my work and life.</h3>
          </div>
          <div className="grid-cards">
            {snapshotCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -8 }}
              >
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">My Story</p>
            <h3>The path that shaped how I build.</h3>
          </div>

          <div className="timeline-wrap">
            <motion.div
              className="timeline-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />

            {storyItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <span className="timeline-dot" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">What I Do</p>
            <h3>Resume-ready strengths with practical delivery.</h3>
          </div>
          <div className="what-list">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item}
                className="what-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
              >
                <span className="what-bullet" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="built"
          className="section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">Things I&apos;ve Built</p>
            <h3>Real systems designed for real usage.</h3>
          </div>
          <div className="grid-cards">
            {builtItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -8 }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">Beyond Work</p>
            <h3>Father. Husband. Builder. Learner. Problem Solver.</h3>
          </div>
          <p className="beyond-copy">
            I enjoy building useful things, learning fast, and turning difficult problems into simple working
            systems.
          </p>
        </motion.section>

        <motion.section
          id="contact"
          className="section contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h3>Let&apos;s connect.</h3>
          </div>
          <div className="contact-actions">
            <a className="btn btn-secondary" href="mailto:hello@ariradha.com">
              Email
            </a>
            <a className="btn btn-secondary" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-secondary" href="https://github.com/ariradha" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
