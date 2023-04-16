/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Layout from "@/layout";
import CategoryList from "@/components/homecomponents/CategoryListsection";
import FlashDeal from "@/components/homecomponents/Flashdealsection";
import ModeForYou from "@/components/homecomponents/ModeForYou";
import Footersection from "@/components/homecomponents/Footersection";
import NewArrival from "@/components/homecomponents/NewArrival";
import DiscountSlider from "@/components/homecomponents/DiscountSlider";
import FeatureItems from "@/components/homecomponents/FeatureItems";
import Heroslider from "@/components/homecomponents/Heroslider";
import { productData } from "@/assets/mock/product";
import { useEffect } from "react";
import MuiModal from "@/layout/modal";
import Landingmodal from "@/components/landingmodal/Landingmodal";
import { useGlobalContext } from "@/context/globalContext";
import { useFetcher } from "@/lib/helper";

import React from "react";
import { invokeExternalAPI } from "@/lib/http";
import moment from "moment";

const Home = ({ products }) => {
  const { openModal, setOpenModal } = useGlobalContext();

  // console.log(products);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     setOpenModal(true);
  //     const discount = await invokeExternalAPI(
  //       "products",
  //       "get",
  //       "",
  //       {},
  //       { sort: "price:desc" }
  //     );
  //     console.log(discount);
  //   }, 1000);
  // }, []);

  // const category = useFetcher("categories");
  // console.log(category);

  // console.log(productData);

  return (
    <>
      <Head>
        <title>Ecommerce Next App</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heroslider data={productData?.mainCarouselData} />
        <FlashDeal data={productData?.flashDealsData} />
        <FeatureItems data={productData} />
        <DiscountSlider data={productData?.bigDiscountList} />
        <NewArrival data={productData?.newArrivalsList} />
        <CategoryList data={productData.bottomCategories} />
        <ModeForYou data={productData.moreItems} />
        <Footersection service={productData.serviceList} />
        <MuiModal
          heading={undefined}
          Content={<Landingmodal />}
          classes={undefined}
          maxWidth={""}
        ></MuiModal>
      </Layout>
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   const newParams = {
//     "filters[$or][0][publishedAt][$eq]": moment().format("YYYY-MM-DD"),
//   };
//   const moreItems = await invokeExternalAPI("products", "get", "", {}, {});
//   const categories = await invokeExternalAPI("categories", "get", "", {}, {});
//   const newArival = await invokeExternalAPI(
//     "products",
//     "get",
//     "",
//     {},
//     newParams
//   );
//   const discount = await invokeExternalAPI(
//     "products",
//     "get",
//     "",
//     {},
//     { sort: "discount:desc" }
//   );

//   // const deal = await invokeExternalAPI(
//   //   "products",
//   //   "get",
//   //   "",
//   //   {},
//   //   {}
//   // );
//   // const feature = await invokeExternalAPI(
//   //   "products",
//   //   "get",
//   //   "",
//   //   {},
//   //   {}
//   // );
//   // const mainCarouselData = await invokeExternalAPI(
//   //   "products",
//   //   "get",
//   //   "",
//   //   {},
//   //   {}
//   // );
//   //    const res = await fetch('https://demo.creativethemes.com/blocksy/blog/')

//   const Data = {
//     newArival,
//     categories,
//     moreItems,
//     discount,
//   };

//   return {
//     props: { products: Data },
//     // will be passed to the page component as props
//   };
// }
