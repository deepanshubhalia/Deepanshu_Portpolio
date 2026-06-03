import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import fake from "@/assets/project-fakespotter.jpg";
import codeRev from "@/assets/project-codereviewer.jpg";

const projects = [
  {
    n: "01",
    title: "FakeSpotter",
    blurb:
      "AI-powered deepfake detection platform combining CNN, Autoencoder and Vision Transformer pipelines for media authenticity verification.",
    tags: ["React", "Python", "OpenCV", "ViT", "CNN"],
    img: fake,
  },
  {
    n: "02",
    title: "AI Code Reviewer",
    blurb:
      "Real-time code review system with bug detection, optimization suggestions and intelligent refactors powered by the Gemini API.",
    tags: ["React", "Node.js", "Express", "Gemini API"],
    img: codeRev,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
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
            04 — Selected Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-gradient"
        >
          Featured <em className="text-gradient-gold not-italic">Projects</em>
        </motion.h2>

        <div className="space-y-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                    <div className="font-grotesk text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {p.n} / Case Study
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-full border border-white/15 bg-background/40 p-2 backdrop-blur transition hover:border-[var(--gold)] hover:text-gold">
                        <Github size={14} />
                      </button>
                      <button className="rounded-full border border-white/15 bg-background/40 p-2 backdrop-blur transition hover:border-[var(--gold)] hover:text-gold">
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-display text-4xl md:text-5xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground md:text-lg">{p.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
