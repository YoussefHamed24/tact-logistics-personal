import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function AIServiceDescription({ serviceTitle, defaultDesc, keywords }) {
  const [aiDesc, setAiDesc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const generate = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a freight forwarding expert copywriter for Tact Freight, a leading Egyptian logistics company. 
Write a compelling, professional 2-sentence description for the "${serviceTitle}" service. 
Use these keywords naturally: ${keywords.join(", ")}.
Focus on unique value propositions, client outcomes, and Tact Freight's expertise.
Keep it concise, confident, and client-focused. No fluff. Return ONLY the description text.`,
    });
    setAiDesc(typeof result === "string" ? result : result?.text || result);
    setExpanded(true);
    setLoading(false);
  };

  return (
    <div className="mt-2">
      <AnimatePresence mode="wait">
        {aiDesc && expanded ? (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-muted-foreground leading-relaxed text-sm border-l-2 border-accent/40 pl-3 italic"
          >
            {aiDesc}
          </motion.div>
        ) : (
          <motion.p key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-muted-foreground leading-relaxed">
            {defaultDesc}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={generate}
          disabled={loading}
          className="inline-flex items-center gap-1.5 text-xs text-accent/80 hover:text-accent font-medium transition-colors group"
        >
          {loading ? (
            <RefreshCw className="w-3 h-3 animate-spin" />
          ) : (
            <Sparkles className="w-3 h-3 group-hover:scale-110 transition-transform" />
          )}
          {loading ? "Generating..." : aiDesc ? "Regenerate AI description" : "Generate AI description"}
        </button>

        {aiDesc && (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? "Show original" : "Show AI"}
          </button>
        )}
      </div>
    </div>
  );
}