import React from "react";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import TrackOrderContent from "./TrackOrderContent";

export const metadata = {
  title: "Track Your Order | E-Commerce",
  description: "Check the real-time shipping and delivery status of your order using your Order ID and email address.",
};

const TrackOrder = () => {
  return (
    <Layout>
      <PageHeading title="Track Order" />
      <div className="bg-background min-h-screen">
        <TrackOrderContent />
      </div>
    </Layout>
  );
};

export default TrackOrder;
