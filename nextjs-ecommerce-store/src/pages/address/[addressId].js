import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import Userlayout from "@/layout/user";
import { LocationOn, Person } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  Grid,
  IconButton,
  TextField,
  colors,
} from "@mui/material";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const UpdateAddress = () => {
  const route = useRouter();
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
              <LocationOn color="error" />
              <span>Edit Address</span>
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              color="error"
              onClick={() => route.push(`/address`)}
            >
              Back to Address
            </Button>
          </Stack>
        </Box>
        <UpdateAddressForm />
      </Box>
    </Userlayout>
  );
};

export default UpdateAddress;

const UpdateAddressForm = (params) => {
  return (
    <Box width={"100%"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          py: 2,
          gap: 2.5,
          width: "100%",
          p: 2,
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
            "&>.MuiGrid-item": {
              p: 0,

              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
          }}
          spacing={2}
          columns={17}
        >
          <Grid item xs={8}>
            <TextField
              id="addressName"
              name="addressName"
              label="Name"
              fullWidth
              size="small"
              variant="outlined"
            />
            <TextField
              id="addressline1"
              name="addressline1"
              label="Address"
              size="small"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="addresscity"
              name="addresscity"
              label="City"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="addressphone"
              size="small"
              name="addressphone"
              fullWidth
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              id="countryaddress"
              name="countryaddress"
              fullWidth
              size="small"
              label="Country"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
          }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            color="error"
          >
            Save Changes
          </Button>
        </Stack>
      </Paper>{" "}
    </Box>
  );
};
