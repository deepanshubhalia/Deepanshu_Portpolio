import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    role: "SDE Intern",
    org: "InAmigos Foundation",
    period: "May 2026 — Jun 2026 · Remote",
    link: "https://drive.google.com/file/d/19obZqnrX4DGwLWhfCBNGH7Oq5YX6IFVk/view",
    points: [
      "Worked on frontend and backend development using React.js and Node.js",
      "Developed responsive web pages and integrated REST APIs",
      "Collaborated with a team to support development of 5+ features",
    ],
  },
  {
    role: "Technical Coordinator",
    org: "Rapid Programming Hub · JIIT",
    period: "2024 — Present",
    link: "https://www.linkedin.com/posts/deepanshu-bhalia-7014792a7_100-students-1-goal-to-make-c-and-ugcPost-7358527697393774594-iFtu/",
    points: [
      "Conducted C++ & DSA sessions for 100+ students",
      "Authored test cases for coding contests and hackathons",
      "Improved participant experience & scoring accuracy",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
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
            03 — Journey
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-gradient"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

          {items.map((item, i) => (
            <motion.a
              key={item.role}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background md:left-1/2" />
              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="text-xs uppercase tracking-[0.3em] text-gold">{item.period}</div>
                <h3 className="mt-3 inline-flex items-center gap-2 font-display text-2xl md:text-3xl">
                  {item.role}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-gold"
                  />
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">{item.org}</div>
              </div>
              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                  {item.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
