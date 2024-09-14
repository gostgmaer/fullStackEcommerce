"use client"
import CategoryCard from "@/components/elements/category/categoryCard/CategoryCard";
import ProductList from "@/components/elements/product/productList/ProductList";
import Layout from "@/components/global/layout/Layout";
import { Suspense } from "react";


const Search =  () => {


  return (
    <Layout>

      <Suspense>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex py-10 lg:py-12">
            <div className="flex w-full">
              <div className="w-full">
                <CategoryCard />

                <ProductList/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Suspense>
     
    </Layout>
  );
};

export default Search;

