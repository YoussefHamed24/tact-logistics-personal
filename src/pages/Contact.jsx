import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: "contact", service_type: "general" }),
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
              <div className="mt-8 flex gap-3">
                {[
                  { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                ].map((s) => (
                  <motion.a key={s.label} href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center" aria-label={s.label}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
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
