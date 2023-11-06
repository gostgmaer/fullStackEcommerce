import Orderlist from "@/components/Usermodule/Orderlist";
import Userlayout from "@/layout/user";
import { appBaseUrl } from "@/utils/config";
import { Person, ShoppingBag } from "@mui/icons-material";
import { Box, Pagination, Typography } from "@mui/material";
import { getSession } from "next-auth/react";

const Orders = () => {
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Typography
          fontWeight={600}
          width={"100%"}
          fontSize={20}
          sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
        >
          <ShoppingBag color="error" />
          <span>My Orders</span>
        </Typography>
        <Orderlist />
        <Box width={"100%"}  sx={{ display: "flex", gap: 0.5, alignItems: "center",justifyContent:'center' }}>
          <Pagination count={10} variant="outlined" />
        </Box>
      </Box>
    </Userlayout>
  );
};

export default Orders;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}/order`,
        parmanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 pro blog" : "list of free blogs",
    },
  };
};


