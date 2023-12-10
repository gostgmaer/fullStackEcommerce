import Layout from "@/layout";
import { post } from "@/lib/network/http";
import { Check, CheckBoxRounded, Shop } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Index = () => {
  const searchparama = useSearchParams();
  const router = useRouter();

  //   const { pathname, query } = useRouter()

  const handleSuccessExecution = async () => {
    // console.log(query);

    const prams = {
      token: searchparama.get("token"),
      paymentId: searchparama.get("paymentId"),
      payerId: searchparama.get("PayerID"),
    };
    const request = await post("/payment/checkout/process/complete", prams);
    console.log(request);
  };

  useEffect(() => {
    handleSuccessExecution();
  }, []);

  return (
    <Layout>
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
