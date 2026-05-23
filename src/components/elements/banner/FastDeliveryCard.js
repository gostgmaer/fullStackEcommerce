import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeliveBoy from "../../../assets/img/delivery-boy.png";

function FastDeliveryCard() {
  return (
    <div className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm lg:px-10 lg:py-6 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="lg:w-3/5 text-center lg:text-left">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase block mb-1">
            Organic Products and Food
          </span>
          <h2 className="text-xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            Quick Delivery to <span className="text-primary font-extrabold">Your Home</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300 font-medium">
            There are many products you will find in our shop. Choose your
            daily necessary products from our storefront and get special offers.
            See our latest discounted products and get a special discount.
          </p>
          <Link
            className="inline-flex items-center justify-center text-sm font-semibold mt-6 px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline"
            href="/#downloadApp"
          >
            Download App
          </Link>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            <Image
              src={DeliveBoy}
              alt="App download and quick delivery illustration"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 192px, 224px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastDeliveryCard;
