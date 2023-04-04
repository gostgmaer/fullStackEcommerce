import Head from "next/head";
import Layout from "@/layout";
import { getSession, useSession } from "next-auth/react";
import CategoryList from "@/components/homecomponents/CategoryListsection";
import FlashDeal from "@/components/homecomponents/Flashdealsection";
import ModeForYou from "@/components/homecomponents/ModeForYou";
import Footersection from "@/components/homecomponents/Footersection";
import NewArrival from "@/components/homecomponents/NewArrival";
import DiscountSlider from "@/components/homecomponents/DiscountSlider";
import FeatureItems from "@/components/homecomponents/FeatureItems";
import Heroslider from "@/components/homecomponents/Heroslider";
import { productData } from "@/assets/mock/product";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Ecommerce Next App</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heroslider data={data?.mainCarouselData} />
        <FlashDeal data={data?.flashDealsData} />
        <FeatureItems data={data} />
        <DiscountSlider  data={data?.bigDiscountList} />
        <NewArrival data={data?.newArrivalsList} />
        <CategoryList data={data.bottomCategories} />
        <ModeForYou data={data.moreItems} />
        <Footersection data={data.serviceList} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: productData,
    },
  };
};
