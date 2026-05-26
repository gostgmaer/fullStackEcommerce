"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FiCreditCard,
  FiFileText,
  FiHelpCircle,
  FiLifeBuoy,
  FiMail,
  FiMessageCircle,
  FiPackage,
  FiPhoneCall,
  FiSearch,
  FiShield,
  FiTag,
  FiTruck,
  FiUser,
  FiRotateCcw,
} from "react-icons/fi";
import SupportTicketService from "@/helper/network/services/SupportTicketService";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";

const HELP_CATEGORIES = [
  {
    title: "Orders & Tracking",
    description: "Track deliveries, report missing items, or raise an order issue",
    icon: <FiPackage className="w-6 h-6" />,
    links: [
      { label: "Track My Order", href: "/track-order" },
      { label: "Open an Order Ticket", href: "/help-center#ticket-form" },
      { label: "Check Ticket Status", href: "/help-center#ticket-tracker" },
    ],
  },
  {
    title: "Shipping & Delivery",
    description: "Shipping windows, courier delays, and delivery support",
    icon: <FiTruck className="w-6 h-6" />,
    links: [
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Raise a Shipping Ticket", href: "/help-center#ticket-form" },
      { label: "Delivery FAQs", href: "/faqs#shipping" },
    ],
  },
  {
    title: "Returns & Refunds",
    description: "Return requests, refund delays, and exchange questions",
    icon: <FiRotateCcw className="w-6 h-6" />,
    links: [
      { label: "Return Policy", href: "/return-policy" },
      { label: "Create a Refund Ticket", href: "/help-center#ticket-form" },
      { label: "Track Refund Ticket", href: "/help-center#ticket-tracker" },
    ],
  },
  {
    title: "Payments & Billing",
    description: "Payment failures, invoice questions, and billing disputes",
    icon: <FiCreditCard className="w-6 h-6" />,
    links: [
      { label: "Billing Ticket", href: "/help-center#ticket-form" },
      { label: "Payment Methods", href: "/faqs#ordering" },
      { label: "Invoice Help", href: "/help-center#ticket-tracker" },
    ],
  },
  {
    title: "Account & Profile",
    description: "Login help, password resets, and account management",
    icon: <FiUser className="w-6 h-6" />,
    links: [
      { label: "Update Profile", href: "/user/my-account/profile" },
      { label: "Change Password", href: "/user/my-account/update-password" },
      { label: "Account Support Ticket", href: "/help-center#ticket-form" },
    ],
  },
  {
    title: "Products & Stock",
    description: "Product questions, stock alerts, and pre-purchase support",
    icon: <FiHelpCircle className="w-6 h-6" />,
    links: [
      { label: "Product FAQs", href: "/faqs#products" },
      { label: "Ask a Product Question", href: "/help-center#ticket-form" },
      { label: "Browse Products", href: "/product/search" },
    ],
  },
];

const CONTACT_OPTIONS = [
  {
    title: "Create a Ticket",
    description: "Open a support request and get a ticket number instantly.",
    icon: <FiMessageCircle className="w-5 h-5" />,
    href: "/help-center#ticket-form",
    cta: "Open Ticket",
  },
  {
    title: "Track a Ticket",
    description: "Check the status of an existing request with ticket ID and email.",
    icon: <FiSearch className="w-5 h-5" />,
    href: "/help-center#ticket-tracker",
    cta: "Track Ticket",
  },
  {
    title: "Call Support",
    description: "Speak to a support agent for urgent delivery or payment issues.",
    icon: <FiPhoneCall className="w-5 h-5" />,
    href: "tel:+15551234567",
    cta: "+1 (555) 123-4567",
    external: true,
  },
];

const QUICK_LINKS = [
  { label: "FAQs", href: "/faqs", icon: <FiHelpCircle className="w-4 h-4" /> },
  { label: "Track Order", href: "/track-order", icon: <FiSearch className="w-4 h-4" /> },
  { label: "Privacy Policy", href: "/privacy-policy", icon: <FiShield className="w-4 h-4" /> },
  { label: "Terms & Conditions", href: "/terms-and-conditions", icon: <FiFileText className="w-4 h-4" /> },
];

const CATEGORY_OPTIONS = [
  { value: "general", label: "General inquiry" },
  { value: "order", label: "Order issue" },
  { value: "shipping", label: "Shipping and delivery" },
  { value: "returns", label: "Returns and refunds" },
  { value: "payment", label: "Payment issue" },
  { value: "product", label: "Product question" },
  { value: "account", label: "Account support" },
  { value: "technical", label: "Technical support" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

const STATUS_META = {
  new: { label: "New", badge: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20", copy: "Your request has been received and queued for review." },
  reviewing: { label: "Reviewing", badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20", copy: "A support agent is reviewing the details and next steps." },
  contacted: { label: "Contacted", badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20", copy: "We have replied or attempted to reach you using your preferred contact method." },
  quoted: { label: "Quoted", badge: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20", copy: "A proposed resolution or quotation has been shared with you." },
  "proposal-sent": { label: "Proposal Sent", badge: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20", copy: "A formal proposal has been sent for your review." },
  negotiating: { label: "In Progress", badge: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20", copy: "Your request is actively being worked on with follow-up in progress." },
  accepted: { label: "Accepted", badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20", copy: "You have accepted the current resolution path for this ticket." },
  rejected: { label: "Rejected", badge: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20", copy: "The current proposed resolution was declined and may need a follow-up ticket." },
  completed: { label: "Completed", badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20", copy: "This ticket has been completed and closed by support." },
  cancelled: { label: "Cancelled", badge: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20", copy: "This ticket was cancelled before resolution." },
};

const emptyTicketForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  category: "order",
  orderReference: "",
  subject: "",
  description: "",
  preferredContactMethod: "email",
};

const emptyTrackerForm = {
  ticketId: "",
  email: "",
};

const inputClassName =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

const toTitle = (value) =>
  String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

const formatDate = (value) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
};

const getStatusMeta = (status) => STATUS_META[status] || {
  label: toTitle(status || "new") || "New",
  badge: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
  copy: "Your ticket is currently being processed by support.",
};

const splitSessionName = (name) => {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
};

const TicketSummary = ({ title, ticket }) => {
  const statusMeta = getStatusMeta(ticket?.status);

  if (!ticket) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground">
        Enter your ticket details to check the latest support status, reply window, and issue summary.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">{title}</p>
          <h3 className="mt-2 text-xl font-bold text-foreground">{ticket.subject || "Support request"}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{ticket.ticketId || `#${ticket.inquiryNumber}`}</p>
        </div>
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusMeta.badge}`}>
          {statusMeta.label}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{statusMeta.copy}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="rounded-2xl bg-muted/20 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Category</p>
          <p className="mt-1 font-semibold text-foreground">{toTitle(ticket.category || "general")}</p>
        </div>
        <div className="rounded-2xl bg-muted/20 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Preferred Contact</p>
          <p className="mt-1 font-semibold text-foreground">{toTitle(ticket.preferredContactMethod || "email")}</p>
        </div>
        <div className="rounded-2xl bg-muted/20 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Submitted</p>
          <p className="mt-1 font-semibold text-foreground">{formatDate(ticket.createdAt)}</p>
        </div>
        <div className="rounded-2xl bg-muted/20 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Order Reference</p>
          <p className="mt-1 font-semibold text-foreground">{ticket.orderReference || "Not provided"}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-primary/[0.04] border border-primary/10 p-4">
        <div className="flex items-center gap-2 text-primary">
          <FiTag className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wide">Issue Summary</p>
        </div>
        <p className="mt-2 text-sm text-foreground leading-6">{ticket.description}</p>
      </div>
    </div>
  );
};

const HelpCenterContent = () => {
  const { data: session } = useSession();
  const [ticketForm, setTicketForm] = useState(emptyTicketForm);
  const [trackerForm, setTrackerForm] = useState(emptyTrackerForm);
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [isTrackingTicket, setIsTrackingTicket] = useState(false);
  const [createdTicket, setCreatedTicket] = useState(null);
  const [trackedTicket, setTrackedTicket] = useState(null);

  useEffect(() => {
    if (!session?.user) return;

    const { firstName, lastName } = splitSessionName(session.user.name);

    setTicketForm((current) => ({
      ...current,
      firstName: current.firstName || firstName,
      lastName: current.lastName || lastName,
      email: current.email || session.user.email || "",
    }));

    setTrackerForm((current) => ({
      ...current,
      email: current.email || session.user.email || "",
    }));
  }, [session]);

  const handleTicketFieldChange = (event) => {
    const { name, value } = event.target;
    setTicketForm((current) => ({ ...current, [name]: value }));
  };

  const handleTrackerFieldChange = (event) => {
    const { name, value } = event.target;
    setTrackerForm((current) => ({ ...current, [name]: value }));
  };

  const validateTicketForm = () => {
    if (!ticketForm.firstName.trim()) return "First name is required.";
    if (!ticketForm.lastName.trim()) return "Last name is required.";
    if (!isValidEmail(ticketForm.email)) return "Enter a valid email address.";
    if (!ticketForm.subject.trim()) return "Add a short subject for your ticket.";
    if (!ticketForm.description.trim() || ticketForm.description.trim().length < 20) {
      return "Describe the issue in at least 20 characters.";
    }
    return "";
  };

  const handleCreateTicket = async (event) => {
    event.preventDefault();
    const validationMessage = validateTicketForm();

    if (validationMessage) {
      notifyerror(validationMessage, 5000);
      return;
    }

    setIsSubmittingTicket(true);
    const response = await SupportTicketService.createTicket(ticketForm);
    setIsSubmittingTicket(false);

    if (response?.error) {
      notifyerror(response.error, 5000);
      return;
    }

    const ticket = response?.data;
    setCreatedTicket(ticket);
    setTrackedTicket(ticket);
    setTrackerForm({
      ticketId: ticket?.ticketId || String(ticket?.inquiryNumber || ""),
      email: ticket?.email || ticketForm.email,
    });
    setTicketForm((current) => ({
      ...emptyTicketForm,
      firstName: current.firstName,
      lastName: current.lastName,
      email: current.email,
      phone: current.phone,
      preferredContactMethod: current.preferredContactMethod,
      category: current.category,
    }));
    notifySuccess(response?.message || `Ticket ${ticket?.ticketId || ticket?.inquiryNumber} created successfully.`);
  };

  const handleTrackTicket = async (event) => {
    event.preventDefault();

    if (!trackerForm.ticketId.trim()) {
      notifyerror("Enter your ticket ID.", 5000);
      return;
    }

    if (!isValidEmail(trackerForm.email)) {
      notifyerror("Enter the same email used when the ticket was created.", 5000);
      return;
    }

    setIsTrackingTicket(true);
    const response = await SupportTicketService.trackTicket(trackerForm);
    setIsTrackingTicket(false);

    if (response?.error) {
      notifyerror(response.error, 5000);
      return;
    }

    setTrackedTicket(response?.data);
    notifySuccess(response?.message || "Ticket details loaded.");
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-screen-xl mx-auto lg:py-16 py-10 px-4 sm:px-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <FiLifeBuoy className="h-4 w-4" />
            Customer Support Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-serif tracking-tight">
            Help center with real support tickets
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-7">
            Open a support ticket, get an instant ticket ID, and track status updates from the same page whether you&apos;re a guest or a signed-in customer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELP_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-1"
                    >
                      <span className="text-primary/60">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <section id="ticket-form" className="rounded-[28px] border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiMessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Create a ticket</p>
                <h2 className="text-2xl font-bold font-serif">Tell support what went wrong</h2>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-6">
              Share the issue details once. We&apos;ll create a support ticket immediately and give you a ticket ID you can use to check progress any time.
            </p>

            {createdTicket ? (
              <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-900 dark:text-emerald-200">
                <p className="font-semibold">Ticket created: {createdTicket.ticketId}</p>
                <p className="mt-1">Use this ticket ID with your email to check status updates in the tracker.</p>
              </div>
            ) : null}

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleCreateTicket}>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="firstName">
                  First Name
                </label>
                <input id="firstName" name="firstName" value={ticketForm.firstName} onChange={handleTicketFieldChange} className={inputClassName} placeholder="First name" />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="lastName">
                  Last Name
                </label>
                <input id="lastName" name="lastName" value={ticketForm.lastName} onChange={handleTicketFieldChange} className={inputClassName} placeholder="Last name" />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="email">
                  Email Address
                </label>
                <input id="email" name="email" value={ticketForm.email} onChange={handleTicketFieldChange} className={inputClassName} placeholder="you@example.com" type="email" />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="phone">
                  Phone Number
                </label>
                <input id="phone" name="phone" value={ticketForm.phone} onChange={handleTicketFieldChange} className={inputClassName} placeholder="Optional" />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="category">
                  Issue Category
                </label>
                <select id="category" name="category" value={ticketForm.category} onChange={handleTicketFieldChange} className={inputClassName}>
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="preferredContactMethod">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={ticketForm.preferredContactMethod}
                  onChange={handleTicketFieldChange}
                  className={inputClassName}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="any">Any</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="orderReference">
                  Order Reference
                </label>
                <input
                  id="orderReference"
                  name="orderReference"
                  value={ticketForm.orderReference}
                  onChange={handleTicketFieldChange}
                  className={inputClassName}
                  placeholder="Order ID, invoice, or tracking ref"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" name="subject" value={ticketForm.subject} onChange={handleTicketFieldChange} className={inputClassName} placeholder="Short summary of the issue" />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={ticketForm.description}
                  onChange={handleTicketFieldChange}
                  className={`${inputClassName} min-h-[144px] resize-y`}
                  placeholder="Explain what happened, what you expected, and any details that would help support resolve it faster."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingTicket}
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiMail className="h-4 w-4" />
                {isSubmittingTicket ? "Submitting Ticket..." : "Submit Ticket"}
              </button>
            </form>
          </section>

          <div className="space-y-6">
            <section id="ticket-tracker" className="rounded-[28px] border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FiSearch className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Track a ticket</p>
                  <h2 className="text-2xl font-bold font-serif">Check status in seconds</h2>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-6">
                Enter the ticket ID and email used during submission to view the latest support status and issue summary.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleTrackTicket}>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="ticketId">
                    Ticket ID
                  </label>
                  <input
                    id="ticketId"
                    name="ticketId"
                    value={trackerForm.ticketId}
                    onChange={handleTrackerFieldChange}
                    className={inputClassName}
                    placeholder="SUP-000001"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="trackerEmail">
                    Billing or Contact Email
                  </label>
                  <input
                    id="trackerEmail"
                    name="email"
                    type="email"
                    value={trackerForm.email}
                    onChange={handleTrackerFieldChange}
                    className={inputClassName}
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTrackingTicket}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FiSearch className="h-4 w-4" />
                  {isTrackingTicket ? "Loading Ticket..." : "Track Ticket"}
                </button>
              </form>
            </section>

            <TicketSummary title="Current ticket status" ticket={trackedTicket || createdTicket} />
          </div>
        </div>

        <div className="border-t border-border pt-12 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-serif">Still need another contact option?</h2>
            <p className="text-sm text-muted-foreground">
              Tickets are the fastest route for order history and issue tracking, but direct options are still here when you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {CONTACT_OPTIONS.map((option) => {
              const content = (
                <>
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">{option.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{option.description}</p>
                  <span className="text-xs font-semibold text-primary">{option.cta}</span>
                </>
              );

              if (option.external) {
                return (
                  <a
                    key={option.title}
                    href={option.href}
                    className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 hover:-translate-y-1 transition-all group"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={option.title}
                  href={option.href}
                  className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 hover:-translate-y-1 transition-all group"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {QUICK_LINKS.map((quickLink) => (
            <Link
              key={quickLink.label}
              href={quickLink.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground bg-muted/30 border border-border rounded-full hover:text-primary hover:border-primary/40 transition-colors"
            >
              {quickLink.icon}
              {quickLink.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterContent;