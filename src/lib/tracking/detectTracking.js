import { carrierLookup, carriersByMode, trackingCarriers } from "./carriers";

const CONTAINER_REGEX = /^[A-Z]{4}\d{7}$/;

export function normalizeTrackingValue(value) {
  return value.toUpperCase().trim().replace(/\s+/g, "");
}

export function detectContainerCarrier(value) {
  const ownerCode = value.slice(0, 4);
  return trackingCarriers.find((carrier) => carrier.ownerCodes.includes(ownerCode)) ?? null;
}

export function resolveTrackingRequest({ mode, value, carrierId = "" }) {
  const normalizedValue = normalizeTrackingValue(value);

  if (!normalizedValue) {
    return { status: "error", message: "Enter a tracking number to continue." };
  }

  if (mode === "container") {
    if (!CONTAINER_REGEX.test(normalizedValue)) {
      return {
        status: "error",
        message: "Container numbers should look like MSCU1234567 or CMAU7654321.",
      };
    }

    const detectedCarrier = detectContainerCarrier(normalizedValue);
    const carrier = carrierId ? carrierLookup[carrierId] : detectedCarrier;

    if (!carrier) {
      return {
        status: "needs-carrier",
        mode,
        normalizedValue,
        ownerCode: normalizedValue.slice(0, 4),
        carriers: carriersByMode(mode),
        message: `We recognize the container format, but ${normalizedValue.slice(0, 4)} is not mapped yet. Choose the carrier manually to continue.`,
      };
    }

    if (!carrier.trackingEnabled) {
      return {
        status: "unsupported",
        mode,
        normalizedValue,
        carrier,
        message: `${carrier.name} is recognized, but its public tracking redirect is not stable in this version yet.`,
      };
    }

    return {
      status: "ready",
      mode,
      normalizedValue,
      carrier,
      autoDetected: Boolean(detectedCarrier) && !carrierId,
      trackingUrl: carrier.buildTrackingUrl({ mode, value: normalizedValue }),
    };
  }

  if (mode === "bl") {
    const cleanValue = normalizedValue.replace(/[^A-Z0-9]/g, "");

    if (cleanValue.length < 6) {
      return {
        status: "error",
        message: "Bill of lading numbers vary by carrier. Enter the full reference and choose the carrier.",
      };
    }

    if (!carrierId || !carrierLookup[carrierId]) {
      return {
        status: "needs-carrier",
        mode,
        normalizedValue: cleanValue,
        carriers: carriersByMode(mode),
        message: "Select the carrier first. BL tracking is carrier-specific in this first release.",
      };
    }

    const carrier = carrierLookup[carrierId];

    return {
      status: "ready",
      mode,
      normalizedValue: cleanValue,
      carrier,
      autoDetected: false,
      trackingUrl: carrier.buildTrackingUrl({ mode, value: cleanValue }),
    };
  }

  return {
    status: "error",
    message: "This tracking mode is not available yet.",
  };
}
