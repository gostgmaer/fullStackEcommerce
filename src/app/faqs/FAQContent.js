"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { IoSearchOutline, IoChevronDownOutline, IoChevronUpOutline, IoHelpCircleOutline, IoMailOutline, IoChatbubblesOutline } from "react-icons/io5";

const FAQ_DATA = [
  {
    category: "Ordering & Payment",
    items: [
      {
        question: "How do I place an order?",
        answer: "To place an order, browse our online catalog, select your items (along with preferred variants like size or color), and click 'Add to Cart'. Once you are done shopping, click the cart icon in the top right, proceed to checkout, enter your shipping/billing details, and complete your payment."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and secure local payment gateways. All transactions are encrypted and processed securely."
      },
      {
        question: "Can I change or cancel my order after placing it?",
        answer: "Orders can be modified or cancelled within 1 hour of placement. Once an order has been sent to our warehouse for processing and shipping, it cannot be modified or cancelled. Please contact our support team immediately or use our tracking portal for assistance."
      },
      {
        question: "Will I receive an order confirmation email?",
        answer: "Yes, immediately after placing your order, you will receive an order confirmation email detailing your purchased items, order number, and billing/shipping information. If you do not receive it within 10 minutes, please check your spam folder."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        question: "How much does shipping cost?",
        answer: "Standard shipping is free for all orders over $50. For orders under $50, standard shipping is a flat fee of $4.99. Express shipping options are available at checkout starting at $12.99 depending on your delivery location."
      },
      {
        question: "How long will standard delivery take?",
        answer: "Standard shipping typically takes 3-5 business days for domestic deliveries, and 7-14 business days for international orders. Please note that delivery times may vary slightly during holiday seasons or due to custom clearances."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 100 countries worldwide. International shipping charges, customs duties, and taxes are calculated during the checkout process based on your destination country."
      },
      {
        question: "How can I track my shipment?",
        answer: "Once your package leaves our warehouse, we will email you a tracking link. You can also visit our Track Order page and enter your Order ID and email address to view real-time shipping updates."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. If you are not entirely satisfied with your purchase, you can return items within 30 days of delivery. Items must be in their original packaging, unworn, unused, and with tags attached."
      },
      {
        question: "How do I initiate a return?",
        answer: "You can initiate a return by logging into your account, navigating to 'My Orders', selecting the respective order, and clicking 'Return Items'. If you ordered as a guest, please visit our Return Policy page to submit a return request using your Order ID."
      },
      {
        question: "When will I receive my refund?",
        answer: "Refunds are processed within 3-5 business days after our fulfillment center receives and inspects your returned package. Once approved, the refund will be credited back to your original payment method. Depending on your bank, it may take 5-10 business days for the credit to appear."
      },
      {
        question: "Can I exchange an item for a different size?",
        answer: "Yes! The easiest way to get a different size or color is to return the original item for a refund and place a new order for the desired item. This ensures your replacement item does not sell out in the meantime."
      }
    ]
  },
  {
    category: "Account & Profile",
    items: [
      {
        question: "How do I reset my password?",
        answer: "To reset your password, go to the Login page, click the 'Forgot Password?' link, enter your registered email address, and click submit. You will receive an email containing a secure link to create a new password."
      },
      {
        question: "Do I need to create an account to buy?",
        answer: "No, you can check out as a guest. However, creating an account allows you to save shipping addresses, track your order history, manage a wishlist, and enjoy a faster checkout experience on future visits."
      },
      {
        question: "Can I change my registered email address?",
        answer: "Yes, you can update your email address, phone number, and password by logging into your account dashboard, navigating to the 'Profile' tab, and editing your personal information."
      }
    ]
  },
  {
    category: "Products & Availability",
    items: [
      {
        question: "Are out-of-stock items restocked?",
        answer: "Many of our popular products are restocked within 2-3 weeks. You can sign up on the product's detail page to receive an automated email notification as soon as the item is available again."
      },
      {
        question: "Where can I find the size chart?",
        answer: "Each apparel product page has a dedicated 'Size Guide' button located near the size options. This guide lists exact measurements in both inches and centimeters to help you select the ideal fit."
      },
      {
        question: "Do you offer wholesale purchasing?",
        answer: "Yes, we offer bulk pricing and wholesale options for businesses. Please reach out to our team via the form on the Contact Us page with your company details and product requirements."
      }
    ]
  }
];

export default function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null); // format: "categoryName-itemIndex"

  // Filter FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.map((cat) => {
      // If we filtered by category and this isn't it, skip items
      if (activeCategory !== "All" && cat.category !== activeCategory) {
        return { ...cat, items: [] };
      }

      // Filter items by search query
      const query = searchQuery.toLowerCase().trim();
      if (!query) return cat;

      const matchedItems = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );

      return { ...cat, items: matchedItems };
    }).filter((cat) => cat.items.length > 0);
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (catName, idx) => {
    const key = `${catName}-${idx}`;
    if (openIndex === key) {
      setOpenIndex(null);
    } else {
      setOpenIndex(key);
    }
  };

  const categories = ["All", ...FAQ_DATA.map((c) => c.category)];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:py-16 py-8">
      {/* Search Header */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          Help Center
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-muted-foreground mb-8">
          Find answers to common questions about shipping, returns, payment methods, and account settings.
        </p>

        {/* Live Search Input */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null); // Close active accordion on search change
            }}
            className="w-full pl-12 pr-4 py-3 border border-border bg-card text-foreground rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-border">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs List */}
      <div className="max-w-3xl mx-auto space-y-10 min-h-[300px]">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((catSection) => (
            <div key={catSection.category} className="space-y-4">
              <h4 className="text-lg font-bold font-serif text-foreground border-l-4 border-primary pl-3 mb-4">
                {catSection.category}
              </h4>
              <div className="space-y-3">
                {catSection.items.map((item, idx) => {
                  const itemKey = `${catSection.category}-${idx}`;
                  const isOpen = openIndex === itemKey;

                  return (
                    <div
                      key={item.question}
                      className="border border-border bg-card rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow"
                    >
                      <button
                        onClick={() => toggleAccordion(catSection.category, idx)}
                        className="flex justify-between items-center w-full p-5 text-left font-medium text-foreground hover:bg-muted/30 transition-colors focus:outline-none"
                      >
                        <span className="pr-4">{item.question}</span>
                        {isOpen ? (
                          <IoChevronUpOutline className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <IoChevronDownOutline className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] border-t border-border opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-5 text-sm leading-relaxed text-muted-foreground bg-muted/10">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <IoHelpCircleOutline className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">No matching questions found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try searching with different keywords or browse our categories.
            </p>
          </div>
        )}
      </div>

      {/* Support CTA Box */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2">Still need help?</h4>
          <p className="text-sm text-muted-foreground max-w-md">
            If you didn&apos;t find the answers to your questions, please don&apos;t hesitate to reach out. Our customer support team is ready to assist you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link
            href="/contact-us"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <IoChatbubblesOutline className="w-4 h-4" />
            Contact Support
          </Link>
          <a
            href="mailto:support@ecommerce.com"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-border bg-background text-foreground rounded-lg hover:bg-muted transition-colors whitespace-nowrap"
          >
            <IoMailOutline className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
