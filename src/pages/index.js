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
import { useEffect, useState } from "react";
import MuiModal from "@/layout/modal";
import Landingmodal from "@/components/landingmodal/Landingmodal";

import React from "react";
import { useGlobalContext } from "@/context/globalContext";
import { Container } from "@mui/material";
import { get } from "@/lib/network/http";
import { apiUrl } from "@/utils/config";

const Home = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [homeData, setHomeData] = useState(undefined);
  useEffect(() => {
    setOpenModal(true);
  }, []);
  console.log(data);

  // const fetchHomeData = async (second) => {
  //   const response = await get("/home/data");
  //   console.log(response);
  //   setHomeData(response);
  // };

  // useEffect(() => {
  //   fetchHomeData();
  // }, []);

  return (
    <>
      <Head>
        <title>Ecommerce Next App</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heroslider data={productData?.mainCarouselData} />
        <Container>
          <FlashDeal data={productData?.flashDealsData} />
          <NewArrival data={productData?.newArrivalsList} />
          <CategoryList data={productData.bottomCategories} />
        </Container>
        <div></div>
        <Container>
          <ModeForYou data={data.results.newArive} />
          <Footersection service={productData.serviceList} />
        </Container>

        {/* <MuiModal
          heading={undefined}
          Content={
            <Landingmodal openModal={openModal} setOpenModal={setOpenModal} />
          }
          classes={undefined}
          maxWidth={""}
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></MuiModal> */}
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const response = await fetch(`${apiUrl}/home/data`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
