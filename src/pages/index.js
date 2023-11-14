/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Layout from "@/layout";
import CategoryList from "@/components/homecomponents/CategoryListsection";

import Heroslider from "@/components/homecomponents/Heroslider";
import { productData } from "@/assets/mock/product";
import { useEffect, useState } from "react";
import MuiModal from "@/layout/modal";
import React from "react";
import { Container } from "@mui/material";
import { get } from "@/lib/network/http";
import { apiUrl } from "@/utils/config";
import { FeaturedItem, FlashDeal, HomeFooter, NewArrived } from "@/components/homecomponents/elements";

const Home = ({  }) => {
  const [openModal, setOpenModal] = useState(false);
  const [homeData, setHomeData] = useState(undefined);
  useEffect(() => {
    setOpenModal(true);
  }, []);


  const fetchHomeData = async (second) => {
    const response = await get("/home/data");
    setHomeData(response);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce App</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heroslider data={productData?.mainCarouselData} />
        <Container>
         {homeData?.results?.flashDeal && <FlashDeal data={homeData?.results?.flashDeal} />}
          {homeData?.["results"]?.["featured"].length !=0 && <FeaturedItem data={homeData?.["results"]?.["featured"]} />}
          <CategoryList data={homeData?.["results"]["categories"]} />
        </Container>
        <div></div>
        <Container>
          <NewArrived data={homeData?.["results"]?.["newArive"]} />
          <HomeFooter service={productData.serviceList} />
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

// export const getServerSideProps = async (ctx) => {
//   const resData = await fetch(`${apiUrl}/categories`);
//   const cate = await resData.json();

//   return {
//     props: {
//       cate,
//     },
//   };
// };
