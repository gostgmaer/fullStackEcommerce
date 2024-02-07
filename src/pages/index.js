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
import { get, serverMethod } from "@/lib/network/http";
import { FeaturedItem, FlashDeal, HomeFooter, NewArrived } from "@/components/homecomponents/elements";
import { baseurl } from "@/config/setting";
import { useSession } from "next-auth/react";

const Home = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const [homeData, setHomeData] = useState(undefined);

  const { data: session, status } = useSession();



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

  const params = {
    method: "get"
  }
  const category = await serverMethod('/public/categories', params)
  const resdata = await serverMethod('/public/home/data', params)

  const result = {
    featured: resdata.results.featured,
    flashDeal: resdata.results.flashDeal,
    newArive: resdata.results.flashDeal,
    categories: category.results
  }
  const pageData = {
    title: "Ecommerce website/APP"
  }

  const data = {
    ...resdata, results: result
  }

  // Pass data to the page via props
  return {
    props: { data, pageData }
  }

}