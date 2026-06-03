import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ChatFab() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      className="glass-strong fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em] text-foreground shadow-2xl transition-all hover:border-[var(--gold)]/50 hover:text-gold"
    >
      <Sparkles size={14} className="text-gold" />
      Chat with me
    </motion.a>
  );
}
