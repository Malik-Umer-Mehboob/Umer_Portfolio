"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  Monitor,
  Palette,
  Radio,
  Server,
  Sparkles,
  Terminal,
  Triangle,
} from "lucide-react";

import { experience } from "../lib/data";
import { wrap, Head } from "./ui";

/* -------------------------------------------------------
   CONFIGURATION
------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];

const TYPEWRITER_WORDS = [
  "Professional Experience",
  "Full-Stack Development",
  "AI-Integrated Tools",
];

/* -------------------------------------------------------
   CORE TECHNOLOGIES
------------------------------------------------------- */

const CORE_TECHNOLOGIES = [
  { name: "JavaScript", category: "Language", icon: Code2 },
  { name: "TypeScript", category: "Language", icon: FileText },
  { name: "Python", category: "Language", icon: Terminal },
  { name: "React.js", category: "Frontend", icon: Layers },
  { name: "Next.js", category: "Frontend", icon: Triangle },
  { name: "Tailwind CSS", category: "Frontend", icon: Palette },
  { name: "HTML & CSS", category: "Frontend", icon: LayoutGrid },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express.js", category: "Backend", icon: Terminal },
  { name: "Laravel", category: "Backend", icon: Server },
  { name: "REST APIs", category: "Backend", icon: Globe },
  { name: "WebSockets", category: "Backend", icon: Radio },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "Git & GitHub", category: "Tools", icon: GitBranch },
  { name: "Docker", category: "Tools", icon: Monitor },
  { name: "Vercel", category: "Deployment", icon: Triangle },
  { name: "Netlify", category: "Deployment", icon: Globe },
];

/* -------------------------------------------------------
   TYPEWRITER
------------------------------------------------------- */

function TypewriterText({ reducedMotion }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(TYPEWRITER_WORDS[0]);

  useEffect(() => {
    if (reducedMotion) {
      setText(TYPEWRITER_WORDS[0]);
      return undefined;
    }

    let characterIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentWord = TYPEWRITER_WORDS[wordIndex];

      if (!deleting) {
        characterIndex += 1;
        setText(currentWord.slice(0, characterIndex));

        if (characterIndex >= currentWord.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }

        timeout = setTimeout(type, 48);
        return;
      }

      characterIndex -= 1;
      setText(currentWord.slice(0, characterIndex));

      if (characterIndex <= 0) {
        deleting = false;

        setWordIndex((previous) => (previous + 1) % TYPEWRITER_WORDS.length);

        timeout = setTimeout(() => {
          characterIndex = 0;
          type();
        }, 250);

        return;
      }

      timeout = setTimeout(type, 25);
    };

    timeout = setTimeout(type, 900);

    return () => clearTimeout(timeout);
  }, [wordIndex, reducedMotion]);

  return (
    <span className="inline-flex min-h-6 items-center gap-1 text-sm font-medium text-emerald-400">
      <span>{text}</span>

      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block h-4 w-px bg-emerald-400"
        />
      )}
    </span>
  );
}

/* -------------------------------------------------------
   EXPERIENCE SECTION
------------------------------------------------------- */

export default function Experience() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reducedMotion ? 0 : 0.45,
      delay: reducedMotion ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <section
        id="experience"
        aria-labelledby="experience-heading"
        className="relative isolate overflow-hidden py-16 sm:py-20"
      >
        {/* Ambient background accents */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-emerald-500/[0.07] blur-[100px]" />
          <div className="absolute -right-40 top-[38%] h-80 w-80 rounded-full bg-sky-500/[0.06] blur-[110px]" />
        </div>

        <div className={wrap}>
          {/* Section heading */}

          <motion.div {...reveal()} className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-400">
                <Sparkles size={14} aria-hidden="true" />
                CAREER
              </span>
            </div>

            <Head
              title="Experience"
              sub="Internships and full-time work building real products."
            />

            <div id="experience-heading" className="mt-4">
              <TypewriterText reducedMotion={reducedMotion} />
            </div>
          </motion.div>

          {/* Professional Experience */}

          <motion.section
            {...reveal(0.05)}
            aria-labelledby="professional-experience-heading"
            className="mb-14"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-emerald-400">
                <Briefcase size={19} aria-hidden="true" />
              </div>

              <div>
                <h3
                  id="professional-experience-heading"
                  className="text-lg font-semibold tracking-tight text-fg"
                >
                  Professional Experience
                </h3>

                <p className="mt-0.5 text-sm text-muted">
                  Internships and full-time development work
                </p>
              </div>
            </div>

            <div className="relative ml-2 space-y-4 border-l border-line pl-6 sm:ml-3 sm:pl-8">
              {(Array.isArray(experience) ? experience : []).map(
                (item, index) => {
                  const role =
                    item.role ||
                    item.position ||
                    item.title ||
                    "Development Experience";

                  const company =
                    item.company || item.organization || item.name || "";

                  const period =
                    item.period ||
                    item.duration ||
                    item.date ||
                    item.dates ||
                    "";

                  const location = item.location || "";

                  const description = item.description || item.summary || "";

                  const highlights = Array.isArray(item.highlights)
                    ? item.highlights
                    : Array.isArray(item.responsibilities)
                      ? item.responsibilities
                      : Array.isArray(item.achievements)
                        ? item.achievements
                        : [];

                  const technologies = Array.isArray(item.technologies)
                    ? item.technologies
                    : Array.isArray(item.skills)
                      ? item.skills
                      : [];

                  return (
                    <motion.article
                      key={item.id || `${company}-${role}-${index}`}
                      {...reveal(index * 0.04)}
                      className="group relative rounded-2xl border border-line bg-surface/70 p-4 transition-colors duration-300 hover:border-emerald-500/30 sm:p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-emerald-400 bg-background shadow-[0_0_14px_rgba(52,211,153,0.2)] sm:-left-[39px]"
                      />

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold text-fg transition-colors group-hover:text-emerald-400">
                            {role}
                          </h4>

                          {company && (
                            <p className="mt-1 text-sm font-medium text-emerald-400">
                              {company}
                            </p>
                          )}

                          {(period || location) && (
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                              {period && (
                                <span className="inline-flex items-center gap-1.5">
                                  <Calendar size={13} aria-hidden="true" />
                                  {period}
                                </span>
                              )}

                              {location && (
                                <span className="inline-flex items-center gap-1.5">
                                  <Globe size={13} aria-hidden="true" />
                                  {location}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
                          <CheckCircle2 size={12} aria-hidden="true" />
                          Experience
                        </span>
                      </div>

                      {description && (
                        <p className="mt-3 text-sm leading-6 text-muted">
                          {description}
                        </p>
                      )}

                      {highlights.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex gap-2 text-sm leading-6 text-muted"
                            >
                              <CheckCircle2
                                size={15}
                                className="mt-1 shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />

                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {technologies.map((technology, technologyIndex) => (
                            <span
                              key={technologyIndex}
                              className="rounded-md border border-line bg-background/70 px-2 py-1 text-[11px] font-medium text-muted"
                            >
                              {typeof technology === "string"
                                ? technology
                                : technology.name || technology.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.article>
                  );
                }
              )}
            </div>
          </motion.section>

          {/* Core Technologies */}

          <motion.section
            {...reveal(0.08)}
            aria-labelledby="core-technologies-heading"
            className="mb-14"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-sky-400">
                  <Code2 size={19} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    id="core-technologies-heading"
                    className="text-lg font-semibold tracking-tight text-fg"
                  >
                    Core Technologies
                  </h3>

                  <p className="mt-0.5 text-sm text-muted">
                    Tools and technologies used in development
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                {CORE_TECHNOLOGIES.length} technologies
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {CORE_TECHNOLOGIES.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <motion.div
                    key={technology.name}
                    {...reveal(index * 0.015)}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-surface sm:p-3.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-background text-muted transition-colors group-hover:border-emerald-500/20 group-hover:text-emerald-400">
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-fg">
                        {technology.name}
                      </p>

                      <p className="mt-0.5 truncate text-[11px] text-muted">
                        {technology.category}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Closing note */}

          <motion.div
            {...reveal(0.12)}
            className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-surface/50 p-4 sm:p-5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-emerald-400">
              <Sparkles size={17} aria-hidden="true" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-fg">
                Always learning. Always building.
              </h4>

              <p className="mt-1 text-sm leading-6 text-muted">
                Focused on building scalable, maintainable web applications and
                continuously improving my full-stack and AI-integration skills.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 border-t border-line" />
        </div>
      </section>
  );
}