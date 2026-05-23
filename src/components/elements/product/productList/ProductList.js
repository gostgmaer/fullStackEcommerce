"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Select } from "@/components/global/fields/SelectField";
import Pagination from "@/components/global/common/pagination/Pagination";
import ProductCard from "../ProductCard";
import { attributes } from "@/assets/fakeData/Products";
// import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/reducers/productSlice";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import { Placeholder } from "rsuite";
const sortByOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "priceLowToHigh", label: "Price: Low to High" },
  { value: "priceHighToLow", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "ratingHighToLow", label: "Customer Rating: High to Low" },
  { value: "popularity", label: "Popularity" },
];

// let PageSize = 24;
const ProductList = () => {
  const qdata = useSearchParams();
  const dispatch = useDispatch();

  const q = useMemo(() => {
    const paramsObj = {};
    qdata.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  }, [qdata]);

  //   // const data=[]

  //  const [limit, setLimit] = useState(24);
  //  const [data, setData] = useState(null);
  //   // const [pageSize, setPageSize] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   PageChnage(currentPage)
  // }, [currentPage]);

  // const updateQuery = (page) => {
  //   const params = new URLSearchParams(window.location.search);

  //   // Update or set the query parameters
  //   if (limit) params.set('limit', limit.toString());
  //   if (currentPage) params.set('page', page);

  //   // Navigate to the new URL with updated query parameters
  //   router.push(`?${params.toString()}`);
  // };

  // const fetchData = async (second) => {

  //   const res= await ProductServices.getShowingProducts(getAllSearchParamsAsObject())
  //   //console.log(res);
  //   setData(res)

  //  }

  // const PageChnage = (page) => {

  //   setcurrentPage(page)
  //   updateQuery(page)

  // }

  const { products, isLoading, error } = useSelector(
    (state) => state["products"]
  );

  useEffect(() => {
    if (q) {
      dispatch(fetchProducts(q)); // Dispatch the fetchProducts action with the query from the URL
    }
  }, [dispatch, q]);

  return (
    <Suspense>
      <div>
        <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-xl p-4 mb-6 shadow-sm">
          <h6 className="text-sm font-sans font-medium text-slate-600 dark:text-slate-300 m-0">
            Total <span className="font-bold text-slate-800 dark:text-white">{products?.total || 0}</span> items found
          </h6>
          <div className="w-44 sm:w-52">
            <Select
              options={sortByOptions}
              id={"sort_by"}
              label={undefined}
              additionalAttrs={undefined}
              placeholder={undefined}
              optionkeys={{ key: "value", value: "label" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-3 md:gap-4">
          {isLoading ? (
            <>
              {Array.from(Array(24).keys()).map((_, index) => (
                <Placeholder.Graph active key={index} className="h-64 rounded-xl" />
              ))}
            </>
          ) : products?.results?.length === 0 ? (
            /* Empty State */
            <div className="col-span-full flex flex-col items-center justify-center py-20 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-muted dark:bg-slate-800 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-1">No products found</h3>
              <p className="text-sm text-muted-foreground text-center max-w-xs">
                Try adjusting your filters or search query to find what you&apos;re looking for.
              </p>
            </div>
          ) : (
            products?.results?.map((data, index) => (
              <ProductCard
                key={index}
                product={data}
                attributes={attributes}
              />
            ))
          )}
        </div>

        <Pagination
          className="pagination-bar"
          totalCount={products?.total ? products.total : 0}
        />
      </div>
    </Suspense>
  );
};

export default ProductList;
