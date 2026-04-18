import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=95";
const MAP_IMG = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=90";

const contactItems = [
  { icon: MapPin, label: "Address", value: "29 Ahmad Kassem Gouda St., Nasr City, Cairo 11371, Egypt" },
  { icon: Phone, label: "Phone", value: "(202) 4042643" },
  { icon: Mail, label: "Email", value: "operation@tactfreight.com" },
  { icon: Globe, label: "Website", value: "www.tactfreight.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (submitted && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at operation@tactfreight.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with our team today." image={HERO_IMG} />

      <div className="relative h-52 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          src={MAP_IMG} alt="Cairo Egypt" className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Headquarters</p>
            <p className="text-white font-semibold text-lg">Cairo, Egypt</p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            <div>
              <SectionHeading label="Get in Touch" title="We're Here to Help" centered={false} />
              <div className="space-y-5">
                {contactItems.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 group">
                    <motion.div whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))" }} className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { label: "Email", href: "mailto:operation@tactfreight.com", value: "operation@tactfreight.com" },
                  { label: "Phone", href: "tel:20240426430", value: "(202) 4042643" },
                  { label: "Website", href: "https://www.tactfreight.com", value: "www.tactfreight.com" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <span className="font-semibold text-primary min-w-20">{item.label}</span>
                    <span>{item.value}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm" ref={formRef}>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Message Sent</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>
                    {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="Full Name *" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
                        <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                      </div>
                      <Textarea placeholder="Your Message *" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button type="submit" disabled={sending} className="bg-accent hover:bg-accent/90 text-white w-full py-6 text-base font-semibold">
                          <Send className="w-4 h-4 mr-2" />
                          {sending ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
