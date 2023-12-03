import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { get, getsingle } from "@/lib/network/http";

import { Person } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import moment from "moment";
import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, userId, getUserData, profile } = useAuthContext();
  const [loading, setloading] = useState(true);
  const [open, setopen] = useState(true);
  // const [profile, setProfile] = useState(undefined);
  const route = useRouter();

  // const getUserData = async () => {
  //   const data = await get(`/user/auth/profile`);
  //   setProfile(data);
  // };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Userlayout>
        <Head>
        <title>My Account Information</title>
        <meta name="description" content={"This page used for update user profile information details"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
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
            <Person color="error" />
            <span>My profile</span>
          </Typography>
          <Link href={`/my-account/${userId?.user_id}/profile/edit`}>
            Edit Profile
          </Link>
        </Stack>
        {profile && (
          <div className=" w-full flex flex-col gap-5">
            <UserCard user={profile} />
            <ProfileDetails user={profile} />
          </div>
        )}
      </Box>
    </Userlayout>
  );
};

export default Profile;

const UserCard = ({ user }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "45%",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            width={75}
            height={75}
            className=" w-20 h-20 object-cover"
            style={{ borderRadius: "50%" }}
            src={user?.["profilePicture"]}
            alt=""
          />
          <Stack>
            <strong>
              {user?.firstName} {user?.lastName}
            </strong>
            <span>Balance: $5421</span>
          </Stack>
        </Box>
        <Typography color={colors.red[300]} variant="button">
          Silver User
        </Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Total order{" "}
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 14,
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Delivared
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          fontSize: 14,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Cancel
      </Paper>
    </Stack>
  );
};

const ProfileDetails = ({ user }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          py: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          First Name: <span>{user?.firstName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Last Name: <span>{user?.lastName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Email: <span>{user?.email}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Phone: <span>{user?.phoneNumber}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Date of Birth:{" "}
          <span>{moment(user?.dateOfBirth).format("DD/MM/YYYY")}</span>
        </Typography>
      </Paper>
    </Stack>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   // console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: `/auth/signin?callbackUrl=${appBaseUrl}/profile`,
//         parmanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "List of 100 pro blog" : "list of free blogs",
//     },
//   };
// };
