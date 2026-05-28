import React from "react";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import Coupon from "@/components/elements/coupon/Coupon";
import ProductCard from "@/components/elements/product/ProductCard";
import ProductServices from "@/helper/network/services/ProductServices";
import AttributeServices from "@/helper/network/services/AttributeServices";
import OfferTimerWrapper from "./OfferTimerWrapper";

export const metadata = {
  title: "Special Offers & Coupons | E-Commerce",
  description: "Save big with our latest promo codes, flash sale coupons, and exclusive discounts on top-rated products.",
};

const Offer = async () => {
  // Fetch discounted products
  let discountProductsList = [];
  let attributes = [];
  try {
    const [response, attrs] = await Promise.all([
      ProductServices.getDiscountedProducts(),
      AttributeServices.getShowingAttributes(),
    ]);
    discountProductsList = response?.results || [];
    attributes = attrs || [];
  } catch (error) {
    console.error("Failed to fetch discounted products:", error);
  }

  return (
    <Layout>
      <PageHeading title="Mega Offers & Coupons" />
      <div className="bg-background text-foreground min-h-screen">
        <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-16 sm:px-10 space-y-16">
          
          {/* Flash Sale Banner with Timer */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-700 text-white p-8 md:p-12 shadow-md">
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-60 hidden md:block"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4 text-center md:text-left max-w-xl">
                <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-200">
                  Limited Time Deal
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight">
                  Flash Sale: Save up to 50% Off!
                </h3>
                <p className="text-sm text-indigo-100 leading-relaxed">
                  Unlock premium discounts across our entire technology catalog. Apply any of the active coupons below at checkout for additional savings.
                </p>
              </div>

              {/* Ticking Timer */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-inner text-center">
                <p className="text-xs uppercase tracking-widest font-semibold text-indigo-200 mb-3">
                  Offer Ends In
                </p>
                <OfferTimerWrapper />
              </div>
            </div>
          </div>

          {/* Active Coupons Grid */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <h3 className="text-2xl font-bold font-serif text-foreground">
                Active Discount Coupons
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Copy code and paste it on the checkout page to activate discount.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <Coupon couponInHome={false} />
            </div>
          </div>

          {/* Discounted Products Section */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <h3 className="text-2xl font-bold font-serif text-foreground">
                Featured Sale Items
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Grab these special discounted deals before stock runs out!
              </p>
            </div>

            {discountProductsList.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-4">
                {discountProductsList.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    attributes={attributes}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card border border-border rounded-2xl">
                <p className="text-muted-foreground font-medium">No discounted products found.</p>
                <p className="text-xs text-muted-foreground mt-1">Check back later for new promotional items!</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Offer;
