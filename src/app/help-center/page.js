import React from "react";
import Link from "next/link";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import {
  FiPackage,
  FiTruck,
  FiRotateCcw,
  FiCreditCard,
  FiUser,
  FiHelpCircle,
  FiMessageCircle,
  FiMail,
  FiPhoneCall,
  FiSearch,
  FiShield,
  FiFileText,
} from "react-icons/fi";

export const metadata = {
  title: "Help Center | E-Commerce",
  description:
    "Find answers to common questions about orders, shipping, returns, payments, and more.",
};

const HELP_CATEGORIES = [
  {
    title: "Orders & Tracking",
    description: "Track your order, manage orders, or report issues",
    icon: <FiPackage className="w-6 h-6" />,
    links: [
      { label: "Track My Order", href: "/track-order" },
      { label: "Order Issues", href: "/contact-us" },
      { label: "Cancel an Order", href: "/faqs#ordering" },
    ],
  },
  {
    title: "Shipping & Delivery",
    description: "Shipping rates, delivery times, and policies",
    icon: <FiTruck className="w-6 h-6" />,
    links: [
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Delivery Times", href: "/faqs#shipping" },
      { label: "International Shipping", href: "/shipping-policy" },
    ],
  },
  {
    title: "Returns & Refunds",
    description: "Return eligibility, process, and refund timelines",
    icon: <FiRotateCcw className="w-6 h-6" />,
    links: [
      { label: "Return Policy", href: "/return-policy" },
      { label: "How to Return", href: "/faqs#returns" },
      { label: "Refund Status", href: "/contact-us" },
    ],
  },
  {
    title: "Payments & Billing",
    description: "Payment methods, billing issues, and invoices",
    icon: <FiCreditCard className="w-6 h-6" />,
    links: [
      { label: "Payment Methods", href: "/faqs#ordering" },
      { label: "Billing Issue", href: "/contact-us" },
      { label: "Invoice Download", href: "/faqs#ordering" },
    ],
  },
  {
    title: "Account & Profile",
    description: "Manage your account, password, and preferences",
    icon: <FiUser className="w-6 h-6" />,
    links: [
      { label: "Update Profile", href: "/user/my-account/profile" },
      { label: "Change Password", href: "/user/my-account/update-password" },
      { label: "Account FAQs", href: "/faqs#account" },
    ],
  },
  {
    title: "Products & Stock",
    description: "Product information, availability, and questions",
    icon: <FiHelpCircle className="w-6 h-6" />,
    links: [
      { label: "Product FAQs", href: "/faqs#products" },
      { label: "Ask a Question", href: "/contact-us" },
      { label: "Browse Products", href: "/product/search" },
    ],
  },
];

const CONTACT_OPTIONS = [
  {
    title: "Send a Message",
    description: "Fill out our support form and get a response within 24 hours.",
    icon: <FiMessageCircle className="w-5 h-5" />,
    href: "/contact-us",
    cta: "Contact Form",
  },
  {
    title: "Email Support",
    description: "Reach us directly at our support email.",
    icon: <FiMail className="w-5 h-5" />,
    href: "mailto:support@ecommerce.com",
    cta: "support@ecommerce.com",
  },
  {
    title: "Call Us",
    description: "Speak to a support agent Mon-Fri 9am-6pm EST.",
    icon: <FiPhoneCall className="w-5 h-5" />,
    href: "tel:+15551234567",
    cta: "+1 (555) 123-4567",
  },
];

const QUICK_LINKS = [
  { label: "FAQs", href: "/faqs", icon: <FiHelpCircle className="w-4 h-4" /> },
  { label: "Track Order", href: "/track-order", icon: <FiSearch className="w-4 h-4" /> },
  { label: "Privacy Policy", href: "/privacy-policy", icon: <FiShield className="w-4 h-4" /> },
  { label: "Terms & Conditions", href: "/terms-and-conditions", icon: <FiFileText className="w-4 h-4" /> },
];

const HelpCenter = () => {
  return (
    <Layout>
      <PageHeading title="Help Center" />

      <div className="bg-background text-foreground min-h-screen">
        <div className="max-w-screen-xl mx-auto lg:py-16 py-10 px-4 sm:px-10 space-y-16">
          {/* Hero */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-black font-serif tracking-tight">
              How can we help you?
            </h1>
            <p className="text-muted-foreground text-base">
              Browse our help topics below, check our FAQs, or contact our
              support team directly.
            </p>
          </div>

          {/* Help Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HELP_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.links.map((link) => (
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

          {/* Still Need Help */}
          <div className="border-t border-border pt-12 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold font-serif">
                Still need help?
              </h2>
              <p className="text-sm text-muted-foreground">
                Our support team is here for you — whether you&apos;re a guest
                or a registered customer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {CONTACT_OPTIONS.map((opt) => (
                <Link
                  key={opt.title}
                  href={opt.href}
                  className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {opt.icon}
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {opt.description}
                  </p>
                  <span className="text-xs font-semibold text-primary">
                    {opt.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {QUICK_LINKS.map((ql) => (
              <Link
                key={ql.label}
                href={ql.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground bg-muted/30 border border-border rounded-full hover:text-primary hover:border-primary/40 transition-colors"
              >
                {ql.icon}
                {ql.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
