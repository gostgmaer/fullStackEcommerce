"use client";

import { applyDiscount } from "@/helper/functions";

const Discount = ({ discount = 1, product, slug, modal }) => {
  const discountVal = product?.prices ? applyDiscount(product.prices.originalPrice, product.prices.discount) : 0;

  if (discountVal <= 0) return null;

  return (
    <span
      className={`font-sans text-[10px] sm:text-xs font-bold bg-primary text-white py-1 px-2.5 rounded-md z-10 shadow-sm leading-none ${
        modal
          ? "absolute right-3 bottom-3"
          : slug
          ? "text-sm bg-primary text-white py-1 px-2.5 rounded font-bold"
          : "absolute right-3 top-3"
      }`}
    >
      {discountVal}% OFF
    </span>
  );
};

export default Discount;
