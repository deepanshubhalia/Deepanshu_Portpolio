import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, Copy, Check } from "lucide-react";
import { useState } from "react";

const cards = [
  { Icon: Mail, label: "Email", value: "deepanshubhalia@gmail.com", href: "mailto:deepanshubhalia@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 89017 70840", href: "tel:+918901770840" },
  { Icon: Linkedin, label: "LinkedIn", value: "deepanshu-bhalia", href: "https://www.linkedin.com/in/deepanshu-bhalia-7014792a7/" },
  { Icon: Github, label: "GitHub", value: "deepanshubhalia", href: "https://github.com/deepanshubhalia" },
  { Icon: Code2, label: "LeetCode", value: "deepanshubhalia", href: "https://leetcode.com/u/deepanshubhalia/" },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(val);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="contact" className="relative py-32">
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
            06 — Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[1.02] tracking-tight"
        >
          <span className="text-gradient">Let's build something </span>
          <em className="text-gradient-gold not-italic">unforgettable.</em>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            {cards.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-[var(--gold)]/40"
              >
                <div className="rounded-full border border-white/10 p-3 transition-colors group-hover:border-[var(--gold)]/40 group-hover:text-gold">
                  <Icon size={16} />
                </div>
                <a href={href} target="_blank" rel="noreferrer" className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm">{value}</div>
                </a>
                <button
                  onClick={() => copy(value)}
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:text-gold"
                  aria-label="Copy"
                >
                  {copied === value ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong space-y-5 rounded-2xl p-8 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Your Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-2 text-sm outline-none transition-colors focus:border-[var(--gold)]"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-3 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all hover:bg-gold hover:shadow-[0_0_40px_oklch(0.82_0.13_85/0.5)]"
            >
              Send Message
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        </div>

        <div className="mt-32 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © 2026 Deepanshu Bhalia — Crafted with obsession.
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full border-b border-white/15 bg-transparent py-2 text-sm outline-none transition-colors focus:border-[var(--gold)]"
      />
    </div>
  );
}
