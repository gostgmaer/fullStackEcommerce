import { ProfileDetails, UserCard } from "@/components/Usermodule/Profile";
import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { serverMethod } from "@/lib/network/http";
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
import { parse } from 'cookie';
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = ({data}) => {
  const [loading, setloading] = useState(true);
  const [open, setopen] = useState(true);
  const route = useRouter()
  const { user,userId } = useAuthContext();
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
            <Person color="error" />
            <span>My profile</span>
          </Typography>
          <Link className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={`/my-account/${data?.result?._id}/profile/edit`}>Edit Profile</Link>
        </Stack>
        <UserCard data={data.result} />
        <ProfileDetails data={data.result} />
      </Box>
    </Userlayout>
  );
};

export default Profile;





export const getServerSideProps = async (ctx) => {

  const {id} =  ctx.params
 const cookies = parse(ctx.req.headers.cookie || '');
 const token = cookies["headerPayload"] + "." + cookies["signature"];
 const params = {
  method:"get",
  token:token
 }
 const data = await serverMethod(`/users/${id}`, params);

  return {
    props: {
    data
    },
  };
};