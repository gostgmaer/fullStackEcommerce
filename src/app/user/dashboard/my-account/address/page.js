// import AddressAddForm from "@/components/Usermodule/AddressAddForm";
// import Addresslist from "@/components/Usermodule/Addresslist";
// import { baseurl } from "@/config/setting";
// import { useGlobalContext } from "@/context/globalContext";
// import MuiModal from "@/layout/modal";
// import Userlayout from "@/layout/user";
// import { fetcher, useFetcher, useGetFetcher } from "@/lib/helper";
// import { get } from "@/lib/network/http";
// import { useAxios } from "@/lib/network/interceptors";

// import { Close, LocationOn } from "@mui/icons-material";
// import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
// import { getSession } from "next-auth/react";
// import Head from "next/head";
// import { useState } from "react";

// const Address = (props) => {
//   // const session = useSession();

//   const [openModal, setOpenModal] = useState(false);
//   const [axios, spinner] = useAxios();

//   return (
//     <Userlayout  user={props.session}>
//       <Head>
//         <title>
//          Ecommerce {props.session.user.name} Address
//         </title>
//       </Head>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"flex-start"}
//         gap={3}
//       >
//         <Stack
//           direction={"row"}
//           width={"100%"}
//           justifyContent={"space-between"}
//         >
//           <Typography
//             fontWeight={600}
//             fontSize={20}
//             sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
//           >
//             <LocationOn color="error" />
//             <span>My Address</span>
//           </Typography>
//           <Button
//             variant="outlined"
//             sx={{ textTransform: "capitalize" }}
//             color="error"
//             onClick={() => setOpenModal(true)}
//           >
//             Add New Address
//           </Button>
//         </Stack>
//         <MuiModal
//           heading={{ title: "Please add a Address", icon: <Close /> }}
//           Content= <AddressAddForm
//             address={undefined}
//             setOpenModal={setOpenModal}
//           />
//           classes={undefined}
//           maxWidth={"sm"}
//           openModal={openModal}
//           setOpenModal={setOpenModal}
//         />
//         <Addresslist />
//       </Box>
//       {spinner}
//     </Userlayout>
//   );
// };

// export default Address;

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


import React from 'react'

const Page = () => {
  return (
    <div>page</div>
  )
}

export default Page