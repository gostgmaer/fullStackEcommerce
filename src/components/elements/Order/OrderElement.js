"use client"
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';
import { MdDelete, MdPrint, MdCheckCircle } from 'react-icons/md';
import OrderServices from '@/helper/network/services/OrderServices';
import { useSession } from 'next-auth/react';
import { notifySuccess } from '@/utils/notify/notice';
import { useRouter } from 'next/navigation';

function OrderElement({ order }) {
  const printRef = useRef();
  const { data: session } = useSession();
  const route = useRouter();

  const data = order?.results;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 flex items-center justify-center py-12 transition-colors duration-200">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Loading order details...</span>
        </div>
      </div>
    );
  }

  const cancelOrders = async (id) => {
    const response = await OrderServices.cancelOrder({ id: id }, {
      Authorization: `Bearer ${session["accessToken"]}`,
    });
    if (response.statusCode == "200") {
      notifySuccess(response?.message);
      setTimeout(() => {
        route.push('/user/my-account/my-orders');
      }, 3000);
    }
  };

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  const getStatusBadge = (statusVal) => {
    const normStatus = (statusVal || "").toLowerCase();
    let bg = "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-350 border-slate-200/50 dark:border-slate-750";
    if (["completed", "delivered", "payment-received", "success", "paid"].includes(normStatus)) {
      bg = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 border-emerald-150/40 dark:border-emerald-900/30";
    } else if (["pending", "processing", "shipped", "in-transit", "ready-for-pickup", "order-accepted", "awaiting-fulfillment"].includes(normStatus)) {
      bg = "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-450 border-amber-150/40 dark:border-amber-900/30";
    } else if (["canceled", "failed", "payment-failed", "order-declined"].includes(normStatus)) {
      bg = "bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-450 border-rose-150/40 dark:border-rose-900/30";
    }
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${bg} capitalize`}>
        {statusVal || "Pending"}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-8 lg:py-12 transition-colors duration-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10">
        
        {/* Success Alert Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-150/50 dark:border-emerald-900/30 rounded-2xl mb-8 px-6 py-4 flex items-center gap-4">
          <MdCheckCircle className="text-emerald-500 text-3xl flex-shrink-0 animate-bounce" />
          <div className="text-sm text-emerald-800 dark:text-emerald-400">
            <span className="font-extrabold text-base block mb-0.5">Order Received Successfully!</span>
            Thank you <span className="font-bold">{data.firstName} {data.lastName}</span>. Your order has been placed and is currently being processed.
          </div>
        </div>

        {/* Live Order Tracking Stepper */}
        <div className="bg-card border border-border/40 p-6 lg:p-8 rounded-2xl mb-8 shadow-sm transition-all duration-200">
          <h3 className="text-sm font-bold text-foreground mb-6 flex items-center justify-between uppercase tracking-wider">
            <span>Live Order Tracking</span>
            <span className="text-xs text-muted-foreground font-mono">Status: {data.status || "Pending"}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { label: "Order Placed", desc: "We have received your order", active: true },
              { label: "Processing", desc: "Preparing your items", active: ["processing", "shipped", "in-transit", "completed", "delivered", "payment-received", "success", "paid"].includes((data.status || "").toLowerCase()) },
              { label: "In Transit", desc: "On the way to you", active: ["shipped", "in-transit", "completed", "delivered"].includes((data.status || "").toLowerCase()) },
              { label: "Delivered", desc: "Package has arrived", active: ["completed", "delivered"].includes((data.status || "").toLowerCase()) }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex md:flex-col items-center gap-4 text-left md:text-center relative">
                {/* Stepper Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 z-10 transition-all duration-300 ${
                  step.active 
                    ? "bg-primary border-primary text-primary-foreground shadow" 
                    : "bg-muted border-border text-muted-foreground"
                }`}>
                  {idx + 1}
                </div>
                
                {/* Stepper Connection Line */}
                {idx < 3 && (
                  <div className={`hidden md:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-0.5 -z-0 transition-colors duration-300 ${
                    arr[idx+1].active ? "bg-primary" : "bg-border/60"
                  }`} />
                )}

                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${step.active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                  <span className="text-xs text-muted-foreground/80 mt-0.5 leading-relaxed">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Direct link CTA */}
          <div className="mt-6 pt-4 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
            <span>Tracking reference code: <strong className="font-mono text-foreground">{data.invoice || data._id?.substring(0, 8)}</strong></span>
            <Link
              href="/shipping-policy"
              className="text-primary font-semibold hover:underline"
            >
              View Shipping & Delivery FAQs
            </Link>
          </div>
        </div>

        {/* Invoice Printable Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden" ref={printRef}>
          
          {/* Invoice Header */}
          <div className="bg-slate-50/70 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-850 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-slate-100/70 dark:border-slate-850">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase mb-2">Invoice</h1>
                <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Order ID: <span className="text-slate-650 dark:text-slate-350">#{data._id}</span>
                </p>
              </div>
              <div className="text-left sm:text-right">
                <Link href="/" className="text-xl font-black text-primary hover:text-primary/90 transition-colors !no-underline mb-2 block">
                  Storefront
                </Link>
                <p className="text-xs text-slate-450 dark:text-slate-400 leading-relaxed">
                  Kazım Karabekir, No:5 Ümraniye,<br />İstanbul 34000
                </p>
              </div>
            </div>

            {/* Billing details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-sm">
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Date
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {dayjs(data.createdDate || data.createdAt).format('MMMM DD, YYYY')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Invoice No.
                </span>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                  #{data.invoice || data._id?.substring(0, 8)}
                </span>
              </div>
              <div className="flex flex-col sm:items-end sm:text-right">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Invoice To
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {data.firstName} {data.lastName}
                </span>
                <span className="text-xs text-slate-450 dark:text-slate-400 leading-relaxed mt-0.5">
                  {data.streetAddress},<br />
                  {data.city}, {data.country}, {data.zipPostal}
                </span>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="px-8 sm:px-10 py-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-455 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-850">
                  <th scope="col" className="px-4 py-3 rounded-l-lg">Sr.</th>
                  <th scope="col" className="px-4 py-3">Product Name</th>
                  <th scope="col" className="px-4 py-3 text-center">Quantity</th>
                  <th scope="col" className="px-4 py-3 text-center">Item Price</th>
                  <th scope="col" className="px-4 py-3 text-right rounded-r-lg">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-850">
                {data.items?.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/10">
                    <td className="px-4 py-4 font-medium text-slate-400 dark:text-slate-500">{index + 1}</td>
                    <td className="px-4 py-4 font-bold text-slate-800 dark:text-slate-200">
                      {item.product?.title || "Product Item"}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold">
                      {formatter.format(item.product?.price || 0)}
                    </td>
                    <td className="px-4 py-4 text-right font-extrabold text-slate-900 dark:text-white">
                      {formatter.format((item.product?.price || 0) * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Summary */}
          <div className="bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-850 p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm">
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Payment Method
                </span>
                <span className="font-bold text-slate-850 dark:text-slate-250 capitalize">
                  {data.payment_method || "COD"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Shipping Cost
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {data.shippingPrice ? formatter.format(data.shippingPrice) : "Free"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Discount
                </span>
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  {formatter.format(data.discount || 0)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Tax
                </span>
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  {formatter.format(data.taxAmount || 0)}
                </span>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Total Amount
                </span>
                <span className="text-2xl font-black text-primary">
                  {formatter.format(data.totalPrice || data.total || 0)}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
          <ReactToPrint
            trigger={() => (
              <button className="inline-flex items-center justify-center gap-2 text-sm font-bold h-11 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition-all active:scale-[0.98] shadow-sm cursor-pointer">
                <MdPrint className="text-lg" />
                <span>Print Invoice</span>
              </button>
            )}
            content={() => printRef.current}
          />
          
          <div className="flex items-center gap-4">
            {data.status?.toLowerCase() === 'pending' && (
              <button 
                onClick={() => cancelOrders(data._id)} 
                className="inline-flex items-center justify-center gap-2 text-sm font-bold h-11 px-6 bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 dark:hover:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl transition-all active:scale-[0.98] border border-rose-100 dark:border-rose-900/30 cursor-pointer"
              >
                <MdDelete className="text-lg" />
                <span>Cancel Order</span>
              </button>
            )}
            {data.status?.toLowerCase() === 'delivered' && (
              <button 
                onClick={() => {
                  notifySuccess("Return request initiated. Our support team will contact you shortly.");
                }} 
                className="inline-flex items-center justify-center gap-2 text-sm font-bold h-11 px-6 bg-amber-50 dark:bg-amber-950/20 hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl transition-all active:scale-[0.98] border border-amber-100 dark:border-amber-900/30 cursor-pointer"
              >
                <span>Request Return</span>
              </button>
            )}
            <Link
              href="/user/my-account/my-orders"
              className="inline-flex items-center justify-center text-sm font-bold h-11 px-6 bg-primary hover:bg-primary/95 text-white rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] !no-underline cursor-pointer"
            >
              Back to Orders
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderElement;
