import { allproducts, productData } from "@/assets/mock/product";
import Info from "@/components/products/Productdetails/Info";
import Related from "@/components/products/Productdetails/Related";
import ProductDetails from "@/components/products/Productdetails/details";
import { baseurl } from "@/config/setting";
import Layout from "@/layout";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

const Index = ({ data }) => {
  // const data = allproducts;
  const params = useParams();

  // const product = data.find((data) => data.slug === params?.["productId"]);
  // const relatedProduct = data;
   console.log(data);
  return (
    <>
      <Head>
        <title>{data.results.currentProd?.title}</title>
        <meta name="description" content={data.results.descriptions} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <Layout>
        <Container  component={"div"} className=" my-20" >
          <Info data={data.results.currentProd} />
          <ProductDetails data={data.results.currentProd} />
          <Related data={data.results.related} />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const id = ctx.params["productId"];
  const resData = await fetch(`${baseurl}/public/product/details?slug=${id}`);
  const data = await resData.json();
  return {
    props: {
      data,
    },
  };
};
