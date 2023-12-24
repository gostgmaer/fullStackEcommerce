import { baseurl } from "@/config/setting";
import Layout from "@/layout";
import { post } from "@/lib/network/http";
import { Check, CheckBoxRounded, Shop } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Index = ({data}) => {
  const searchparama = useSearchParams();
  const router = useRouter();

//console.log(data);

  return (
    <Layout>
    <Head>
    <title>Payment Success </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <Box
        px={5}
        height={"100%"}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        py={5}
        component={"div"}
      >
        <Paper variant="outlined" sx={{ width: "55%", borderRadius: 5 }}>
          <Stack gap={2} p={8} sx={{ alignItems: "center" }}>
            <CheckBoxRounded sx={{ fontSize: 75, color: "green" }} />
            <Typography fontSize={"2rem !important"} variant="h1">
              Your order is completed!
            </Typography>
            <Typography>
              You will be receiving confirmation email with order details.
            </Typography>
            <p>{JSON.stringify(data)}</p>
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={() => router.push("/")}
              sx={{ mt: 2, textTransform: "capitalize" }}
            >
              Browse Products
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Index;



export async function getServerSideProps(ctx) {
  try {
    const { query } = ctx;

   

    const response = await axios.post(baseurl + "/payment/checkout/process/complete", query);

    return {
      props: {
        data: response.data, // Assuming you want to pass the response data
      },
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      props: {
        data: null, // You might want to handle errors appropriately
      },
    };
  }
}