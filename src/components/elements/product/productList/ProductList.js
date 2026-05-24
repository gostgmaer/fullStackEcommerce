"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Select } from "@/components/global/fields/SelectField";
import Pagination from "@/components/global/common/pagination/Pagination";
import ProductCard from "../ProductCard";
import { attributes } from "@/assets/fakeData/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/reducers/productSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { Placeholder } from "rsuite";
import { FiFilter, FiX, FiStar, FiSlash } from "react-icons/fi";
import CategoryServices from "@/helper/network/services/CategoryServices";

const sortByOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "priceLowToHigh", label: "Price: Low to High" },
  { value: "priceHighToLow", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "ratingHighToLow", label: "Customer Rating: High to Low" },
  { value: "popularity", label: "Popularity" },
];

const FALLBACK_CATEGORIES = [
  { _id: "fresh-veg-id", title: "Fresh Vegetables", slug: "fresh-vegetable" },
  { _id: "fish-meat-id", title: "Fish & Meat", slug: "fish--meat" },
  { _id: "bread-bakery-id", title: "Bread & Bakery", slug: "biscuits--cakes" },
  { _id: "drinks-id", title: "Soft Drinks", slug: "drinks" },
  { _id: "baby-care-id", title: "Baby Care", slug: "baby-care" },
  { _id: "beauty-health-id", title: "Beauty & Health", slug: "beauty--health" }
];

const ProductListContent = () => {
  const qdata = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  // Search parameters from URL
  const q = useMemo(() => {
    const paramsObj = {};
    qdata.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  }, [qdata]);

  // Redux store products
  const { products, isLoading } = useSelector((state) => state["products"]);

  // Local Filter States
  const urlCategory = qdata.get("category") || "";
  const [selectedCat, setSelectedCat] = useState(urlCategory);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [onlyStock, setOnlyStock] = useState(false);
  const [ratingMin, setRatingMin] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [categories, setCategories] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync category state with URL query parameter
  useEffect(() => {
    setSelectedCat(urlCategory);
  }, [urlCategory]);

  // Load categories for the filter list
  useEffect(() => {
    async function loadCats() {
      try {
        const res = await CategoryServices.getShowingCategory();
        if (res && res.results) {
          setCategories(res.results.slice(0, 10));
        }
      } catch (err) {
        console.error("Failed to load list categories:", err);
      }
    }
    loadCats();
  }, []);

  // Fetch products when query URL changes
  useEffect(() => {
    if (q) {
      dispatch(fetchProducts(q));
    }
  }, [dispatch, q]);

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCat("");
    setPriceRange({ min: 0, max: 200 });
    setOnlyStock(false);
    setRatingMin(0);
    setSortBy("relevance");
    router.push("/product/search");
  };

  const isFilterActive = useMemo(() => {
    return selectedCat !== "" || priceRange.min > 0 || priceRange.max < 200 || onlyStock || ratingMin > 0;
  }, [selectedCat, priceRange, onlyStock, ratingMin]);

  // Apply dynamic client-side filtering and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let items = products?.results ? [...products.results] : [];

    // 1. Category Filter
    if (selectedCat) {
      items = items.filter((p) => {
        const catSlug = p.category?.slug || p.category?.title?.toLowerCase().split(" ").join("-") || "";
        return catSlug.toLowerCase() === selectedCat.toLowerCase();
      });
    }

    // 2. Price Range Filter
    items = items.filter((p) => {
      const price = Number(p.prices?.price || 0);
      return price >= priceRange.min && price <= priceRange.max;
    });

    // 3. Stock Filter
    if (onlyStock) {
      items = items.filter((p) => Number(p.stock || 0) > 0);
    }

    // 4. Rating Filter (Mock fallback of 4.5 stars if rating property is missing)
    if (ratingMin > 0) {
      items = items.filter((p) => {
        const rating = Number(p.rating || p.prices?.rating || 4.5);
        return rating >= ratingMin;
      });
    }

    // 5. Sort Option
    if (sortBy === "priceLowToHigh") {
      items.sort((a, b) => Number(a.prices?.price || 0) - Number(b.prices?.price || 0));
    } else if (sortBy === "priceHighToLow") {
      items.sort((a, b) => Number(b.prices?.price || 0) - Number(a.prices?.price || 0));
    } else if (sortBy === "newest") {
      items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sortBy === "ratingHighToLow") {
      items.sort((a, b) => Number(b.rating || 4.5) - Number(a.rating || 4.5));
    } else if (sortBy === "popularity") {
      items.sort((a, b) => Number(b.stock || 0) - Number(a.stock || 0));
    }

    return items;
  }, [products?.results, selectedCat, priceRange, onlyStock, ratingMin, sortBy]);

  // Paginated visible products
  const itemsPerPage = 12;
  const currentPage = Number(qdata.get("page") || 1);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(start, start + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  const activeCategories = categories.length > 0 ? categories : FALLBACK_CATEGORIES;

  // Shared Filter UI Component
  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border/40 pb-3">
        <h4 className="font-bold text-base text-foreground flex items-center gap-2">
          <FiFilter className="w-4.5 h-4.5 text-primary" /> Filters
        </h4>
        {isFilterActive && (
          <button
            onClick={handleClearAll}
            className="text-xs text-primary font-bold hover:underline flex items-center gap-1 focus:outline-none"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-2.5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</h5>
        <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto pr-2">
          {activeCategories.map((cat) => {
            const isSelected = selectedCat.toLowerCase() === (cat.slug || "").toLowerCase();
            return (
              <button
                key={cat._id}
                onClick={() => {
                  const newCat = isSelected ? "" : cat.slug;
                  setSelectedCat(newCat);
                  if (newCat) {
                    router.push(`/product/search?category=${newCat}`);
                  } else {
                    router.push("/product/search");
                  }
                }}
                className={`text-left text-xs py-1 px-2.5 rounded-lg transition-colors font-medium ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3.5 border-t border-border/40 pt-5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Price Range</h5>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
          />
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border bg-background rounded-lg px-2 py-1 w-full">
              <span className="text-xs text-muted-foreground mr-1">$</span>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Math.max(0, Number(e.target.value)) })}
                className="w-full bg-transparent text-xs focus:outline-none text-foreground font-semibold"
              />
            </div>
            <span className="text-xs text-muted-foreground">to</span>
            <div className="flex items-center border border-border bg-background rounded-lg px-2 py-1 w-full">
              <span className="text-xs text-muted-foreground mr-1">$</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Math.max(priceRange.min, Number(e.target.value)) })}
                className="w-full bg-transparent text-xs focus:outline-none text-foreground font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stock availability */}
      <div className="space-y-3 border-t border-border/40 pt-5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Availability</h5>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={onlyStock}
            onChange={(e) => setOnlyStock(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary/20 w-4 h-4 bg-background"
          />
          <span className="text-xs font-medium text-foreground">In Stock Only</span>
        </label>
      </div>

      {/* Ratings */}
      <div className="space-y-3 border-t border-border/40 pt-5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ratings</h5>
        <div className="flex flex-col space-y-2">
          {[4, 3, 2].map((stars) => {
            const isSelected = ratingMin === stars;
            return (
              <button
                key={stars}
                onClick={() => setRatingMin(isSelected ? 0 : stars)}
                className={`flex items-center gap-1.5 text-xs text-left py-1 px-2 rounded-lg transition-colors font-medium ${
                  isSelected ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex gap-0.5">
                  {Array.from(Array(5)).map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < stars ? "fill-amber-450 text-amber-450" : "text-muted/60"
                      }`}
                    />
                  ))}
                </div>
                <span>& Up</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
      {/* 1. Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-1/4 bg-card border border-border/60 p-6 rounded-2xl shadow-sm sticky top-24 space-y-6">
        <FilterContent />
      </aside>

      {/* 2. Main Listing Area */}
      <div className="w-full lg:w-3/4 flex-grow">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4 flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex-grow inline-flex items-center justify-center gap-2 h-11 px-4 bg-card border border-border/75 text-foreground rounded-xl text-sm font-semibold hover:bg-muted/40 transition-colors shadow-sm focus:outline-none"
          >
            <FiFilter className="w-4 h-4 text-primary" />
            <span>Filters {isFilterActive && `•`}</span>
          </button>
          {isFilterActive && (
            <button
              onClick={handleClearAll}
              className="text-xs text-primary font-bold hover:underline focus:outline-none"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Sort header bar */}
        <div className="flex justify-between items-center bg-card border border-border/50 rounded-xl p-4 mb-6 shadow-sm">
          <h6 className="text-xs font-semibold text-muted-foreground m-0">
            Showing <span className="font-extrabold text-foreground">{filteredAndSortedProducts.length}</span> of{" "}
            <span className="font-extrabold text-foreground">{products?.total || 0}</span> items
          </h6>
          <div className="w-44 sm:w-52">
            <Select
              options={sortByOptions}
              id={"sort_by"}
              label={undefined}
              additionalAttrs={{
                onChange: (e) => setSortBy(e.target.value),
                value: sortBy,
              }}
              placeholder={undefined}
              optionkeys={{ key: "value", value: "label" }}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 md:gap-4">
          {isLoading ? (
            <>
              {Array.from(Array(12).keys()).map((_, index) => (
                <div key={index} className="h-64 bg-card border border-border animate-pulse rounded-xl"></div>
              ))}
            </>
          ) : paginatedProducts.length === 0 ? (
            /* Empty State */
            <div className="col-span-full flex flex-col items-center justify-center py-20 bg-card border border-border rounded-2xl animate-fade-in shadow-inner">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <FiSlash className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">No products match filters</h3>
              <p className="text-xs text-muted-foreground text-center max-w-xs">
                Try widening your price range, checking other categories, or clearing all active filters.
              </p>
              <button
                onClick={handleClearAll}
                className="mt-6 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity shadow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            paginatedProducts.map((data, index) => (
              <ProductCard key={index} product={data} attributes={attributes} />
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredAndSortedProducts.length > itemsPerPage && (
          <div className="mt-8">
            <Pagination
              className="pagination-bar"
              totalCount={filteredAndSortedProducts.length}
            />
          </div>
        )}
      </div>

      {/* 3. Mobile Filter Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" onClick={() => setMobileOpen(false)}></div>
          
          <div className="relative w-80 max-w-full bg-card h-full flex flex-col shadow-xl z-10 animate-slide-left p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <span className="font-bold text-foreground">Filters</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 hover:bg-muted text-muted-foreground rounded-lg transition-colors focus:outline-none"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-grow">
              <FilterContent />
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-95 transition-opacity text-center shadow mt-6"
            >
              Apply Filters ({filteredAndSortedProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductList = () => {
  return (
    <Suspense fallback={
      <div className="flex gap-8 w-full items-start">
        <div className="hidden lg:block w-1/4 h-80 bg-card border border-border animate-pulse rounded-2xl"></div>
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from(Array(8).keys()).map((_, index) => (
            <div key={index} className="h-64 bg-card border border-border animate-pulse rounded-xl"></div>
          ))}
        </div>
      </div>
    }>
      <ProductListContent />
    </Suspense>
  );
};

export default ProductList;
