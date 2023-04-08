import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import Userlayout from "@/layout/user";
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
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const UpdateProfile = () => {
  const route = useRouter()
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Box width={"100%"}>
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
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            color="error"
            onClick={()=>route.push(`/profile`)}
          >
            Back to Profile
          </Button>
        </Stack>
        </Box>
        <ProfileupdateForm></ProfileupdateForm>
      </Box>
    </Userlayout>
  );
};

export default UpdateProfile;



export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}