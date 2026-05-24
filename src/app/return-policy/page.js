import React from "react";
import Link from "next/link";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";

export const metadata = {
  title: "Return & Refund Policy | E-Commerce",
  description: "Read our 30-day return, exchange, and refund policy, as well as our order cancellation guidelines.",
};

const ReturnPolicy = () => {
  return (
    <Layout>
      <PageHeading title="Return & Refund Policy" />
      <div className="bg-background text-foreground min-h-screen py-10 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 space-y-12">
          
          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              1. 30-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We want you to love your purchase. If you are not completely satisfied with your item, you may return it for a refund or exchange within <strong className="text-foreground">30 days</strong> of the delivery date. No questions asked.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              2. Return Eligibility & Conditions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be eligible for a return, your item must meet the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Items must be unworn, unused, unwashed, and in the same condition that you received them.</li>
              <li>Items must be in their original packaging with all labels, product tags, and security seals intact.</li>
              <li>Proof of purchase (invoice or order confirmation email) must be provided.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to deny a return if the item shows signs of wear, damage, or alterations.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              3. How to Initiate a Return
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Returning an item is quick and easy. Follow these steps:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-foreground mb-2">Registered Users</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Log in to your account, go to <Link href="/user/my-account/my-orders" className="text-primary hover:underline font-medium">My Orders</Link>, select the order containing the item, and click the "Return Items" button.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-foreground mb-2">Guest Checkout</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you checked out as a guest, please visit our <Link href="/contact-us" className="text-primary hover:underline font-medium">Contact Us</Link> page, provide your Order ID, email address, and reason for return.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              4. Return Shipping Costs
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are returning an item due to a mistake on our part (e.g., incorrect item, damaged/defective product), we will provide a prepaid return shipping label at no cost to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For standard returns (change of mind, size preference, style fits differently), you will be responsible for the cost of return shipping. We recommend using a trackable shipping service, as we cannot guarantee receipt of returned items.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              5. Refund Timeline & Processing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Once your return is received at our warehouse and inspected (usually within 3-5 business days of receipt), we will send you an email to notify you that we have received your returned item and whether the refund has been approved or rejected.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If approved, your refund will be processed immediately, and a credit will automatically be applied to your credit card or original payment method. Depending on your financial institution, refunds can take <strong className="text-foreground">5 to 10 business days</strong> to reflect in your account.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              6. Exchanges
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The fastest way to ensure you get the exact item you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item. If you prefer to wait for a direct exchange, please contact our support team.
            </p>
          </section>

          <section className="space-y-4 bg-muted/20 p-6 rounded-2xl border border-border">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-3">
              7. Order Cancellation Policy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We process orders quickly to ensure fast delivery. You can cancel your order within <strong className="text-foreground">1 hour</strong> of placement by contact support or from your account dashboard.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              If the order has already been processed or shipped (usually after 1 hour), we are unable to cancel it. In this case, you must wait for the shipment to arrive and then initiate a return request following our standard policy.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif border-l-4 border-primary pl-3 text-foreground">
              8. Non-Returnable Items
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The following products are strictly non-returnable and non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Gift cards / digital vouchers.</li>
              <li>Downloadable software products.</li>
              <li>Personal care, hygiene, and intimate apparel items (for health reasons).</li>
              <li>Products marked as "Final Sale" or "Clearance" at checkout.</li>
            </ul>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
