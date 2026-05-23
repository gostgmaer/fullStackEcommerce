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
  // /////console.log("coupon  data", data);

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
            className="mx-auto my-4 flex flex-col md:flex-row justify-between items-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 gap-4"
          >
            <div className="flex items-center gap-4 flex-grow w-full md:w-auto">
              <figure className="relative w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-lg p-2 flex items-center justify-center border border-slate-100 dark:border-slate-800 flex-shrink-0">
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
                  <span className="text-lg font-extrabold text-primary">
                    {coupon?.discountType?.type === "fixed" ? (
                      <span>${coupon?.discountType?.value}</span>
                    ) : (
                      <span>{coupon?.discountPercentage}%</span>
                    )}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    Off
                  </span>
                  {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                    <span className="text-red-600 bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
                      Expired
                    </span>
                  ) : (
                    <span className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
                      Active
                    </span>
                  )}
                </div>
                <h2 className="font-sans text-sm text-slate-800 dark:text-slate-200 font-bold mb-2">
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
            <div className="w-full md:w-auto md:border-l md:border-dashed border-slate-200 dark:border-slate-700 md:pl-4 flex flex-col justify-center">
              <CopyToClipboard
                text={coupon.couponCode}
                onCopy={() => handleCopied(coupon.couponCode)}
              >
                <button className="w-full min-w-[120px] font-mono font-bold text-xs uppercase tracking-wider border border-dashed border-primary bg-primary/5 text-primary hover:bg-primary/10 transition-colors py-2 rounded-lg text-center block">
                  {copied && coupon.couponCode === copiedCode ? "Copied!" : coupon.couponCode}
                </button>
              </CopyToClipboard>
              <p className="text-[10px] font-medium text-slate-400 mt-2 text-center">
                * Min Order: <span className="font-bold text-slate-500">${coupon.minimumAmount}</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((coupon) => (
            <div
              key={coupon._id}
              className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 gap-5"
            >
              <div className="flex items-center gap-5 flex-grow w-full sm:w-auto">
                <figure className="relative w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-xl p-3 flex items-center justify-center border border-slate-100 dark:border-slate-800 flex-shrink-0">
                  <Image
                    src={coupon.logo}
                    alt={coupon.title}
                    width={80}
                    height={80}
                    className="object-contain rounded-md"
                  />
                </figure>
                <div className="flex-grow">
                  <h2 className="font-sans text-base text-slate-800 dark:text-slate-200 font-bold mb-1">
                    {coupon?.title}
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-xl font-extrabold text-primary">
                      {coupon?.discountType?.type === "fixed" ? (
                        <span>${coupon?.discountType?.value}</span>
                      ) : (
                        <span>{coupon?.discountType?.value}%</span>
                      )}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Off
                    </span>
                    {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                      <span className="text-red-600 bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
                        Expired
                      </span>
                    ) : (
                      <span className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
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
              <div className="w-full sm:w-auto sm:border-l sm:border-dashed border-slate-200 dark:border-slate-700 sm:pl-5 flex flex-col justify-center">
                <CopyToClipboard
                  text={coupon.couponCode}
                  onCopy={() => handleCopied(coupon.couponCode)}
                >
                  <button className="w-full min-w-[130px] font-mono font-bold text-xs uppercase tracking-wider border border-dashed border-primary bg-primary/5 text-primary hover:bg-primary/10 transition-colors py-2 rounded-lg text-center block">
                    {copied && coupon.couponCode === copiedCode ? "Copied!" : coupon.couponCode}
                  </button>
                </CopyToClipboard>
                <p className="text-[10px] font-medium text-slate-400 mt-2 text-center">
                  * Min Order: <span className="font-bold text-slate-500">${coupon.minimumAmount}</span>
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
