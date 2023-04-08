import Head from "next/head";
import Layout from "@/layout";
import { Box } from "@mui/material";
import BodySection from "@/components/searchPage/Bodysection";
import FilterSection from "@/components/searchPage/Topsection";


const SearchbyCategory = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box p={3} component={"div"}>
          <FilterSection />
          <BodySection />
        </Box>
      </Layout>
    </>
  );
};

export default SearchbyCategory;


