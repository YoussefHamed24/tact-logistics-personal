import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const ABOUT_HERO = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=95";
const PORT_VIDEO = "https://videos.pexels.com/video-files/4252375/4252375-uhd_2560_1440_25fps.mp4";
const PORT_POSTER = "https://images.unsplash.com/photo-1519869325930-281384150729?w=1800&q=90";
const WAREHOUSE_IMG = "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=90";
const TEAM_IMG = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=90";

const values = [
  { title: "Integrity Without Compromise", desc: "Complete transparency, ethical practices, and unwavering honesty in every transaction." },
  { title: "Innovation at Scale", desc: "Cutting-edge technology and creative solutions to stay ahead in a rapidly evolving landscape." },
  { title: "Global Collaboration", desc: "Building bridges between markets, cultures, and industries through strategic alliances." },
  { title: "Sustainable Growth", desc: "Long-term value for our clients, communities, and the environment." },
  { title: "Relentless Excellence", desc: "The highest standards in every aspect of our operations — always." },
];

const stats = [
  { num: "25+", label: "Years of Experience" },
  { num: "50+", label: "Global Partners" },
  { num: "100+", label: "Key Clients" },
  { num: "6", label: "Continents Served" },
];

function StatCounter({ num, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-accent">{num}</div>
      <div className="text-xs text-white/50 mt-1 leading-tight uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.0]);

  return (
    <>
      <PageHero
        title="About Tact Freight"
        subtitle="Reputation-driven logistics, connecting Egypt to the world."
        image={ABOUT_HERO}
      />

      {/* ── Who We Are ─── */}
      <section className="py-0 bg-background overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Photo side with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1 overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8 }}
              src={TEAM_IMG}
              alt="Tact Freight team"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-4 gap-4">
                {stats.map((s, i) => <StatCounter key={s.label} {...s} delay={i * 0.08} />)}
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-10 py-20 order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 overflow-hidden whitespace-nowrap"
            >
              Who We Are
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              A Trusted Name<br />in Global Logistics
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {[
                "Tact Freight is a reputation-driven logistics & freight forwarding company headquartered in Cairo, Egypt. We provide comprehensive shipping and supply chain solutions that connect businesses to global markets with reliability, transparency, and speed.",
                "With decades of combined experience, our team delivers seamless freight forwarding across sea, air, and land — complemented by expert customs clearance, warehousing, project logistics, and advisory services.",
                "Our strategic partnerships with the world's leading shipping lines and membership in key global networks ensure that Tact Freight delivers best-in-class service at competitive rates, anywhere in the world.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Port Operations Video ── */}
      <section ref={videoRef} className="relative h-[500px] overflow-hidden">
        <motion.video
          style={{ scale: videoScale }}
          autoPlay muted loop playsInline
          poster={PORT_POSTER}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={PORT_VIDEO} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Operations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Every Day. Every Port.<br />Every Destination.
            </h2>
            <p className="mt-5 text-white/55 text-lg max-w-xl mx-auto">
              Around the clock, our teams manage cargo movements at Egypt's major ports and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={WAREHOUSE_IMG}
          alt="Warehouse operations"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Our Vision",
                text: "To redefine the future of logistics by becoming a global force for trust, speed, and innovation — connecting continents and enabling limitless opportunities for international trade.",
                accent: false,
              },
              {
                title: "Our Mission",
                text: "To drive global trade forward by delivering bold, transparent, and future-ready logistics and supply chain solutions.",
                accent: true,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className={`backdrop-blur-sm border rounded-2xl p-8 transition-shadow hover:shadow-2xl ${
                  item.accent
                    ? "bg-accent/15 border-accent/30"
                    : "bg-white/8 border-white/15"
                }`}
              >
                <div className="mb-4">
                  <div className="w-6 h-px bg-accent mb-3" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/65 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Our Values" title="What Drives Us Every Day" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-accent/25 transition-all cursor-default"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2, duration: 0.4 }}
                  className="h-px bg-accent mx-auto mb-5"
                />
                <h3 className="font-semibold text-primary text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}