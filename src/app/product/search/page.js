"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryCard from "@/components/elements/category/categoryCard/CategoryCard";
import ProductList from "@/components/elements/product/productList/ProductList";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");

  // Determine dynamic title
  let headingTitle = "Explore Our Products";
  if (query) {
    headingTitle = `Search Results for "${query}"`;
  } else if (category) {
    // Un-slugify category name for display (e.g. biscuits--cakes -> biscuits & cakes)
    const displayCategory = category.replace(/--/g, " & ").replace(/-/g, " ");
    headingTitle = `Category: ${displayCategory}`;
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageHeading title={headingTitle} />
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full">
            {/* Category Carousel / Cards on Search page */}
            <div className="mb-8">
              <CategoryCard />
            </div>

            {/* Main Product Grid */}
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-semibold text-muted-foreground">Loading products...</span>
          </div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </Layout>
  );
};

export default Search;
