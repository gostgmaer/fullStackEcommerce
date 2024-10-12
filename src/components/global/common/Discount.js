"use client";

import { applyDiscount } from "@/helper/functions";

const Discount = ({ discount = 1, product, slug, modal }) => {
  return (
    <>
      {discount > 1 && (
        <span
          className={
            modal
              ? "absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10  right-1 bottom-1"
              : slug
              ? "text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-1 bottom-1"
              : " absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-1 bottom-1"
          }
        >
          {applyDiscount(product.prices.originalPrice, product.prices.discount)}% Off
        </span>
      )}
      {discount === undefined && Number(product.prices?.discount) > 1 && (
        <span
          className={
            modal
              ? "absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-1 bottom-1"
              : slug
              ? "text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-1 bottom-1"
              : " absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-1 bottom-1"
          }
        >
          {applyDiscount(product.prices.originalPrice, product.prices.discount)}
          % Off
        </span>
      )}
    </>
  );
};

export default Discount;
