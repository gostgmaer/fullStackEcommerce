"use client";

import React, { useState, useEffect } from "react";
import { IoCloseOutline, IoTimeOutline, IoGiftOutline } from "react-icons/io5";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    // Check local storage to see if the user closed the announcement bar
    const isDismissed = localStorage.getItem("announcementDismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }

    // Set countdown timer to end of day today (local time)
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay - now;
      if (diff <= 0) {
        return { hours: "00", minutes: "00", seconds: "00" };
      }

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      return {
        hours: hrs.toString().padStart(2, "0"),
        minutes: mins.toString().padStart(2, "0"),
        seconds: secs.toString().padStart(2, "0"),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcementDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-white py-2 px-4 shadow-sm relative overflow-hidden transition-all duration-350 z-30">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center pr-8">
        
        {/* Promo Message */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide">
          <IoGiftOutline className="text-base animate-bounce" />
          <span>
            Summer Sale: Use code <span className="font-mono bg-white/20 px-2 py-0.5 rounded border border-white/10 font-bold uppercase">WELCOME10</span> for <span className="font-extrabold text-yellow-350 text-amber-300">10% OFF</span> + Free Shipping on orders over ₹500!
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center gap-1.5 text-xs font-bold bg-black/20 px-3 py-1 rounded-full border border-white/10">
          <IoTimeOutline className="text-sm" />
          <span className="uppercase tracking-wider mr-1 text-[10px] opacity-90">Offer ends in:</span>
          <span className="font-mono text-amber-300">{timeLeft.hours}</span>
          <span className="opacity-70">:</span>
          <span className="font-mono text-amber-300">{timeLeft.minutes}</span>
          <span className="opacity-70">:</span>
          <span className="font-mono text-amber-300">{timeLeft.seconds}</span>
        </div>

      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white hover:text-amber-300 rounded-full hover:bg-white/10 transition-all active:scale-95"
        aria-label="Dismiss announcement"
      >
        <IoCloseOutline className="text-xl" />
      </button>
    </div>
  );
}
