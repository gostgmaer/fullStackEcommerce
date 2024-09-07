// import Orderlist from "@/components/Usermodule/Orderlist";
// import Userlayout from "@/layout/user";

// import { Person, ShoppingBag } from "@mui/icons-material";
// import { Box, Pagination, Typography } from "@mui/material";
// import { getSession } from "next-auth/react";
// import Head from "next/head";

// const Orders = (props) => {
//   return (
//     <Userlayout  user={props.session}>
//        <Head>
//         <title>
//          Ecommerce {props.session.user.name} Order List
//         </title>
//       </Head>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"flex-start"}
//         gap={3}
//       >
//         <Typography
//           fontWeight={600}
//           width={"100%"}
//           fontSize={20}
//           sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
//         >
//           <ShoppingBag color="error" />
//           <span>My Orders</span>
//         </Typography>
//         <Orderlist user={props.session} />
       
//       </Box>
//     </Userlayout>
//   );
// };

// export default Orders;

// // export const getServerSideProps = async (ctx) => {
// //   const session = await getSession(ctx);
// //   // ///console.log(session);
// //   if (!session) {
// //     return {
// //       redirect: {
// //         destination: `/auth/signin?callbackUrl=${appBaseUrl}/order`,
// //         parmanent: false,
// //       },
// //     };
// //   }

// //   return {
// //     props: {
// //       session,
// //       data: session ? "List of 100 pro blog" : "list of free blogs",
// //     },
// //   };
// // };



// export const getServerSideProps = async (ctx) => {

//   const session = await getSession(ctx);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/signin',
//         permanent: false,
//       },
//     };
//   } else {
//     // const cookies = parse(ctx.req.headers.cookie || '');
//     // const token = cookies["headerPayload"] + "." + cookies["signature"];
//     // const params = {
//     //   method: "get",
//     //   token: token
//     // }
//     // const result = await serverMethod(`/user/auth/profile`, params);

//     // const data = result.result
//     return {
//       props: {
//         session
//       },
//     };
//   }
// };


import Layout from '@/components/global/layout/Layout'
import React from 'react'


const Index = () => {
  return (
    <Layout  >

      <div></div>

    </Layout>
  )
}

export default Index