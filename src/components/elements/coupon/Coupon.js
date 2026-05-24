"use client"
import React, { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { CouponData } from "@/assets/fakeData/coupon";
import OfferTimer from "./OfferTimer";
import dynamic from "next/dynamic";


const Coupon = ({ couponInHome }) => {

  const [copiedCode, setCopiedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const error= false

  const data = CouponData
  // const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  // const currency = globalSetting?.default_currency || "$";

  const handleCopied = (code) => {
    setCopiedCode(code);
    setCopied(true);
  };

  return (
    <>
      {couponInHome ? (
        data?.slice(0, 2).map((coupon) => (
          <div
            key={coupon._id}
            className="mx-auto my-4 flex flex-col md:flex-row justify-between items-center bg-card border border-border/40 rounded-2xl shadow-sm hover:shadow-premium-hover transition-all duration-300 p-5 gap-5 relative overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-primary/50"></div>
            <div className="flex items-center gap-5 flex-grow w-full md:w-auto">
              <figure className="relative w-16 h-16 bg-muted/20 rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                <Image
                  src={coupon.logo}
                  alt={coupon.title}
                  width={60}
                  height={60}
                  className="object-contain rounded"
                />
              </figure>
              <div className="flex-grow">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xl font-black text-primary">
                    {coupon?.discountType?.type === "fixed" ? (
                      <span>₹{coupon?.discountType?.value}</span>
                    ) : (
                      <span>{coupon?.discountPercentage}%</span>
                    )}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Off
                  </span>
                  {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                    <span className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                      Expired
                    </span>
                  ) : (
                    <span className="text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                      Active
                    </span>
                  )}
                </div>
                <h2 className="font-sans text-sm text-foreground font-bold mb-2">
                  {coupon?.title}
                </h2>
                {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                  <div className="flex items-center gap-1 font-sans text-xs text-red-500 font-semibold">
                    Expired
                  </div>
                ) : (
                  <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
                )}
              </div>
            </div>
            <div className="w-full md:w-auto md:border-l md:border-dashed border-border/60 md:pl-6 flex flex-col justify-center">
              <CopyToClipboard
                text={coupon.couponCode}
                onCopy={() => handleCopied(coupon.couponCode)}
              >
                <button className="w-full min-w-[130px] font-mono font-bold text-xs uppercase tracking-wider border-2 border-dashed border-primary/50 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary transition-colors py-2.5 rounded-xl text-center block active:scale-[0.98]">
                  {copied && coupon.couponCode === copiedCode ? "Copied!" : coupon.couponCode}
                </button>
              </CopyToClipboard>
              <p className="text-[10px] font-medium text-muted-foreground mt-2 text-center">
                * Min Order: <span className="font-bold text-foreground">₹{coupon.minimumAmount}</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((coupon) => (
            <div
              key={coupon._id}
              className="flex flex-col sm:flex-row justify-between items-center card-base hover:shadow-premium-hover transition-all duration-300 p-6 gap-6 relative overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-primary/60"></div>
              <div className="flex items-center gap-6 flex-grow w-full sm:w-auto">
                <figure className="relative w-20 h-20 bg-muted/20 rounded-2xl p-3 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={coupon.logo}
                    alt={coupon.title}
                    width={80}
                    height={80}
                    className="object-contain rounded-md drop-shadow-sm"
                  />
                </figure>
                <div className="flex-grow">
                  <h2 className="font-sans text-base text-foreground font-bold mb-1.5">
                    {coupon?.title}
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <span className="text-2xl font-black text-primary">
                      {coupon?.discountType?.type === "fixed" ? (
                        <span>₹{coupon?.discountType?.value}</span>
                      ) : (
                        <span>{coupon?.discountType?.value}%</span>
                      )}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Off
                    </span>
                    {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                      <span className="text-red-500 bg-red-500/10 px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                        Expired
                      </span>
                    ) : (
                      <span className="text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                  {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                    <div className="text-xs text-red-500 font-semibold">Expired</div>
                  ) : (
                    <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
                  )}
                </div>
              </div>
              <div className="w-full sm:w-auto sm:border-l-2 sm:border-dashed border-border/60 sm:pl-6 flex flex-col justify-center">
                <CopyToClipboard
                  text={coupon.couponCode}
                  onCopy={() => handleCopied(coupon.couponCode)}
                >
                  <button className="w-full min-w-[140px] font-mono font-black text-sm uppercase tracking-wider border-2 border-dashed border-primary/50 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary transition-colors py-3 rounded-xl text-center block active:scale-[0.98]">
                    {copied && coupon.couponCode === copiedCode ? "Copied!" : coupon.couponCode}
                  </button>
                </CopyToClipboard>
                <p className="text-[10px] font-medium text-slate-400 mt-2 text-center">
                  * Min Order: <span className="font-bold text-slate-500">₹{coupon.minimumAmount}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}


  
    </>
  );
};

// export default Coupon;

export default dynamic(() => Promise.resolve(Coupon), { ssr: false });
