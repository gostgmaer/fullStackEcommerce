"use client";

import React, { useState } from "react";
import { FiTruck, FiShield, FiRotateCcw, FiPhoneCall, FiSend, FiStar, FiMail } from "react-icons/fi";
import { notifySuccess } from "@/utils/notify/notice";

// 1. TrustBar Component
export function TrustBar() {
  const trustItems = [
    {
      icon: <FiTruck className="w-6 h-6 text-primary" />,
      title: "Free Shipping",
      desc: "On all orders above $50.00",
    },
    {
      icon: <FiShield className="w-6 h-6 text-primary" />,
      title: "100% Secure Checkout",
      desc: "Fully encrypted SSL payments",
    },
    {
      icon: <FiRotateCcw className="w-6 h-6 text-primary" />,
      title: "Easy Returns",
      desc: "30-day money-back guarantee",
    },
    {
      icon: <FiPhoneCall className="w-6 h-6 text-primary" />,
      title: "24/7 Dedicated Support",
      desc: "Get helper query responses anytime",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
      {trustItems.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 p-5 card-base hover:shadow-premium hover:-translate-y-1 transition-all duration-400 group"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
            {item.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 2. Testimonials Component
export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Verified Buyer",
      stars: 5,
      comment: "Absolutely outstanding quality! The fresh fruits and vegetables arrived perfectly packed and crisp. Delivery took under 2 hours, which is exceptional. Highly recommend their organic selections!",
      date: "May 12, 2026",
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Regular Customer",
      stars: 5,
      comment: "I love the checkout speed and how easy it is to track orders. Had to contact support once to update my shipping details and they resolved it in minutes. A truly premium shopping experience.",
      date: "April 28, 2026",
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Tech Professional",
      stars: 5,
      comment: "The best online grocery and organic shop I've ever used. The website is extremely fast, dark mode looks gorgeous, and variant selections are seamless. 10 out of 10!",
      date: "May 19, 2026",
    },
  ];

  return (
    <div className="my-16">
      <div className="section-heading mb-14">
        <span className="section-label">Social Proof</span>
        <h3 className="section-title">What Our Customers Say</h3>
        <p className="section-subtitle">
          Read genuine reviews from verified shoppers who trust us for their daily organic needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={rev.id}
            className="p-7 lg:p-8 card-base flex flex-col justify-between hover:shadow-premium hover:-translate-y-1 transition-all duration-400"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="space-y-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from(Array(rev.stars)).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                &quot;{rev.comment}&quot;
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border/30">
              <div>
                <h5 className="text-sm font-bold text-foreground">{rev.name}</h5>
                <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">{rev.role}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. NewsletterSignup Component
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Simulate subscription
    notifySuccess("Subscription Successful! Check your inbox for a 10% discount code.");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="my-16 p-10 md:p-14 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-80 hidden md:block"></div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full mix-blend-screen opacity-50"></div>
      <div className="absolute right-10 top-10 w-32 h-32 bg-accent/10 blur-2xl rounded-full mix-blend-screen opacity-30 animate-float"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl mb-2">
            <FiMail className="w-5 h-5" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black font-serif">
            Join Our Newsletter & Save
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Subscribe to our weekly newsletter to receive exclusive discount codes, flash sale alerts, and fresh product announcements directly in your inbox.
          </p>
        </div>

        {subscribed ? (
          <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-center md:text-left animate-fade-in">
            <h4 className="font-bold text-md">🎉 Thank you for subscribing!</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Your 10% coupon code: <strong>WELCOME10</strong> has been mailed to you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 min-w-[320px]">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border border-border bg-card text-foreground rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm flex-grow md:min-w-[260px]"
            />
            <button
              type="submit"
              className="py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap shadow"
            >
              <FiSend className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
