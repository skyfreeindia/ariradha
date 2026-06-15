import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const CHAPTERS = 6;
const JOURNEY = ["India", "Data Engineering", "Canada", "AI Builder", "Sky Free"];
const PROJECTS = [
  "Sky Free / XpressBot",
  "AI Agent Workflows",
  "Data Quality Automation",
];
const ORBIT_TOOLS = ["Claude", "GPT", "Codex"];

function useTypewriter(words: string[], speed = 85, pause = 1300) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text.length === 0;

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }

        if (cleared) {
          setDeleting(false);
          setWordIndex((prev) => prev + 1);
          return;
        }

        setText((prev) => (deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)));
      },
      done ? pause : deleting ? speed * 0.6 : speed,
    );

    return () => clearTimeout(timeout);
  }, [deleting, pause, speed, text, wordIndex, words]);

  return text;
}

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="aurora-base" />
      <motion.div
        className="aurora-wave wave-a"
        animate={{ x: ["-8%", "10%", "-8%"], y: ["-4%", "6%", "-4%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-wave wave-b"
        animate={{ x: ["10%", "-6%", "10%"], y: ["8%", "-8%", "8%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="animated-grid" />
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
          }}
          animate={{
            y: [0, -18, 6, 0],
            x: [0, i % 2 === 0 ? 6 : -6, 0],
            opacity: [0.3, 0.9, 0.35],
          }}
          transition={{
            duration: 6 + (i % 7),
            delay: (i % 12) * 0.22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="orb orb-cyan" />
      <div className="orb orb-pink" />
      <div className="orb orb-purple" />
    </div>
  );
}

function ChapterWrapper({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="chapter relative flex h-screen w-screen shrink-0 items-center justify-center px-6 py-8"
    >
      <div className="chapter-shell">
        <p className="chapter-tag">{title}</p>
        {children}
      </div>
    </section>
  );
}

function PlanetCard({ label, description }: { label: string; description: string }) {
  return (
    <motion.article
      className="planet-card"
      whileHover={{ scale: 1.08, rotateX: 8, rotateY: -10, z: 32 }}
      transition={{ type: "spring", stiffness: 170, damping: 14 }}
    >
      <div className="planet-glow" />
      <h3>{label}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1280);
  const typed = useTypewriter([
    "AI Builder",
    "SaaS Founder",
    "Automation Thinker",
    "System Storyteller",
  ]);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xRange = useMemo(() => [0, -(CHAPTERS - 1) * viewportWidth], [viewportWidth]);
  const xRaw = useTransform(scrollYProgress, [0, 1], xRange);
  const x = useSpring(xRaw, { stiffness: 90, damping: 24, mass: 0.35 });

  const slowParallax = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const mediumParallax = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <div className="story-root">
      <AuroraBackground />

      <motion.div
        className="fixed left-0 top-0 z-20 h-1 origin-left bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#ec4899]"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      <div ref={containerRef} className="relative" style={{ height: `${CHAPTERS * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="chapters-track flex h-screen" style={{ width: `${CHAPTERS * 100}vw`, x }}>
            <ChapterWrapper id="chapter-1" title="Chapter 1: The Universe">
              <motion.div className="absolute inset-0" style={{ y: slowParallax }}>
                <div className="stars-layer" />
              </motion.div>
              <div className="z-10 max-w-3xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="story-title"
                >
                  Welcome to Ari&apos;s Universe
                </motion.h1>
                <p className="story-subtitle">
                  I build practical AI-powered products, automation systems, and SaaS platforms that turn ideas
                  into real working businesses.
                </p>
                <div className="typing-line">
                  <span>{typed}</span>
                  <span className="typing-cursor" />
                </div>
                <p className="scroll-hint">Scroll down to travel horizontally</p>
              </div>
            </ChapterWrapper>

            <ChapterWrapper id="chapter-2" title="Chapter 2: Who I Am">
              <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="chapter-title">Ari Radha</h2>
                  <p className="chapter-copy">
                    AI Builder. SaaS Founder. Automation Thinker. I design systems that remove friction from
                    business operations and turn ideas into execution.
                  </p>
                </div>
                <motion.div
                  className="ai-core"
                  animate={{ rotateY: [0, 360], rotateX: [8, -8, 8] }}
                  transition={{
                    rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <div className="ai-core-inner">AI CORE</div>
                </motion.div>
              </div>
            </ChapterWrapper>

            <ChapterWrapper id="chapter-3" title="Chapter 3: Journey">
              <motion.div className="absolute inset-0" style={{ y: mediumParallax }}>
                <div className="journey-cloud" />
              </motion.div>
              <div className="relative z-10 w-full max-w-6xl">
                <h2 className="chapter-title mb-10 text-center">Journey</h2>
                <div className="journey-line">
                  {JOURNEY.map((step, idx) => (
                    <motion.div
                      key={step}
                      className="journey-node"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.5 }}
                    >
                      <div className="node-dot" />
                      <p>{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ChapterWrapper>

            <ChapterWrapper id="chapter-4" title="Chapter 4: Projects">
              <div className="w-full max-w-6xl">
                <h2 className="chapter-title mb-8 text-center">Projects As Planets</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <PlanetCard
                    label={PROJECTS[0]}
                    description="Omnichannel messaging, chatbot automation, campaigns, and white-label SaaS."
                  />
                  <PlanetCard
                    label={PROJECTS[1]}
                    description="AWS Bedrock AgentCore, Strands agents, Lambda tools, Step Functions, and DynamoDB."
                  />
                  <PlanetCard
                    label={PROJECTS[2]}
                    description="ETL validation, SQL testing, rules thinking, and warehouse reliability."
                  />
                </div>
              </div>
            </ChapterWrapper>

            <ChapterWrapper id="chapter-5" title="Chapter 5: AI Workflow">
              <div className="orbit-shell">
                <div className="workflow-core">Ari</div>
                {ORBIT_TOOLS.map((tool, idx) => (
                  <div key={tool} className="orbit-wrap" style={{ animationDelay: `${idx * 0.6}s` }}>
                    <div className="orbit-item">{tool}</div>
                  </div>
                ))}
              </div>
              <p className="chapter-copy mt-10 max-w-3xl text-center">
                Claude for fast iteration, GPT for reasoning and writing, and Codex for code generation, debugging,
                and refactoring in real product tasks.
              </p>
            </ChapterWrapper>

            <ChapterWrapper id="chapter-6" title="Chapter 6: Future Vision">
              <div className="portal-wrap">
                <motion.div
                  className="portal-ring"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="portal-ring ring-secondary"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="portal-core"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <h2 className="chapter-title mt-10 text-center">Future Vision</h2>
              <p className="chapter-copy max-w-3xl text-center text-xl sm:text-2xl">
                The future belongs to builders who collaborate with AI.
              </p>
              <p className="chapter-copy mt-4 max-w-3xl text-center">
                This is not a portfolio. It is a living system, a story in motion, and a blueprint for building at
                AI speed.
              </p>
            </ChapterWrapper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
