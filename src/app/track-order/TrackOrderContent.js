"use client";

import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { IoSearchOutline, IoMailOutline, IoCardOutline, IoLocationOutline, IoTimeOutline, IoChevronForwardOutline, IoWarningOutline } from "react-icons/io5";
import OrderServices from "@/helper/network/services/OrderServices";

// Mock data for demo purposes if users want to test the tracking UI with a mock order ID
const MOCK_ORDER = {
  _id: "DEMO-12345",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  streetAddress: "123 Maple Street",
  city: "San Francisco",
  country: "United States",
  zipPostal: "94102",
  payment_method: "Credit Card",
  total: 129.98,
  createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  status: "Shipped",
  items: [
    {
      product: {
        title: "Premium Wireless Noise-Cancelling Headphones",
        price: 99.99,
        image: "/product/headphones.jpg"
      },
      quantity: 1
    },
    {
      product: {
        title: "USB-C Fast Charging Cable (2m)",
        price: 29.99,
        image: "/product/cable.jpg"
      },
      quantity: 1
    }
  ]
};

export default function TrackOrderContent() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!orderId.trim() || !email.trim()) {
      setError("Please enter both Order ID and Email Address.");
      return;
    }

    setLoading(true);
    setError("");
    setOrderData(null);

    // Support demo order tracking fallback for testing/QA
    if (orderId.trim().toUpperCase() === "DEMO-12345" && email.trim().toLowerCase() === "jane.doe@example.com") {
      setTimeout(() => {
        setOrderData(MOCK_ORDER);
        setLoading(false);
      }, 800);
      return;
    }

    try {
      // Attempt to load order using guest call
      const response = await OrderServices.getOrderById({ id: orderId.trim() });
      
      if (response && response.error) {
        // Fallback for local development or if backend is offline/requires auth
        setError(`Unable to retrieve order: ${response.error}. Note: Try using the Demo Order below to test the tracking visual interface.`);
      } else if (response && response.results) {
        const order = response.results;
        
        // Safety check to ensure guest matches order email
        const orderEmail = order.email || order.userEmail || order.billingEmail || "";
        if (orderEmail.toLowerCase().trim() !== email.toLowerCase().trim()) {
          setError("Order ID found, but the email address does not match our records. Please verify your details.");
        } else {
          setOrderData(order);
        }
      } else {
        setError("Order not found. Please verify your Order ID and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred while fetching order details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadDemo = () => {
    setOrderId("DEMO-12345");
    setEmail("jane.doe@example.com");
    setOrderData(MOCK_ORDER);
    setError("");
  };

  // Helper to determine status order & timeline steps
  const getTimelineSteps = (status = "pending") => {
    const currentStatus = status.toLowerCase();
    
    // Steps: Placed, Paid, Processing, Shipped, Delivered
    const steps = [
      { key: "placed", label: "Order Placed", desc: "Your order has been recorded in our system." },
      { key: "paid", label: "Payment Confirmed", desc: "Payment successfully verified." },
      { key: "processing", label: "Processing", desc: "We are packing your items with care." },
      { key: "shipped", label: "Shipped", desc: "Your package is on its way to you." },
      { key: "delivered", label: "Delivered", desc: "Package has been handed over safely." }
    ];

    let activeIndex = 0;
    if (["paid", "payment-received", "success"].includes(currentStatus)) activeIndex = 1;
    if (["processing", "awaiting-fulfillment", "order-accepted"].includes(currentStatus)) activeIndex = 2;
    if (["shipped", "in-transit"].includes(currentStatus)) activeIndex = 3;
    if (["delivered", "completed"].includes(currentStatus)) activeIndex = 4;
    if (["canceled", "failed"].includes(currentStatus)) activeIndex = -1; // Canceled state

    return { steps, activeIndex };
  };

  const { steps, activeIndex } = orderData ? getTimelineSteps(orderData.status) : { steps: [], activeIndex: 0 };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:py-16 py-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          Tracking Portal
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mb-4">
          Track Your Order
        </h3>
        <p className="text-muted-foreground">
          Enter your Order ID and billing email to view real-time shipping progress, order details, and receipt.
        </p>
      </div>

      {!orderData ? (
        <div className="max-w-md mx-auto">
          {/* Tracking Form Card */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Order ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 64a8bfb..."
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono text-sm"
                  />
                  <IoCardOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="e.g. yourname@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  />
                  <IoMailOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-lg flex items-start gap-3 text-sm">
                  <IoWarningOutline className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    <span>Locating Order...</span>
                  </>
                ) : (
                  <>
                    <IoSearchOutline className="w-5 h-5" />
                    <span>Track Order</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Test Demonstration helper */}
          <div className="text-center mt-6 p-4 bg-muted/30 border border-border rounded-xl">
            <p className="text-xs text-muted-foreground">
              Want to see the shipping timeline visual interface right away?
            </p>
            <button
              onClick={loadDemo}
              className="text-xs text-primary font-bold hover:underline mt-1.5 focus:outline-none"
            >
              Click here to load Demo Order (ID: DEMO-12345)
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Order Header Summary */}
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                Order Tracking
              </p>
              <h4 className="text-lg font-bold font-mono text-foreground mt-1">
                Order #{orderData._id}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Placed on {dayjs(orderData.createdAt).format("MMMM DD, YYYY [at] h:mm A")}
              </p>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="text-xs text-muted-foreground">Status</span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mt-1 capitalize ${
                  orderData.status?.toLowerCase() === "canceled"
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    : orderData.status?.toLowerCase() === "delivered" || orderData.status?.toLowerCase() === "completed"
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                }`}
              >
                {orderData.status || "Pending"}
              </span>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h4 className="text-md font-bold text-foreground mb-8">Shipping Timeline</h4>
            
            {activeIndex === -1 ? (
              // Canceled State display
              <div className="p-6 bg-rose-500/5 border border-rose-500/20 text-rose-500 rounded-xl flex items-center gap-4">
                <IoWarningOutline className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h5 className="font-bold">This order was cancelled</h5>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    If this is a mistake or you have billing/refund questions, please contact customer service.
                  </p>
                </div>
              </div>
            ) : (
              // Active timeline
              <div className="relative">
                {/* Connecting Line (desktop horizontal, mobile vertical) */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border md:left-8 md:right-8 md:top-6 md:bottom-auto md:w-auto md:h-0.5 -z-0">
                  <div
                    className="bg-primary h-full md:h-full transition-all duration-500 ease-out"
                    style={{
                      height: typeof window !== "undefined" && window.innerWidth < 768 ? `${(activeIndex / (steps.length - 1)) * 100}%` : "100%",
                      width: typeof window !== "undefined" && window.innerWidth >= 768 ? `${(activeIndex / (steps.length - 1)) * 100}%` : "100%"
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                  {steps.map((step, idx) => {
                    const isCompleted = idx <= activeIndex;
                    const isCurrent = idx === activeIndex;

                    return (
                      <div
                        key={step.key}
                        className="flex md:flex-col items-start md:items-center text-left md:text-center md:flex-1 group"
                      >
                        {/* Timeline Node Icon */}
                        <div
                          className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isCompleted
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-card border-border text-muted-foreground"
                          } ${isCurrent ? "ring-4 ring-primary/20 animate-pulse" : ""}`}
                        >
                          <span className="text-xs md:text-sm font-bold">{idx + 1}</span>
                        </div>

                        {/* Text labels */}
                        <div className="ml-4 md:ml-0 md:mt-4">
                          <h5
                            className={`font-semibold text-sm ${
                              isCompleted ? "text-foreground font-bold" : "text-muted-foreground"
                            }`}
                          >
                            {step.label}
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1 max-w-[150px] md:mx-auto">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Details columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Delivery address & details */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-6">
              <h4 className="text-md font-bold text-foreground border-b border-border pb-3 flex items-center gap-2">
                <IoLocationOutline className="w-5 h-5 text-primary" />
                Delivery Information
              </h4>
              <div className="text-sm space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Recipient:</span>
                  <span className="font-semibold text-foreground">
                    {orderData.firstName} {orderData.lastName}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Shipping Address:</span>
                  <span className="font-semibold text-foreground text-right">
                    {orderData.streetAddress},<br />
                    {orderData.city}, {orderData.country}, {orderData.zipPostal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span className="font-semibold text-foreground capitalize">
                    {orderData.payment_method || "Cash On Delivery"}
                  </span>
                </div>
              </div>
            </div>

            {/* Support box & action buttons */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-md font-bold text-foreground border-b border-border pb-3 flex items-center gap-2">
                  <IoTimeOutline className="w-5 h-5 text-primary" />
                  Need Help With Your Shipment?
                </h4>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  For issues such as incorrect shipping addresses, delayed delivery dates, or requests for returns/exchanges, please write to our support staff. Remember to state your Order ID.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => {
                    setOrderData(null);
                    setOrderId("");
                  }}
                  className="flex-1 py-3 text-sm font-semibold border border-border bg-background text-foreground rounded-lg hover:bg-muted transition-colors text-center"
                >
                  Track Another Order
                </button>
                <Link
                  href="/contact-us"
                  className="flex-1 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5"
                >
                  Contact Support
                  <IoChevronForwardOutline className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Purchased Items List */}
          <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h4 className="text-md font-bold text-foreground">Items in Shipment</h4>
            </div>
            <div className="divide-y divide-border">
              {orderData.items?.map((item, idx) => (
                <div key={idx} className="p-6 flex items-center justify-between gap-6 hover:bg-muted/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center font-bold text-xs text-muted-foreground">
                      Pkg
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-foreground leading-tight">
                        {item.product?.title || "Product Item"}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Qty: {item.quantity} × {formatter.format(item.product?.price || 0)}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-foreground">
                    {formatter.format((item.product?.price || 0) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-muted/20 p-6 flex justify-between items-center border-t border-border">
              <span className="font-semibold text-sm text-muted-foreground">Total Paid:</span>
              <span className="text-xl font-black text-primary">
                {formatter.format(orderData.total || 0)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
