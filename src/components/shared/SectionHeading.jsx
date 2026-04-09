import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] mb-4
            ${light ? "text-accent" : "text-accent"}`}
        >
          <span className={`w-4 h-px ${light ? "bg-accent/60" : "bg-accent/60"}`} />
          {label}
          <span className={`w-4 h-px ${light ? "bg-accent/60" : "bg-accent/60"}`} />
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight
          ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg max-w-2xl leading-relaxed
            ${centered ? "mx-auto" : ""}
            ${light ? "text-white/60" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}