import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const services = [
  {
    title: "Sea Freight",
    desc: "FCL, LCL & oversized cargo across all major global lanes.",
    path: "/services/sea-freight",
    img: "/service-images/sea-freight-hero.jpg",
  },
  {
    title: "Air Freight",
    desc: "Express, consolidated & time-critical air cargo solutions.",
    path: "/services/air-freight",
    img: "/service-images/air-freight-hero.jpg",
  },
  {
    title: "Inland Transport",
    desc: "Nationwide trucking with full GPS visibility & tracking.",
    path: "/services/inland-transport",
    img: "/service-images/inland-transport-hero.jpg",
  },
  {
    title: "Customs Clearance",
    desc: "Expert documentation, compliance & fast-track clearance.",
    path: "/services/customs-clearance",
    img: "/service-images/customs-clearance-hero.jpg",
  },
  {
    title: "Warehousing",
    desc: "Bonded warehouses, inventory management & distribution.",
    path: "/services/warehousing",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85",
  },
  {
    title: "Project Logistics",
    desc: "Complex, large-scale project cargo & heavy-lift solutions.",
    path: "/services/project-logistics",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
  },
  {
    title: "RoRo Services",
    desc: "Roll-on/Roll-off transport for vehicles & heavy machinery.",
    path: "/services/roro",
    img: "https://images.unsplash.com/photo-1574023278095-e0a8c0a28e66?w=800&q=85",
  },
  {
    title: "Consultancy",
    desc: "Trade advisory, supply chain optimization & compliance.",
    path: "/services/consultancy",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=85",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesOverview() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Services"
          title="End-to-End Logistics Solutions"
          description="From port to door, we manage every link in your supply chain with precision and care."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((svc) => (
            <motion.div key={svc.title} variants={cardVariants}>
              <Link
                to={svc.path}
                className="group block bg-card border border-border/50 rounded-xl overflow-hidden h-full hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/25 hover:-translate-y-1 transition-all duration-400"
              >
                {/* Photo */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                </div>
                {/* Text */}
                <div className="p-5">
                  <div className="w-6 h-px bg-accent mb-3 group-hover:w-10 transition-all duration-300" />
                  <h3 className="text-base font-semibold text-primary mb-1.5">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-accent font-medium translate-x-0 group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
