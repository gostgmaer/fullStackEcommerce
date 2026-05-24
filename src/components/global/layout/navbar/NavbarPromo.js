"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "@/assets/jsonfile/content";
import CategoryServices from "@/helper/network/services/CategoryServices";

const FALLBACK_CATEGORIES = [
  { _id: "fresh-veg-id", title: "Fresh Vegetables", slug: "fresh-vegetable" },
  { _id: "fish-meat-id", title: "Fish & Meat", slug: "fish--meat" },
  { _id: "bread-bakery-id", title: "Bread & Bakery", slug: "biscuits--cakes" },
  { _id: "drinks-id", title: "Soft Drinks", slug: "drinks" },
  { _id: "baby-care-id", title: "Baby Care", slug: "baby-care" },
  { _id: "beauty-health-id", title: "Beauty & Health", slug: "beauty--health" }
];

const NavbarPromo = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await CategoryServices.getShowingCategory();
        if (res && res.results) {
          setCategories(res.results.slice(0, 8)); // Top 8 categories
        }
      } catch (err) {
        console.error("Failed to load navbar categories:", err);
      }
    }
    loadCategories();
  }, []);

  const navCategories = categories.length > 0 ? categories : FALLBACK_CATEGORIES;

  return (
    <div className="hidden lg:block bg-card text-foreground border-b border-border/40 transition-colors duration-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 h-12 flex justify-between items-center">
        
        {/* Left Side Links */}
        <div className="inline-flex items-center space-x-6">
          <nav className="flex space-x-6 items-center">
            
            {/* Category Dropdown Trigger */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="mx-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none">
                <span>Categories</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-primary" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Category Dropdown List */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-card border border-border rounded-xl shadow-lg z-50 py-2 animate-fade-in">
                  {navCategories.map((cat) => (
                    <Link
                      key={cat._id}
                      href={`/product/search?category=${cat.slug || cat.title?.toLowerCase().split(" ").join("-")}&_id=${cat._id}`}
                      className="block px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors !no-underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="mx-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {content["About Us"]}
            </Link>
            
            <Link
              href="/contact-us"
              className="mx-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {content["Contact Us"]}
            </Link>
            
            <Link
              href="/faqs"
              className="mx-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {content.FAQ}
            </Link>

            <Link
              href="/offer"
              className="relative inline-flex items-center h-6 bg-red-150 dark:bg-red-950/40 ml-2 py-0 px-2.5 rounded-full text-xs font-bold text-red-500 dark:text-red-400 hover:text-red-650 transition-colors"
            >
              {content.Offers}
              <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </div>
            </Link>
          </nav>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/privacy-policy"
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {content["Privacy Policy"]}
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {content["Terms & Conditions"]}
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default NavbarPromo;
