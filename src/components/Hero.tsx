import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Code2, Trophy } from "lucide-react";
import portraitAsset from "@/assets/deepanshu.jpeg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import bg from "@/assets/hero-bg.jpg";
const portrait = portraitAsset.url;
const resumeUrl = resumeAsset.url;

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-8">
        {/* Left */}
        <div className="lg:col-span-7 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio · 2026
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.95] tracking-tight">
            {["Deepanshu", "Bhalia"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease, delay: 0.2 + i * 0.15 }}
                className="block overflow-hidden"
              >
                <span className="block">
                  {word === "Bhalia" ? (
                    <em className="text-gradient-gold not-italic">{word}</em>
                  ) : (
                    <span className="text-gradient">{word}</span>
                  )}
                </span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-6 max-w-xl text-sm uppercase tracking-[0.25em] text-muted-foreground md:text-base"
          >
            AI-Powered <span className="text-foreground">Full Stack Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Building modern, scalable web experiences with AI integrations and
            premium UI / UX — engineered for performance, designed for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-gold hover:shadow-[0_0_40px_oklch(0.82_0.13_85/0.5)]"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm transition-all hover:border-[var(--gold)] hover:text-gold"
            >
              Hire Me
            </a>
            <a
              href={resumeUrl}
              download="Deepanshu_Bhalia_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition-all hover:border-white/40"
            >
              <Download size={14} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 1.2 }}
            className="mt-12 flex items-center gap-5 text-muted-foreground"
          >
            {[
              { Icon: Github, href: "https://github.com/deepanshubhalia" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/deepanshu-bhalia-7014792a7/" },
              { Icon: Code2, href: "https://leetcode.com/u/deepanshubhalia/" },
              { Icon: Trophy, href: "https://atcoder.jp/users/deepanshubhalia8" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:-translate-y-0.5 hover:text-gold"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait stack */}
        <div className="relative lg:col-span-5 lg:pt-4">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 40 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.4 }}
              className="absolute -left-6 top-8 h-[80%] w-[55%] overflow-hidden rounded-lg border border-white/10 bg-muted shadow-2xl"
            >
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/5 to-transparent p-6">
                <div className="space-y-3 font-grotesk text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <div>// engineer</div>
                  <div className="text-gold">// designer</div>
                  <div>// dreamer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.6 }}
              className="absolute inset-0 overflow-hidden rounded-lg border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <img
                src={portrait}
                alt="Deepanshu Bhalia"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Based in</div>
                  <div className="font-display text-lg">New Delhi, IN</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Open</div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    For work
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 10, y: 40 }}
              animate={{ opacity: 1, rotate: 8, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.8 }}
              className="glass absolute -right-4 bottom-12 w-44 rounded-xl p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Years coding
              </div>
              <div className="mt-1 font-display text-3xl text-gradient-gold">3+</div>
              <div className="mt-2 text-[10px] text-muted-foreground">
                React · Node · AI/ML
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
