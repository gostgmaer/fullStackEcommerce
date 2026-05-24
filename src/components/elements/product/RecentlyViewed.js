"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const RecentlyViewed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const viewedStr = localStorage.getItem("recentlyViewedProducts") || "[]";
      const viewed = JSON.parse(viewedStr);
      setProducts(viewed);
    } catch (err) {
      console.error("Failed to load recently viewed products:", err);
    }
  }, []);

  if (products.length === 0) return null;

  return (
    <div className="w-full bg-card border border-border/40 rounded-2xl p-6 lg:p-8 mt-10 shadow-sm transition-all duration-200">
      <h3 className="text-base font-bold text-foreground mb-6 uppercase tracking-wider">
        Recently Viewed Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
