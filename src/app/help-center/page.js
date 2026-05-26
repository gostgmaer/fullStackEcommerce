import React from "react";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import HelpCenterContent from "./HelpCenterContent";

export const metadata = {
  title: "Help Center | E-Commerce",
  description:
    "Find answers to common questions about orders, shipping, returns, payments, and more.",
};

const HelpCenter = () => {
  return (
    <Layout>
      <PageHeading title="Help Center" />
      <HelpCenterContent />
    </Layout>
  );
};

export default HelpCenter;
