import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "/service-images/inland-transport-hero.jpg";
const STRIP_IMG = "/service-images/inland-transport-strip.jpg";
const EXTRA_IMGS = [
  "/service-images/inland-transport-gallery-1.jpg",
  "/service-images/inland-transport-gallery-2.jpg",
];

const features = [
  { title: "Full Truckload (FTL)", desc: "Dedicated truck services for large shipments requiring door-to-door delivery across Egypt." },
  { title: "Less than Truckload (LTL)", desc: "Cost-effective solutions for smaller shipments with scheduled collection and delivery." },
  { title: "GPS Tracking", desc: "Real-time GPS visibility for all shipments, providing accurate ETAs and live location updates." },
  { title: "Cargo Security", desc: "Sealed containers, tamper-proof tracking, and comprehensive insurance coverage for all loads." },
  { title: "Scheduled Services", desc: "Regular scheduled runs on major routes ensuring consistent, predictable delivery timelines." },
  { title: "Nationwide Coverage", desc: "Extensive network covering all major cities, ports, industrial zones, and free trade areas in Egypt." },
];

export default function InlandTransport() {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.0]);

  return (
    <>
      <PageHero title="Inland Transport" subtitle="Nationwide trucking with full GPS visibility & tracking." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Land Freight" title="Road Logistics Across Egypt" description="From the Mediterranean coast to Upper Egypt — we move cargo efficiently on every major route." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.07)" }} className="bg-card border border-border/50 rounded-xl p-6 cursor-default transition-shadow">
                <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ delay: i * 0.07 + 0.2 }} className="h-px bg-accent mb-5" />
                <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={videoRef} className="relative h-[420px] overflow-hidden">
        <motion.img
          style={{ scale }}
          src={STRIP_IMG}
          alt="Inland transport operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/64" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">On the Road</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Always Moving Forward</h2>
            <p className="mt-4 text-white/70 text-lg max-w-lg mx-auto">GPS-tracked fleet ensuring your cargo arrives on time, every time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {EXTRA_IMGS.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl overflow-hidden h-52">
                <motion.img src={src} alt="Inland transport" className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
