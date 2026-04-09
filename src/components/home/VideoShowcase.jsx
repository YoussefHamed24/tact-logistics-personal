import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Free pexels freight-industry clips
const clips = [
  {
    video: "https://videos.pexels.com/video-files/4252375/4252375-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    label: "Port Operations",
    desc: "World-class container terminal management",
  },
  {
    video: "https://videos.pexels.com/video-files/2790396/2790396-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
    label: "Air Cargo",
    desc: "Time-critical airfreight across six continents",
  },
  {
    video: "https://videos.pexels.com/video-files/8543508/8543508-uhd_3840_2160_24fps.mp4",
    poster: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    label: "Land Transport",
    desc: "GPS-tracked fleet covering all of Egypt",
  },
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative py-28 bg-primary overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] mb-4 text-accent">
            <span className="w-4 h-px bg-accent/60" />
            In Motion
            <span className="w-4 h-px bg-accent/60" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Freight That Never Stops
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Every hour, we move critical cargo across sea, air, and land.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clips.map((clip, i) => (
            <motion.div
              key={clip.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ height: i === 1 ? "420px" : "340px" }}
            >
              <video
                autoPlay muted loop playsInline
                poster={clip.poster}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={clip.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-6 h-px bg-accent mb-3" />
                <h3 className="text-white font-bold text-lg">{clip.label}</h3>
                <p className="text-white/55 text-sm mt-1">{clip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}