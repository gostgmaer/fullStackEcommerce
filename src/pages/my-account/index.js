import Orderlist from "@/components/Usermodule/Orderlist";
import Userlayout from "@/layout/user";

import { Person, ShoppingBag } from "@mui/icons-material";
import { Box, Pagination, Typography } from "@mui/material";
import { getSession } from "next-auth/react";

const Orders = () => {
  return (
    <Userlayout>
     <div></div>
    </Userlayout>
  );
};

export default Orders;

export const getServerSideProps = async (ctx) => {
    
    return {
        redirect: {
          destination: `/not-found`,
          parmanent: true,
        },
      };
};
