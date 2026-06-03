import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[100] hidden md:block"
      animate={{ x: pos.x - 250, y: pos.y - 250, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.12) 0%, transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}
