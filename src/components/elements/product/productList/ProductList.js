"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Select } from "@/components/global/fields/SelectField";
import Pagination from "@/components/global/common/pagination/Pagination";
import ProductCard from "../ProductCard";
import { attributes } from "@/assets/fakeData/Products";
import { useRouter, useSearchParams } from "next/navigation";
import ProductServices from "@/helper/network/services/ProductServices";

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

  const query= useSearchParams()
  const getAllSearchParamsAsObject = () => {
    // const query = useSearchParams();
    const paramsObj = {};
  
    // Iterate over all search params and populate the object
    query.forEach((value, key) => {
      paramsObj[key] = value;
    });
  
    return paramsObj; // Return as a plain object
  };

  // const data=[]
  const router = useRouter();
   const [limit, setLimit] = useState(24);
   const [data, setData] = useState(null);
  // const [pageSize, setPageSize] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    PageChnage(currentPage)
    fetchData()
  }, [currentPage,query]);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * limit;
  //   const lastPageIndex = firstPageIndex + limit;
  //   return data?.results?.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  // console.log(currentTableData);
  

  const updateQuery = (page) => {
    const params = new URLSearchParams(window.location.search);
    
    // Update or set the query parameters
    if (limit) params.set('limit', limit.toString());
    if (currentPage) params.set('page', page);

    // Navigate to the new URL with updated query parameters
    router.push(`?${params.toString()}`);
  };

const fetchData = async (second) => { 


  const res= await ProductServices.getShowingProducts(getAllSearchParamsAsObject())
  console.log(res);
  setData(res)
  
 }


  const PageChnage = (page) => {

    setCurrentPage(page)
    updateQuery(page)
    
  }


  return (
    <div>
      <div className=" justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3 flex items-center">
        <h6 className="text-sm grid-cols-5 ">
          Total <span className="font-bold">{data?.total}</span> items Found
        </h6>
        <div className=" grid-cols-1">  <Select options={sortByOptions} id={"sort_by"} label={undefined} additionalAttrs={undefined} placeholder={undefined} optionkeys={{ key: "value", value: "label" }} /></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
        {data?.results?.map((data, index) => {
          return <ProductCard key={index} product={data} attributes={attributes} />;
        })}

      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data?.total?data?.total:0}
        updateQuery={updateQuery}
        pageSize={limit}
        onPageChange={page => PageChnage(page)}
      />
    </div>
  );
};

export default ProductList;
