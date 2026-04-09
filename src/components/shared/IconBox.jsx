import React from "react";

/**
 * Modern gradient icon container used site-wide.
 * size: "sm" | "md" | "lg"
 */
export default function IconBox({ icon: Icon, size = "md", className = "" }) {
  const sizes = {
    sm: { wrap: "w-9 h-9 rounded-xl",  icon: "w-4 h-4" },
    md: { wrap: "w-12 h-12 rounded-2xl", icon: "w-5 h-5" },
    lg: { wrap: "w-14 h-14 rounded-2xl", icon: "w-6 h-6" },
  };
  const s = sizes[size];
  return (
    <div
      className={`${s.wrap} relative flex items-center justify-center flex-shrink-0
        bg-gradient-to-br from-accent/20 via-accent/10 to-blue-500/5
        border border-accent/20 shadow-lg shadow-accent/10
        group-hover:from-accent/30 group-hover:via-accent/20 group-hover:border-accent/40
        group-hover:shadow-accent/20 transition-all duration-300 ${className}`}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/10 to-transparent opacity-60" />
      <Icon className={`${s.icon} text-accent relative z-10`} />
    </div>
  );
}