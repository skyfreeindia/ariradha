import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AvatarMode = "wave" | "walk" | "point" | "laptop" | "goodbye";

type Chapter = {
  key: string;
  title: string;
  body: string;
  mode: AvatarMode;
  accent?: string;
  list?: string[];
};

const CHAPTERS: Chapter[] = [
  {
    key: "intro",
    title: "Hi, I'm Ari Radha.",
    body: "Data Quality Engineer • SaaS Founder • Automation Builder. A builder from Neyveli, India, now living in Canada - turning problems into practical software, products, and automation systems.",
    mode: "wave",
    accent: "Intro",
  },
  {
    key: "neyveli",
    title: "Neyveli",
    body: "Born and raised in Neyveli, where curiosity and problem-solving started.",
    mode: "walk",
    accent: "Origin",
  },
  {
    key: "chennai",
    title: "Chennai",
    body: "Moved to Chennai for higher studies and completed Instrumentation and Control Engineering.",
    mode: "walk",
    accent: "Education",
  },
  {
    key: "career",
    title: "Software Career",
    body: "Life pulled me into software engineering, ETL, data quality, QA testing, and automation.",
    mode: "point",
    accent: "Career",
  },
  {
    key: "canada",
    title: "Canada",
    body: "Now living in Canada, continuing to build, learn, and grow.",
    mode: "wave",
    accent: "Now",
  },
  {
    key: "skyfree",
    title: "Sky Free / Products",
    body: "Built Sky Free / XpressBot - omnichannel messaging, chatbot automation, campaigns, and white-label SaaS.",
    mode: "point",
    accent: "Build",
    list: [
      "Omnichannel messaging",
      "Chatbot automation",
      "Campaign orchestration",
      "White-label SaaS",
    ],
  },
  {
    key: "skills",
    title: "Skills",
    body: "ETL Development, Data Quality, SQL, AWS Athena, Redshift, QA Testing, SaaS Architecture, Automation, Product Thinking.",
    mode: "laptop",
    accent: "Craft",
    list: [
      "ETL Development",
      "Data Quality",
      "SQL + Redshift + Athena",
      "QA Testing",
      "SaaS Architecture",
      "Automation",
      "Product Thinking",
      "Beyond Work: Father. Husband. Builder. Learner. Problem Solver.",
    ],
  },
  {
    key: "contact",
    title: "Let's connect.",
    body: "I believe in thinking deeply, challenging the obvious, and solving until it works.",
    mode: "goodbye",
    accent: "Contact",
    list: ["Email: ariradha@yahoo.com", "Email", "LinkedIn", "GitHub"],
  },
];

function AriAvatar({ mode }: { mode: AvatarMode }) {
  const isWave = mode === "wave" || mode === "goodbye";
  const isWalk = mode === "walk";
  const isPoint = mode === "point";

  return (
    <motion.div
      className="ari-guide"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 180 180" aria-hidden="true">
        <defs>
          <linearGradient id="shirtTone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5f7a96" />
            <stop offset="100%" stopColor="#405f7e" />
          </linearGradient>
        </defs>

        <motion.path
          d="M20 156 C 68 132, 102 168, 157 137"
          className="mini-path"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 2.1, repeat: Infinity }}
        />

        <circle cx="90" cy="48" r="22" className="avatar-head" />
        <circle cx="82" cy="46" r="2.6" className="avatar-eye" />
        <circle cx="98" cy="46" r="2.6" className="avatar-eye" />
        <path d="M82 58 Q90 63 98 58" className="avatar-smile" />

        <rect x="62" y="72" width="56" height="54" rx="15" className="avatar-shirt" />

        <motion.rect
          x="52"
          y="82"
          width="14"
          height="39"
          rx="7"
          className="avatar-arm"
          animate={
            isWave
              ? { rotate: [-18, 38, -18] }
              : isPoint
                ? { rotate: [-8, -24, -8] }
                : { rotate: isWalk ? [12, -8, 12] : 2 }
          }
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 88px" }}
        />
        <motion.rect
          x="114"
          y="82"
          width="14"
          height="39"
          rx="7"
          className="avatar-arm"
          animate={
            isPoint
              ? { rotate: [-18, -48, -18] }
              : isWalk
                ? { rotate: [-10, 12, -10] }
                : { rotate: 0 }
          }
          transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "120px 88px" }}
        />

        {mode === "laptop" && (
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="42" y="116" width="58" height="26" rx="4" className="avatar-laptop" />
            <rect x="45" y="118" width="52" height="18" rx="2" className="avatar-screen" />
          </motion.g>
        )}

        <motion.rect
          x="72"
          y="126"
          width="12"
          height="35"
          rx="6"
          className="avatar-leg"
          animate={isWalk ? { rotate: [14, -14, 14] } : { rotate: 0 }}
          transition={{ duration: 0.52, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "78px 130px" }}
        />
        <motion.rect
          x="96"
          y="126"
          width="12"
          height="35"
          rx="6"
          className="avatar-leg"
          animate={isWalk ? { rotate: [-14, 14, -14] } : { rotate: 0 }}
          transition={{ duration: 0.52, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "102px 130px" }}
        />
      </svg>
    </motion.div>
  );
}

function App() {
  const chapterCount = CHAPTERS.length;
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: desktopRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(chapterCount - 1) * 100}vw`]);
  const avatarX = useTransform(scrollYProgress, [0, 1], ["10vw", "84vw"]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ["76vh", "72vh"]);
  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (isMobile) {
      return;
    }
    const next = Math.min(chapterCount - 1, Math.max(0, Math.round(value * (chapterCount - 1))));
    setActiveIndex(next);
  });

  useEffect(() => {
    if (!isMobile || !mobileTrackRef.current) {
      return;
    }

    const node = mobileTrackRef.current;
    const onScroll = () => {
      const index = Math.round(node.scrollLeft / Math.max(1, node.clientWidth));
      setActiveIndex(Math.max(0, Math.min(chapterCount - 1, index)));
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => node.removeEventListener("scroll", onScroll);
  }, [isMobile, chapterCount]);

  const avatarMode = CHAPTERS[activeIndex]?.mode ?? "wave";

  return (
    <div className="journey-root">
      <div className="warm-gradient" />
      <div className="paper-noise" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="journey-progress">
        <span style={{ width: `${((activeIndex + 1) / chapterCount) * 100}%` }} />
      </div>

      {!isMobile && (
        <div ref={desktopRef} className="desktop-scroll-shell" style={{ height: `${chapterCount * 100}vh` }}>
          <div className="desktop-sticky">
            <motion.svg className="journey-path" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <motion.path
                d="M20 130 C 180 60, 320 176, 480 120 C 640 64, 760 170, 930 110 C 1030 78, 1120 112, 1180 88"
                className="journey-path-line"
                style={{ pathLength: pathDraw }}
              />
            </motion.svg>

            <motion.div className="avatar-floating" style={{ x: avatarX, y: avatarY }}>
              <AriAvatar mode={avatarMode} />
            </motion.div>

            <motion.div className="journey-track" style={{ width: `${chapterCount * 100}vw`, x: trackX }}>
              {CHAPTERS.map((chapter, index) => (
                <motion.section
                  key={chapter.key}
                  className={`chapter-slide ${index === activeIndex ? "active" : ""}`}
                  animate={{ opacity: index === activeIndex ? 1 : 0.45, scale: index === activeIndex ? 1 : 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="chapter-content">
                    <p className="chapter-stamp">{chapter.accent}</p>
                    <h1>{chapter.title}</h1>
                    <p>{chapter.body}</p>
                    {chapter.list && chapter.key !== "contact" && (
                      <div className="floating-tags">
                        {chapter.list.map((item) => (
                          <motion.span
                            key={item}
                            whileHover={{ y: -4 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {chapter.key === "contact" && (
                      <div className="contact-cta">
                        <p>Email: ariradha@yahoo.com</p>
                        <div>
                          <a href="mailto:ariradha@yahoo.com">Email</a>
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            LinkedIn
                          </a>
                          <a href="https://github.com/ariradha" target="_blank" rel="noreferrer">
                            GitHub
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.section>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="mobile-shell">
          <div className="mobile-avatar">
            <AriAvatar mode={avatarMode} />
          </div>
          <div ref={mobileTrackRef} className="mobile-track">
            {CHAPTERS.map((chapter) => (
              <section key={chapter.key} className="mobile-chapter">
                <div className="chapter-content">
                  <p className="chapter-stamp">{chapter.accent}</p>
                  <h2>{chapter.title}</h2>
                  <p>{chapter.body}</p>
                  {chapter.list && chapter.key !== "contact" && (
                    <div className="floating-tags">
                      {chapter.list.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}

                  {chapter.key === "contact" && (
                    <div className="contact-cta">
                      <p>Email: ariradha@yahoo.com</p>
                      <div>
                        <a href="mailto:ariradha@yahoo.com">Email</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                        <a href="https://github.com/ariradha" target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
