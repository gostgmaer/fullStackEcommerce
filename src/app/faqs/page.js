import React from "react";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import FAQContent from "./FAQContent";

export const metadata = {
  title: "Frequently Asked Questions | E-Commerce",
  description: "Find answers to frequently asked questions about ordering, payments, shipping, delivery, returns, and refunds.",
};

const FAQs = () => {
  return (
    <Layout>
      <PageHeading title="Frequently Asked Questions" />
      <div className="bg-background min-h-screen">
        <FAQContent />
      </div>
    </Layout>
  );
};

export default FAQs;