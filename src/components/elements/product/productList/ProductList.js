"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Select } from "@/components/global/fields/SelectField";
import Pagination from "@/components/global/common/pagination/Pagination";
import ProductCard from "../ProductCard";
import { attributes } from "@/assets/fakeData/Products";
// import { useRouter, useSearchParams } from "next/navigation";
import ProductServices from "@/helper/network/services/ProductServices";
import { Suspense } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/reducers/productSlice";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import { Placeholder } from "rsuite";
const sortByOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'priceLowToHigh', label: 'Price: Low to High' },
  { value: 'priceHighToLow', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'ratingHighToLow', label: 'Customer Rating: High to Low' },
  { value: 'popularity', label: 'Popularity' }
];


// let PageSize = 24;
const ProductList = () => {

  const qdata = useSearchParams()
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentLimit, setcurrentLimit] = useState(24);
  const [currentPage, setcurrentPage] = useState(1);

  const getAllSearchParamsAsObject = () => {
    // const query = useSearchParams();
    const paramsObj = {};

    // Iterate over all search params and populate the object
    qdata.forEach((value, key) => {
      paramsObj[key] = value;
    });

    return paramsObj; // Return as a plain object
  };
  const q = getAllSearchParamsAsObject()



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
  //   console.log(res);
  //   setData(res)

  //  }


  // const PageChnage = (page) => {

  //   setcurrentPage(page)
  //   updateQuery(page)

  // }



  const { products, isLoading, error } = useSelector((state) => state["products"])

  const { page, limit, query, category } = q
  useEffect(() => {

    if (q) {
      dispatch(fetchProducts(q));  // Dispatch the fetchProducts action with the query from the URL
    }
    console.log(products);

  }, [dispatch, page, limit, query, category]);


  return (

    <Suspense>
      <div>
        <div className=" justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3 flex items-center">
          <h6 className="text-sm grid-cols-5 ">
            Total <span className="font-bold">{products?.total}</span> items Found
          </h6>
          <div className=" grid-cols-1">  <Select options={sortByOptions} id={"sort_by"} label={undefined} additionalAttrs={undefined} placeholder={undefined} optionkeys={{ key: "value", value: "label" }} /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
          {isLoading ? <>

            {

              Array.from(Array(24).keys()).map((data, index) => {
                return <Placeholder.Graph active key={index} />;
              })
            }
          </> : products?.results?.map((data, index) => {
            return <ProductCard key={index} product={data} attributes={attributes} />;
          })}

        </div>
        <Pagination
          className="pagination-bar"
          totalCount={products?.total}
        />
      </div>
    </Suspense>
  );
};

export default ProductList;
