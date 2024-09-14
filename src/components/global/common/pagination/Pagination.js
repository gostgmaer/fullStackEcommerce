"use client"
import React from "react";

import { DOTS, usePagination } from "@/context/hooks/usePagination";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/store/reducers/querySlice";
import { useRouter } from "next/navigation";


const Pagination = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    totalCount,
    siblingCount = 1,
    className,
  } = props;


  const { page, limit } = useSelector((state) => state["queryParam"]);

  const updateQuery = (newPage, newLimit) => {
    const params = new URLSearchParams(window.location.search);

    // Update or set the query parameters
    params.set('limit', newLimit);
    params.set('page', newPage);

    // Navigate to the new URL with updated query parameters
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      dispatch(setPage(newPage)); // Dispatch setPage action
      updateQuery(newPage, limit);  // Update URL with the new page
    }
  };

const onNext = (newPage) => {
  dispatch(setPage(newPage)); 
  updateQuery(newPage, limit); 
  };

  const onPrevious = (newPage) => {
    dispatch(setPage(newPage)); 
    updateQuery(newPage, limit); 
  };

  const paginationRange = usePagination({
    page,
    totalCount,
    siblingCount,
    limit,
  });

  if (page === 0 || paginationRange?.length < 2) {
    return null;
  }

//console.log(paginationRange?.length);


  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <ul className={" flex items-center justify-center gap-4 mt-8"}>
      <button
        className={page === 1 ? "text-[#979797]  rounded-full p-1 !cursor-default" : "text-[#575757] hover:text-green-600 rounded-full p-1 !cursor-default"}
        disabled={page === 1 ? true : false}
        onClick={() => onPrevious(page - 1)}
      >
        <IoArrowBack />
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="text-[$575757] pagination-item dots font-semibold" key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li key={index}
            className={
              pageNumber === page
                ? "font-semibold bg-green-500 text-white h-8 w-8 items-center flex justify-center rounded-full"
                : "font-semibold text-[$575757] cursor-pointer hover:bg-green-500 h-8 w-8 items-center flex justify-center rounded-full hover:text-white "
            }
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <button
        className={page === lastPage ? "text-[#979797]  rounded-full p-1 !cursor-default" : "text-[#575757] hover:text-green-600 rounded-full p-1 !cursor-default"}
        disabled={page === lastPage ? true : false}
        onClick={() => onNext(page + 1)}
      >
        <IoArrowForward />
      </button>
    </ul>
  );
};

export default Pagination;
