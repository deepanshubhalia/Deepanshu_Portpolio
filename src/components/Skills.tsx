import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 90 },
  { name: "MERN Stack", level: 92 },
  { name: "JavaScript", level: 95 },
  { name: "Python", level: 88 },
  { name: "C / C++", level: 92 },
  { name: "MongoDB", level: 88 },
  { name: "SQL / DBMS", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "Git / GitHub", level: 92 },
  { name: "Postman", level: 88 },
  { name: "Data Structures & Algorithms", level: 92 },
  { name: "Object-Oriented Programming", level: 90 },
];

const marqueeTags = [
  "React.js", "Node.js", "Express.js", "MERN", "MongoDB", "SQL",
  "REST APIs", "JavaScript", "Python", "C", "C++", "DSA", "OOP",
  "DBMS", "Git", "GitHub", "Postman", "Tailwind CSS",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            02 — Craft
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-gradient"
        >
          Skills <em className="text-gradient-gold not-italic">&</em> Stack
        </motion.h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-display text-lg">{s.name}</span>
                <span className="font-grotesk text-xs text-muted-foreground">
                  {s.level}
                </span>
              </div>
              <div className="relative h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.04 }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-[var(--gold)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="flex marquee w-max gap-6">
            {[...marqueeTags, ...marqueeTags].map((t, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-4xl text-muted-foreground/60 md:text-6xl"
              >
                {t} <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
