export const trackingCarriers = [
  {
    id: "maersk",
    name: "Maersk",
    modes: ["container", "bl"],
    ownerCodes: ["MAEU", "MSKU", "MRSU", "SEGU"],
    trackingUrl: "https://www.maersk.com/tracking/",
    buildTrackingUrl: ({ value }) => `https://www.maersk.com/tracking/${value}`,
    accent: "from-[#0A6FB5] to-[#3CA3DC]",
    trackingEnabled: true,
  },
  {
    id: "msc",
    name: "MSC",
    modes: ["container", "bl"],
    ownerCodes: ["MSCU", "MEDU"],
    trackingUrl: "https://www.msc.com/en/track-a-shipment",
    buildTrackingUrl: () => "https://www.msc.com/en/track-a-shipment",
    accent: "from-[#9B7A1C] to-[#E3C05A]",
    trackingEnabled: false,
  },
  {
    id: "cma-cgm",
    name: "CMA CGM",
    modes: ["container", "bl"],
    ownerCodes: ["CMAU", "CGMU", "CMDU"],
    trackingUrl: "https://www.cma-cgm.com/ebusiness/tracking",
    buildTrackingUrl: ({ value }) => `https://www.cma-cgm.com/eBusiness/tracking/detail/${value}`,
    accent: "from-[#071E63] to-[#EF3C2D]",
    trackingEnabled: false,
  },
  {
    id: "hapag-lloyd",
    name: "Hapag-Lloyd",
    modes: ["container", "bl"],
    ownerCodes: ["HLCU", "HLBU"],
    trackingUrl: "https://www.hapag-lloyd.com/en/online-business/track/track.html",
    buildTrackingUrl: ({ mode, value }) =>
      mode === "container"
        ? `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${value}`
        : "https://www.hapag-lloyd.com/en/online-business/track/track.html",
    accent: "from-[#031B6B] to-[#1151C1]",
    trackingEnabled: true,
  },
  {
    id: "one",
    name: "ONE",
    modes: ["container", "bl"],
    ownerCodes: ["ONEY", "ONEU"],
    trackingUrl: "https://us.one-line.com/CargoTracking",
    buildTrackingUrl: ({ value }) => `https://ecomm.one-line.com/ecom/CUP_HOM_3301.do?trakNoParam=${value}`,
    accent: "from-[#B01882] to-[#E339B7]",
    trackingEnabled: true,
  },
  {
    id: "oocl",
    name: "OOCL",
    modes: ["container", "bl"],
    ownerCodes: ["OOLU"],
    trackingUrl: "https://www.oocl.com/eng/ourservices/eservices/cargotracking/pages/cargotracking.aspx",
    buildTrackingUrl: () => "https://www.oocl.com/eng/ourservices/eservices/cargotracking/pages/cargotracking.aspx",
    accent: "from-[#CE1018] to-[#F44D56]",
    trackingEnabled: false,
  },
  {
    id: "unifeeder",
    name: "Unifeeder",
    modes: ["container", "bl"],
    ownerCodes: ["BDKU"],
    trackingUrl: "https://www.unifeeder.com/track-and-trace",
    buildTrackingUrl: () => "https://www.unifeeder.com/track-and-trace",
    accent: "from-[#0B4E84] to-[#2197C7]",
    trackingEnabled: false,
  },
  {
    id: "hmm",
    name: "HMM",
    modes: ["container", "bl"],
    ownerCodes: ["HDMU"],
    trackingUrl: "https://www.hmm21.com/company.do",
    buildTrackingUrl: ({ value }) => `https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do?cntrNo=${value}`,
    accent: "from-[#12306B] to-[#2A5CC4]",
    trackingEnabled: false,
  },
  {
    id: "pil",
    name: "PIL",
    modes: ["container", "bl"],
    ownerCodes: ["PILU"],
    trackingUrl: "https://www.pilship.com/",
    buildTrackingUrl: () => "https://www.pilship.com/",
    accent: "from-[#0E61B1] to-[#F6363C]",
    trackingEnabled: false,
  },
  {
    id: "yang-ming",
    name: "Yang Ming",
    modes: ["container", "bl"],
    ownerCodes: ["YMLU"],
    trackingUrl: "https://www.yangming.com/en/esolution/tracking/cargo_tracking",
    buildTrackingUrl: ({ value }) => `https://www.yangming.com/en/esolution/cargo_tracking?service=${value}`,
    accent: "from-[#D71920] to-[#F85656]",
    trackingEnabled: false,
  },
];

export const carrierLookup = Object.fromEntries(
  trackingCarriers.map((carrier) => [carrier.id, carrier]),
);

export const carriersByMode = (mode) =>
  trackingCarriers.filter((carrier) => carrier.modes.includes(mode));

export const enabledTrackingCarriers = trackingCarriers.filter(
  (carrier) => carrier.trackingEnabled,
);
