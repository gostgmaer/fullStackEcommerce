import Layout from "@/layout";
import { Check, CheckBoxRounded, Shop } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter()
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
              onClick={()=>router.push('/')}
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
