// import Userlayout from "@/layout/user";
// import { get, getsingle, serverMethod } from "@/lib/network/http";
// import { parse } from 'cookie';
// import { Person } from "@mui/icons-material";
// import {
//   Backdrop,
//   Box,
//   Button,
//   CircularProgress,
//   Paper,
//   Stack,
//   Typography,
//   colors,
// } from "@mui/material";

// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { ProfileDetails, UserCard } from "@/components/Usermodule/Profile";
// import { getSession } from "next-auth/react";
// const Profile = ({ data,session }) => {
//   return (
//     <Userlayout  user={session}>
//       <Head>
//         <title>My Account Information</title>
//         <meta name="description" content={"This page used for update user profile information details"} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />

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
//             <Person color="error" />
//             <span>My profile</span>
//           </Typography>
//           <Link href={`/my-account/${data?._id}/profile/edit`} className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 text-center px-4 rounded">
//             Edit Profile
//           </Link>
//         </Stack>
//         {data && (
//           <div className=" w-full flex flex-col  gap-5">
//             <UserCard data={data} />
//             <ProfileDetails data={data} />
//           </div>
//         )}
//       </Box>
//     </Userlayout>
//   );
// };

// export default Profile;




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
//     const cookies = parse(ctx.req.headers.cookie || '');
//     const token = cookies["headerPayload"] + "." + cookies["signature"];
//     const params = {
//       method: "get",
//       token: token
//     }
//     const result = await serverMethod(`/user/auth/profile`, params);

//     const data = result.result
//     return {
//       props: {
//         data,session
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