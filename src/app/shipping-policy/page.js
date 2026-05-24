import React from "react";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";

export const metadata = {
  title: "Shipping & Delivery Policy | E-Commerce",
  description: "Learn about our shipping rates, estimated delivery times, tracking information, and international delivery options.",
};

const ShippingPolicy = () => {
  return (
    <Layout>
      <PageHeading title="Shipping & Delivery Policy" />
      <div className="bg-background text-foreground min-h-screen py-10 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 space-y-12">
          
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              1. Shipping Rates & Estimates
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We offer free standard shipping on all domestic orders over <strong className="text-foreground">$50.00</strong>. For orders below this threshold, a flat standard shipping fee of <strong className="text-foreground">$4.99</strong> will apply. Shipping charges for your order will be calculated and displayed clearly at checkout.
            </p>
            <div className="overflow-x-auto mt-6 rounded-xl border border-border bg-card">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Shipping Option</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estimated Delivery</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm text-muted-foreground">
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Standard (Domestic)</td>
                    <td className="px-6 py-4">3 - 5 business days</td>
                    <td className="px-6 py-4">Free (over $50) / $4.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Express (Domestic)</td>
                    <td className="px-6 py-4">1 - 2 business days</td>
                    <td className="px-6 py-4">$12.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Standard (International)</td>
                    <td className="px-6 py-4">7 - 14 business days</td>
                    <td className="px-6 py-4">Calculated at checkout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              2. Order Processing Times
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please note that during periods of high demand, such as product launches or holiday seasons, processing times may be extended. We appreciate your patience and understanding.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              3. Shipment Tracking
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow up to 24 hours for the tracking information to become active in the carrier&apos;s system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can also track your order directly on our website by visiting our <strong>Track Order</strong> page and entering your unique Order ID and email address.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              4. Customs, Duties & Taxes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our e-commerce store is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.). Please check your local customs regulations for more details.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              5. Shipping Restrictions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We ship to physical street addresses, PO Boxes, and military addresses (APO/FPO/DPO) worldwide. However, some items (such as aerosols, products containing lithium batteries, or oversized packages) may be subject to carrier restrictions or shipping regulations and cannot be shipped to PO Boxes or specific regions. If a restriction applies to your order, our customer support team will contact you.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              6. Damages & Lost Packages
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you receive your order damaged, or if it is lost in transit, please save all packaging materials and damaged goods, and contact our support team immediately. We will initiate a claim with the shipping carrier on your behalf and arrange for a replacement or refund as soon as possible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please inspect your package upon arrival and report any issues within 48 hours of delivery to ensure a smooth claim process.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
