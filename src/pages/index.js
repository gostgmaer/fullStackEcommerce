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
import { baseurl } from "@/config/setting";

const Home = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const [homeData, setHomeData] = useState(undefined);

  console.log(props);

  const fetchHomeData = async () => {
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
         {homeData?.results?.flashDeal && <FlashDeal data={props.data?.results?.flashDeal} />}
          {props.data?.["results"]?.["featured"].length !=0 && <FeaturedItem data={props.data?.["results"]?.["featured"]} />}
          <CategoryList data={props.data?.["results"]["categories"]} />
        </Container>
        <div></div>
        <Container>
          <NewArrived data={props.data?.["results"]?.["newArive"]} />
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${baseurl}/home/data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}

// export const getServerSideProps = async () => {
//   const resData = await fetch(`http://localhost:3500/api/home/data`);
//   const homeData = await resData.json();
//   return {
//     props: {
//       homeData,
//     },
//   };
// };
