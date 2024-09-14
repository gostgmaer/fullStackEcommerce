// import ChangePassword from "@/components/forms/auth/changePassword";
// import Userlayout from "@/layout/user";

// import { Person, ShoppingBag } from "@mui/icons-material";
// import { Box, Typography } from "@mui/material";
// import { getSession } from "next-auth/react";

// const Orders = (props) => {
//   return (
//     <Userlayout user={props.session}>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"flex-start"}
//         width={'100%'}
//         gap={3}
//       >
//         <Typography
//           fontWeight={600}
//           width={"100%"}
//           fontSize={24}
//           sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
//         >

//           Changed Password
//         </Typography>
//         <ChangePassword />
//       </Box>
//     </Userlayout>
//   );
// };

// export default Orders;

// // export const getServerSideProps = async (ctx) => {
// //   const session = await getSession(ctx);
// //   // /////console.log(session);
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


import Userlayout from '@/components/elements/user'
import ChangePassword from '@/components/global/common/forms/chnagePassword'
import Layout from '@/components/global/layout/Layout'
import React from 'react'


const Index = () => {
  return (
    <Layout  >

      <Userlayout>
        <ChangePassword/>
      </Userlayout>

    </Layout>
  )
}

export default Index