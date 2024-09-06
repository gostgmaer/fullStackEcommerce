// import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
// import { useAuthContext } from "@/context/AuthContext";
// import Layout from "@/layout";
// import Cookies from "js-cookie";
// import { parse } from 'cookie';
// import Userlayout from "@/layout/user";
// import { get, serverMethod } from "@/lib/network/http";
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
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { getSession } from "next-auth/react";
// const UpdateProfile = (props) => {
//   const route = useRouter();
//   // const { userId,profile } = useAuthContext();
//   // const [userData, setUserData] = useState(undefined);

//   // const getUserData = async () => {
//   //   const request = await get(`/user/auth/profile`);
//   //   setUserData(request.result);
//   // };

//   // useEffect(() => {
//   //   getUserData();
//   // }, []);

//   return (
//     <Userlayout user={props.session}>
//       <Head>
//         <title>Profile Update</title>
//         <meta name="description" content={"This page used for update user profile information details"} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
      
//       </Head>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         alignItems={"flex-start"}
//         gap={3}
//       >
//         <Box width={"100%"}>
//           <Stack
//             direction={"row"}
//             width={"100%"}
//             justifyContent={"space-between"}
//           >
//             <Typography
//               fontWeight={600}
//               fontSize={20}
//               sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
//             >
//               <Person color="error" />
//               <span>My profile</span>
//             </Typography>
//             <Button
//               variant="outlined"
//               sx={{ textTransform: "capitalize" }}
//               color="error"
//               onClick={() =>
//                 route.push(`/my-account/${props.session.user?.id}/profile`)
//               }
//             >
//               Back to Profile
//             </Button>
//           </Stack>
//         </Box>
//         <ProfileupdateForm userData={props.data}></ProfileupdateForm>
//       </Box>
//     </Userlayout>
//   );
// };

// export default UpdateProfile;

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