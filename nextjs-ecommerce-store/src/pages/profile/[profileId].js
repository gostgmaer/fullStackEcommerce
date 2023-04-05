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
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Box width={"100%"}>
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
          >
            <Person color="error" />
            <span>My profile</span>
          </Typography>
        </Box>
        <ProfileupdateForm></ProfileupdateForm>
      </Box>
    </Userlayout>
  );
};

export default UpdateProfile;
