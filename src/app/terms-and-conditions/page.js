import React from "react";
import Link from "next/link";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";

export const metadata = {
  title: "Terms & Conditions | E-Commerce",
  description: "Read the terms and conditions governing the use of our website and purchase of products.",
};

const SECTIONS = [
  {
    id: "agreement",
    title: "1. Introduction & Agreement",
    content: (
      <>
        <p className="mb-4">
          Welcome to our E-Commerce platform. These Terms & Conditions outline the rules, regulations, and guidelines for using our website and services. By accessing or using this website, you agree to comply with and be bound by these terms in full.
        </p>
        <p>
          If you disagree with any part of these terms, please do not use our website. We reserve the right to modify, amend, or update these terms at any time without prior notice. It is your responsibility to review this page periodically for updates.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "2. Intellectual Property Rights",
    content: (
      <>
        <p className="mb-4">
          Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms.
        </p>
        <p className="font-semibold mb-2">You must not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republish material from this website without explicit written consent.</li>
          <li>Sell, rent, or sub-license material from the website.</li>
          <li>Reproduce, duplicate, copy, or redistribute content for commercial purposes.</li>
        </ul>
      </>
    )
  },
  {
    id: "user-accounts",
    title: "3. User Account Responsibilities",
    content: (
      <>
        <p className="mb-4">
          If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials (username and password) and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.
        </p>
        <p>
          We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion if we suspect fraudulent activity, breach of terms, or security threats.
        </p>
      </>
    )
  },
  {
    id: "pricing-availability",
    title: "4. Product Pricing & Availability",
    content: (
      <>
        <p className="mb-4">
          All prices on our website are subject to change without notice. We make every effort to display accurate pricing, product descriptions, and availability. However, errors may occur. In the event of a pricing or description error, we reserve the right to cancel any orders placed for the incorrect item, even if the order has been confirmed and payment processed.
        </p>
        <p>
          Product availability is not guaranteed. If a product goes out of stock after your order is placed, we will notify you immediately and issue a full refund to your original payment method.
        </p>
      </>
    )
  },
  {
    id: "prohibited-uses",
    title: "5. Prohibited Uses of the Platform",
    content: (
      <>
        <p className="mb-4">
          In addition to other prohibitions set forth in these terms, you are prohibited from using the site or its content:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>For any unlawful purpose or to solicit others to perform unlawful acts.</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, or laws.</li>
          <li>To infringe upon or violate our intellectual property rights or those of others.</li>
          <li>To submit false, misleading, or malicious information.</li>
          <li>To upload or transmit viruses, malware, or any other type of malicious code.</li>
        </ul>
      </>
    )
  },
  {
    id: "limitation-liability",
    title: "6. Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, in no event shall we, our directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your access to or use of, or inability to access or use, the website.</li>
          <li>Any conduct or content of any third party on the website.</li>
          <li>Any content obtained from the website.</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
      </>
    )
  },
  {
    id: "governing-law",
    title: "7. Governing Law & Jurisdiction",
    content: (
      <>
        <p>
          These Terms & Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the jurisdiction in which our business is registered, without regard to its conflict of law provisions.
        </p>
      </>
    )
  },
  {
    id: "contact-info",
    title: "8. Contact Information",
    content: (
      <>
        <p>
          If you have any questions or concerns regarding these Terms & Conditions, please contact us via our{" "}
          <Link href="/contact-us" className="text-primary hover:underline font-semibold">
            Contact Us page
          </Link>{" "}
          or by emailing us directly at{" "}
          <a href="mailto:legal@ecommerce.com" className="text-primary hover:underline font-semibold">
            legal@ecommerce.com
          </a>
          .
        </p>
      </>
    )
  }
];

const TermsAndConditions = () => {
  return (
    <Layout>
      <PageHeading title="Terms & Conditions" />
      <div className="bg-background text-foreground min-h-screen">
        <div className="max-w-screen-xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar navigation */}
            <aside className="lg:w-1/4 lg:sticky lg:top-24 h-fit bg-card border border-border p-6 rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Table of Contents
              </h4>
              <nav className="flex flex-col space-y-2.5">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
                <p>Last updated: May 24, 2026</p>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:w-3/4 space-y-12">
              {SECTIONS.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-28">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 border-b border-border pb-2">
                    {sec.title}
                  </h3>
                  <div className="text-muted-foreground leading-relaxed text-sm sm:text-base space-y-4">
                    {sec.content}
                  </div>
                </section>
              ))}
            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;