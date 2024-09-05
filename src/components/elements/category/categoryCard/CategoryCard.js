"use client"
import React from "react";
import { useDispatch } from "react-redux";

import categoryCard1 from "../../../../assets/img/categoryCard1.jpg";
import categoryCard2 from "../../../../assets/img/categoryCard2.jpg";
import categoryCard3 from "../../../../assets/img/categoryCard3.jpg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchAction } from "@/store/reducers/searchSlice";



const CategoriesData = [
  {
    name: "Fresh & Natural",
    img: categoryCard1,
    path: "fresh-vegetable",
  },
  {
    name: "Fish & Meat",
    img: categoryCard2,
    path: "fish--meat",
  },
  {
    name: "Bread & Bakery",
    img: categoryCard3,
    path: "biscuits--cakes",
  },
];
const CategoryCard = () => {
  const dispatch = useDispatch();
  let route = useRouter();
  const handleClick = (value) => {
    route.push("/search?Category=" + value)
    const category =
      value.includes("--") === true 
        ? value.split("--").join(" ")
        : value.split("-").join(" ");
      
   dispatch(searchAction({ value: category, path: "Category" }));
  };

  return (
    <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 md:grid-cols-2">
      {CategoriesData.map((categoryCard, index) => {
        return (
          <div
            key={index}
            className=" rounded-lg mx-auto w-full relative  overlow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl"
          >
            <Link
              onClick={() => {
                handleClick(categoryCard.path);
              }}
              className="block cursor-pointer"
              href={"/product/search?Category="+categoryCard.path}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: " block",
                    width: "initial",
                    height: "initial",
                    background: " none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "42.5455% 0px 0px",
                  }}
                ></span>
                <Image
                 alt="Taste of"
                 sizes="100vw"
                 height={200}
                 width={300}
              
                 src={categoryCard.img}
                 decoding="async"
                 data-nimg="responsive"
                 className="object-cover rounded-lg p-0 m-auto max-h-full min-h-full min-w-full max-w-full inset-0 absolute"
 
                >

                </Image>
            
              </span>
              <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center">
                <div className="pt-4">
                  <h2 className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                    Taste of <br />
                    <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                      {categoryCard.name}
                    </span>
                  </h2>
                  <p className="text-sm  text-gray-50">
                    Weekend discount offer
                  </p>
                  <button className="hidden sm:block lg:block text-xs mx-auto leading-6 font-medium mt-4 px-4 py-1 bg-green-500 text-center rounded-full text-white hover:bg-emerald-600">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
