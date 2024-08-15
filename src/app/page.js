
"use client"
import { attributes, popularProducts } from "@/assets/fakeData/Products";
import { content } from "@/assets/jsonfile/content";
import Banner from "@/components/elements/banner/Banner";
import MainCarousel from "@/components/elements/carousel/MainCarousel";
import StickyCart from "@/components/elements/cart/StickyCart";
// import FeatureCategory from "@/components/elements/category/FeatureCategory";
import OfferCard from "@/components/elements/offer/OfferCard";
import ProductCard from "@/components/elements/product/ProductCard";
import Layout from "@/components/global/layout/Layout";


// export const metadata = {
//   title: "This is HomePage",
//   description: "Ths is Description",
// };


export default function Home() {
  return (
    <Layout  >
      <div className="min-h-screen">
            {/* <StickyCart /> */}
            <div className="bg-white">
              <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                <div className="flex w-full">
                  <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                    <MainCarousel />
                  </div>
                  <div className="w-full hidden lg:flex">
                    <OfferCard />
                  </div>
                </div>
                <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                  <Banner />
                </div>
              </div>
            </div>

            {/* feature category's */}
            <div className="bg-gray-100 lg:py-16 py-10">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-10 flex justify-center">
                  <div className="text-center w-full lg:w-2/5">
                    <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                      {/* {t("common:Featured-title")} */}
                      {content["Featured-title"]}
                    </h2>
                    <p className="text-base font-sans text-gray-600 leading-6">
                      {/* {t("common:Featured-sub-title")} */}


                      {content["Featured-sub-title"]}
                    </p>
                  </div>
                </div>
                {/* <FeatureCategory /> */}
              </div>
            </div>

            {/* popular products */}
            <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">

                    {content["popular-products-title"]}
                 
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                 

                    {content["popular-products-sub-title"]}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {popularProducts?.slice(0, 18).map((product) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                        attributes={attributes}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* promotional banner card */}
            {/* <div className="block mx-auto max-w-screen-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
                  <CardTwo />
                </div>
              </div>
            </div> */}

            {/* discounted products */}
            {/* <div
              id="discount"
              className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
            >
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    {t("common:discounted-products-title")}
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    {t("common:discounted-products-paragraph-text")}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {discountProducts?.slice(0, 18).map((product) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                        attributes={attributes}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>

    </Layout>
  );
}
