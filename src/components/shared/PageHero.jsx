import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageHero({ title, subtitle, image, breadcrumb }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[400px] md:h-[480px] overflow-hidden bg-primary flex items-end">
      {/* Parallax background */}
      {image && (
        <motion.img
          style={{ y: imgY }}
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-110"
        />
      )}

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Vertical accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-white/62 text-xs mb-4"
        >
          <Link to="/" className="hover:text-white/70 transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" />
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/70">{title}</span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-1 bg-accent rounded-full mb-5 origin-left"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-lg text-white/78 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
