import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Container,
  ExternalLink,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { enabledTrackingCarriers } from "@/lib/tracking/carriers";
import { resolveTrackingRequest } from "@/lib/tracking/detectTracking";

export default function Track() {
  const [trackingValue, setTrackingValue] = useState("");
  const [resolution, setResolution] = useState(null);

  const handleTrack = () => {
    setResolution(resolveTrackingRequest({ mode: "container", value: trackingValue }));
  };

  const readyResult = resolution?.status === "ready";
  const hasError = resolution?.status === "error";
  const unsupportedResult = resolution?.status === "unsupported";

  return (
    <>
      <PageHero
        title="Shipment Tracking Assistant"
        subtitle="Enter a container number and jump to the right public carrier tracker."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Tracking Tool"
            title="A cleaner way to reach the right carrier tracker"
            description="Container only. Fast detection, clean redirect."
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-[32px] border border-border/50 bg-primary px-6 py-7 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] md:px-8 md:py-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,44,36,0.22),transparent_42%)]" />
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  Free Utility by Tact Freight
                </div>

                <div className="mt-5 max-w-2xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Enter the container number. We detect the carrier.
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-white/72 md:text-lg">
                    No carrier dropdown, no fake shipment data. Just a clean handoff to the official public tracker when supported.
                  </p>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/12 bg-white/5 p-4 backdrop-blur-sm md:p-5">
                  <div className="mt-5 space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="tracking-reference" className="block text-sm font-medium text-white">
                        Container number
                      </label>
                      <Input
                        id="tracking-reference"
                        value={trackingValue}
                        onChange={(event) => setTrackingValue(event.target.value)}
                        placeholder="Enter a container number like MSKU1234567"
                        className="h-12 border-white/12 bg-white text-primary placeholder:text-slate-400"
                      />
                      <p className="text-sm text-white/62">We use the first 4 letters to identify the carrier automatically.</p>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <Button
                        type="button"
                        onClick={handleTrack}
                        className="h-12 min-w-[190px] bg-accent text-white hover:bg-accent/90"
                      >
                        <ScanSearch className="mr-2 h-4 w-4" />
                        Detect and Track
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setTrackingValue("");
                          setResolution(null);
                        }}
                        className="h-12 border-white/14 bg-transparent text-white hover:bg-white/8 hover:text-white"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>

                  <div className="mt-5">
                    {!resolution && (
                      <div className="rounded-2xl border border-dashed border-white/12 bg-black/15 px-4 py-4 text-sm text-white/72">
                        Start with a container or BL reference. We will either detect the carrier for you or ask for a manual selection before opening the official tracking page.
                      </div>
                    )}

                    {hasError && (
                      <div className="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-4 text-sm text-red-100">
                        {resolution.message}
                      </div>
                    )}

                    {readyResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-[26px] border border-white/12 bg-gradient-to-br ${resolution.carrier.accent} p-[1px]`}
                      >
                        <div className="rounded-[25px] bg-slate-950/88 p-5">
                          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                            <div>
                              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/56">
                                Ready to open
                              </div>
                              <h3 className="mt-2 text-2xl font-semibold text-white">{resolution.carrier.name}</h3>
                              <p className="mt-2 text-sm leading-relaxed text-white/70">
                                {resolution.autoDetected
                                  ? `Detected automatically from owner code ${resolution.normalizedValue.slice(0, 4)}.`
                                  : "Using your selected carrier for this reference."}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                              <div className="text-[11px] uppercase tracking-[0.22em] text-white/48">
                                Reference
                              </div>
                              <div className="mt-1 text-base font-semibold text-white">{resolution.normalizedValue}</div>
                            </div>
                          </div>

                          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Button asChild className="h-11 bg-white text-primary hover:bg-white/90">
                              <a href={resolution.trackingUrl} target="_blank" rel="noreferrer">
                                Track with {resolution.carrier.name}
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button asChild variant="outline" className="h-11 border-white/14 bg-transparent text-white hover:bg-white/8 hover:text-white">
                              <Link to="/quote">
                                Need Tact support instead?
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {unsupportedResult && (
                      <div className="rounded-2xl border border-amber-300/20 bg-amber-400/10 px-4 py-4 text-sm text-amber-50">
                        {resolution.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <Card className="rounded-[28px] border-border/60 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.45)]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">How it works</h3>
                      <p className="text-sm text-muted-foreground">Transparent routing, no fake in-site milestones.</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-muted/45 px-4 py-4 text-sm leading-relaxed text-muted-foreground">
                    Container only. The tool detects the carrier and opens the official public tracking page when we have a confirmed direct redirect.
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border-border/60 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.45)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary">Confirmed direct carriers</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Public direct tracking is currently confirmed for Maersk, Hapag-Lloyd, and ONE.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {enabledTrackingCarriers.map((carrier) => (
                      <span
                        key={carrier.id}
                        className="rounded-full border border-border/70 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm"
                      >
                        {carrier.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border-accent/15 bg-accent/[0.03] shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary">Current scope</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The rest of the carriers will be added only after their public redirect pattern is verified properly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
