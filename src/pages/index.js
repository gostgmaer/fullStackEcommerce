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
import { FeaturedItem, FlashDeal, HomeFooter, NewArrived } from "@/components/homecomponents/elements";
import { baseurl } from "@/config/setting";
import { useSession } from "next-auth/react";

const Home = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const [homeData, setHomeData] = useState(undefined);

  const { data: session, status } = useSession();

  // URL to extract query parameters from
  const url = "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.processor_brand%255B%255D%3DMediatek&otracker=nmenu_sub_Electronics_0_Realme&p%5B%5D=facets.sim_type%255B%255D%3DDual%2BSim&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.operating_system%255B%255D%3DAndroid&p%5B%5D=facets.screen_size%255B%255D%3D6.4%2Binch%2B%2526%2BAbove&p%5B%5D=facets.battery_capacity%255B%255D%3D4000%2B-%2B4999%2BmAh&p%5B%5D=facets.network_type%255B%255D%3D2G&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.brand%255B%255D%3DOPPO&p%5B%5D=facets.offer_type%255B%255D%3DNo%2BCost%2BEMI&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.ram%255B%255D%3D6%2BGB&p%5B%5D=facets.resolution_type%255B%255D%3DFull%2BHD";

  // Function to extract query parameters from the URL
  function getQueryParams(url) {
    const params = new URL(url).searchParams;
    const queryParams = {};
    console.log(params);

    params.forEach((value, key) => {
      console.log(key);
      queryParams[key] = value;
    });

    return queryParams;
  }

  // Get query parameters from the URL
  const queryParams = getQueryParams(url);

  // Convert the object to JSON
  const jsonParams = JSON.stringify(queryParams, null, 2);

  // Display the JSON
  console.log(jsonParams);



  // console.log(props);

  // const fetchHomeData = async () => {
  //   const response = await get("/home/data");
  //   setHomeData(response);
  // };

  // useEffect(() => {
  //   fetchHomeData();
  // }, []);

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
          {<FlashDeal data={props.data?.results?.flashDeal} />}
          {props.data?.["results"]?.["featured"].length != 0 && <FeaturedItem data={props.data?.["results"]?.["featured"]} />}
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
