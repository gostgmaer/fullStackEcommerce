"use client";

import React, { useState, useEffect } from "react";
import OfferTimer from "@/components/elements/coupon/OfferTimer";

export default function OfferTimerWrapper() {
  const [expiry, setExpiry] = useState(null);

  useEffect(() => {
    // Set timer to expire 3 days from now
    setExpiry(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
  }, []);

  if (!expiry) {
    return <div className="h-7 w-32 bg-white/20 animate-pulse rounded"></div>;
  }

  return <OfferTimer expiryTimestamp={expiry} />;
}
