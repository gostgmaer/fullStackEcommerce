"use client"
import React from "react";
import { useDispatch } from "react-redux";

import categoryCard1 from "../../../../assets/img/categoryCard1.jpg";
import categoryCard2 from "../../../../assets/img/categoryCard2.jpg";
import categoryCard3 from "../../../../assets/img/categoryCard3.jpg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchAction, searchProducts } from "@/store/reducers/searchSlice";



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
    route.push("/product/search?category=" + value)
    const category =
      value.includes("--") === true 
        ? value.split("--").join(" ")
        : value.split("-").join(" ");
      
   dispatch(searchAction({ value: category, path: "Category" }));
   dispatch(searchProducts({ value: category, path: "Category" }));
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {CategoriesData.map((categoryCard, index) => {
        return (
          <div
            key={index}
            className="group relative w-full h-44 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-150/40 dark:border-slate-800"
          >
            <Link
              onClick={() => {
                handleClick(categoryCard.path);
              }}
              className="block w-full h-full cursor-pointer !no-underline"
              href={"/product/search?category="+categoryCard.path}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt={categoryCard.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={categoryCard.img}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/35 transition-colors duration-300" />
              </div>

              {/* Text content */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-center items-start text-white">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1">
                  Taste of
                </h2>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-1">
                  {categoryCard.name}
                </span>
                <p className="text-[11px] font-medium text-slate-200 mb-3">
                  Weekend discount offer
                </p>
                <span className="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider px-4.5 py-1.5 bg-primary hover:bg-primary/95 text-white rounded-full transition-all duration-200 active:scale-95 shadow">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
