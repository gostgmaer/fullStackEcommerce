
// import ProductListing from "@/components/searchPage";
// import Layout from "@/layout";
import Layout from "@/components/global/layout/Layout";
import Head from "next/head";
import { redirect } from 'next/navigation';

const Index = async (props) => {
// /////console.log(props);

  const result = await getRecord(props)
  return (
    <Layout>
      <Head>
        <title>Search Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </Layout>
  );
};

export default Index;



export const getRecord = async (slug) => {

  const params = {
    method: "get",
    header: {},
    query: {}
  };

  redirect('/product/search');

}