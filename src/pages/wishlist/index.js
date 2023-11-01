/* eslint-disable react-hooks/exhaustive-deps */
import Wishlist from "@/components/Usermodule/Wishlist";
import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { appBaseUrl } from "@/utils/config";
import { Favorite } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

import { useEffect } from "react";

const Index = () => {
  const { protectedRouteCheck, pageLoading } = useAuthContext();
  useEffect(() => {
    protectedRouteCheck();
  }, []);

  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
          >
            <Favorite color="error" />
            <span>My Wishlist</span>
          </Typography>
        </Stack>
        <Wishlist />
      </Box>
    </Userlayout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {

  return {
    redirect: {
      destination: `/auth/signin?callbackUrl=${appBaseUrl}${ctx.resolvedUrl}`,
      parmanent: false,
    },
  };
  
};
