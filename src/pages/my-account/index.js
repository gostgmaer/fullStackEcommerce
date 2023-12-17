import Orderlist from "@/components/Usermodule/Orderlist";
import { withAuthServerSideProps } from "@/helper/auth";
import Userlayout from "@/layout/user";
import authenticateMiddleware from "@/middleware/auth";

import { Person, ShoppingBag } from "@mui/icons-material";
import { Box, Pagination, Typography } from "@mui/material";
import { getSession } from "next-auth/react";

const Orders = ({session}) => {
  return (
    <Userlayout>
     <div></div>
    </Userlayout>
  );
};

export default Orders;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/signin',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user: session.user },
//   };
// }


