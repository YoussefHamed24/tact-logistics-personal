import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle2, Briefcase, Users, TrendingUp, Award } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=95";

const openings = [
  {
    id: 1, title: "Senior Customs Clearance Specialist", department: "Operations",
    type: "Full-time", location: "Nasr City, Cairo",
    description: "Lead the customs clearance process for complex shipments, manage relationships with customs authorities, and ensure full regulatory compliance.",
    requirements: ["5+ years customs clearance experience", "Expert knowledge of Egyptian customs regulations", "Experience with ACI/GOEIC systems", "Strong communication and negotiation skills"],
  },
  {
    id: 2, title: "Sea Freight Operations Coordinator", department: "Operations",
    type: "Full-time", location: "Nasr City, Cairo",
    description: "Coordinate sea freight bookings with shipping lines, manage documentation, and track shipments from origin to destination.",
    requirements: ["3+ years sea freight experience", "Knowledge of shipping documentation (BL, AWB, etc.)", "Experience with port community systems", "Proficiency in English"],
  },
  {
    id: 3, title: "Business Development Executive", department: "Commercial",
    type: "Full-time", location: "Cairo (Hybrid)",
    description: "Identify and develop new client relationships across target industries, present Tact Freight's service portfolio, and manage the sales pipeline.",
    requirements: ["3+ years B2B sales experience in logistics", "Established network in Egyptian business community", "Strong presentation and negotiation skills", "English fluency required"],
  },
  {
    id: 4, title: "Air Freight & Cold Chain Specialist", department: "Operations",
    type: "Full-time", location: "Cairo International Airport area",
    description: "Handle time-sensitive air freight shipments with a focus on pharmaceutical and perishable cargo requiring temperature-controlled handling.",
    requirements: ["3+ years air freight experience", "GDP/IATA CEIV Pharma certification is a plus", "Strong attention to detail and compliance mindset", "Ability to work under pressure"],
  },
  {
    id: 5, title: "Logistics Operations Trainee", department: "Operations",
    type: "Internship", location: "Nasr City, Cairo",
    description: "A structured 6-month programme giving fresh graduates hands-on exposure to customs, sea freight, and air freight operations.",
    requirements: ["Recent graduate in logistics, business, or related field", "Eagerness to learn and grow", "Good command of English", "Strong organisational skills"],
  },
];

const perks = [
  { icon: TrendingUp, title: "Career growth", desc: "Structured paths and internal promotion across all departments." },
  { icon: Users, title: "Collaborative team", desc: "Work alongside Egypt's most experienced freight professionals." },
  { icon: Award, title: "Industry training", desc: "Sponsored certifications and continuous professional development." },
  { icon: Briefcase, title: "Real responsibility", desc: "Meaningful work on complex, high-value logistics operations." },
];

const EMPTY_FORM = {
  full_name: "", email: "", phone: "", position: "",
  years_experience: "", linkedin: "", cover_letter: "",
};

export default function Careers() {
  const [expanded, setExpanded] = useState(null);
  const [applyingTo, setApplyingTo] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    if (submitted && formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const openApplication = (job) => {
    setApplyingTo(job);
    setForm({ ...EMPTY_FORM, position: job.title });
    setSubmitted(false);
    setError(null);
    // Scroll to form
    setTimeout(() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/submit-career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: "career_application" }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email your CV to operation@tactfreight.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        title="Join Tact Freight"
        subtitle="Build your career with Egypt's leading freight forwarding team."
        image={HERO_IMG}
      />

      {/* Why join us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Life at Tact" title="Why Work With Us" centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border/50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="Open Positions" title="Current Openings" centered />
          <div className="mt-12 space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-card border border-border/50 rounded-xl overflow-hidden"
              >
                <div
                  className="flex items-start justify-between gap-4 p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {job.department}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary text-lg">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />{job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />{job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1 text-muted-foreground">
                    {expanded === job.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border/50 pt-5">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.description}</p>
                        <h4 className="text-sm font-bold text-primary mb-3">Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((r, ri) => (
                            <li key={ri} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <Button
                          onClick={() => openApplication(job)}
                          className="bg-accent hover:bg-accent/90 text-white"
                        >
                          Apply for this position
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 bg-background" id="apply-form">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading
            label="Apply Now"
            title={applyingTo ? `Apply — ${applyingTo.title}` : "Send Your Application"}
            subtitle={applyingTo ? undefined : "Don't see a suitable role? Send us your CV and we'll reach out when something fits."}
            centered
          />

          <div className="mt-10 bg-card border border-border/50 rounded-2xl p-8 shadow-sm" ref={formCardRef}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Application Received</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Thank you for your interest in joining Tact Freight. We'll review your application and be in touch within 5 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setApplyingTo(null); setForm(EMPTY_FORM); }}
                  className="mt-6 text-sm text-accent hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
                    <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    <Input placeholder="LinkedIn profile URL" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
                  </div>

                  <Select value={form.position} onValueChange={(v) => setForm({ ...form, position: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Position applying for *" />
                    </SelectTrigger>
                    <SelectContent>
                      {openings.map((j) => (
                        <SelectItem key={j.id} value={j.title}>{j.title}</SelectItem>
                      ))}
                      <SelectItem value="general">General / Speculative Application</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={form.years_experience} onValueChange={(v) => setForm({ ...form, years_experience: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Years of experience in logistics *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0–1 years (graduate / entry level)</SelectItem>
                      <SelectItem value="1-3">1–3 years</SelectItem>
                      <SelectItem value="3-5">3–5 years</SelectItem>
                      <SelectItem value="5-10">5–10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Tell us about yourself and why you want to join Tact Freight *"
                    rows={5}
                    value={form.cover_letter}
                    onChange={(e) => setForm({ ...form, cover_letter: e.target.value })}
                    required
                  />

                  <p className="text-xs text-muted-foreground">
                    After submitting, our HR team will contact you to request your CV and any further documents.
                  </p>

                  <Button type="submit" disabled={sending} className="bg-accent hover:bg-accent/90 text-white w-full py-6 text-base font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    {sending ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
