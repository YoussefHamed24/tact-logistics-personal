import React from "react";

function LogoRailItem({ item, accent = false }) {
  return (
    <div
      className={`w-[220px] shrink-0 rounded-[26px] border px-5 py-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1
        ${accent
          ? "border-accent/15 bg-gradient-to-br from-accent/[0.05] via-background to-accent/[0.03] shadow-[0_18px_48px_-40px_rgba(239,68,68,0.24)]"
          : "border-border/50 bg-card/95 shadow-[0_18px_48px_-40px_rgba(15,23,42,0.24)]"
        }`}
    >
      {item.hasLogo ? (
        <div className="flex h-20 items-center justify-center">
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="max-h-12 w-auto max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-border/70 bg-muted/40 px-4 text-center">
          <span className="text-base font-semibold text-muted-foreground">{item.name}</span>
        </div>
      )}
      <div className="mt-3 text-center">
        <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/90">
          {item.name}
        </div>
      </div>
    </div>
  );
}

export default function LogoRail({
  items,
  duration = 36,
  reverse = false,
  accent = false,
  backgroundTone = "background",
}) {
  const duplicated = [...items, ...items];
  const fadeFrom = backgroundTone === "muted" ? "from-muted/40 via-muted/35" : "from-background via-background/92";

  return (
    <div className="logo-rail group relative overflow-hidden">
      <style>{`
        @keyframes logoRailMarquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .logo-rail-track {
          animation-name: logoRailMarquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
          will-change: transform;
        }
        .logo-rail:hover .logo-rail-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r ${fadeFrom} to-transparent`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l ${fadeFrom} to-transparent`} />

      <div
        className="logo-rail-track flex w-max gap-5 py-2"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {duplicated.map((item, index) => (
          <LogoRailItem key={`${item.name}-${index}`} item={item} accent={accent} />
        ))}
      </div>
    </div>
  );
}
