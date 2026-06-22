import { motion } from "framer-motion";

const tags = [
  "CS Undergrad · JIIT '27",
  "Full Stack Developer",
  "AI Enthusiast",
  "MERN Stack",
  "Shopify Freelancer",
  "Competitive Programmer",
  "National TT Player",
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight">
              <span className="text-gradient">From solving algorithms to building</span>{" "}
              <em className="text-gradient-gold not-italic">real-world products</em>
              <span className="text-gradient"> — turning ideas into impact through code.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-6 lg:col-span-5 lg:pt-4"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm <span className="text-foreground">Deepanshu Bhalia</span>, a Computer Science undergraduate at JIIT Noida, SDE Intern, and Full-Stack Developer. I specialize in building scalable MERN applications, AI-powered tools, and high-performance web experiences. With 600+ LeetCode problems solved and a Codeforces Pupil rating, I thrive on solving complex problems and turning ideas into real-world products.
            </p>


            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-muted-foreground transition-all hover:border-[var(--gold)] hover:text-gold"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
