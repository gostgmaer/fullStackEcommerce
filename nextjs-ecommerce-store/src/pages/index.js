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
import { useSelector } from "react-redux";

export default function Home( ) {
  const { openModal, setOpenModal } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 1000);
  }, []);




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
        <MuiModal heading={undefined} Content={<Landingmodal />} classes={undefined} maxWidth={''}></MuiModal>
      </Layout>
    </>
  );
}


// export const getServerSideProps = async () => {
//   const cartItem = useSelector((state) => state["data"].cartItems);
//   const wishlist = useSelector((state) => state["data"].wishList);

//   return {
//     props: {
//       data: { cartItem: cartItem, wishlist: wishlist },
//     },
//   };
// };
