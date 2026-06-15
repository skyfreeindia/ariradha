import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

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

      <main className="page-wrap">
        <motion.section
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
