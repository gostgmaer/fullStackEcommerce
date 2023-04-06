import ProfileupdateForm from "@/components/Usermodule/ProfileupdateForm";
import Layout from "@/layout";
import MuiModal from "@/layout/modal";
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
const AddressAddForm = () => {
  return (
    <Box width={"100%"}>
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
          justifyContent: "center",

          gap: 2.5,
          width: "100%",
          p: 1,
          mt: 2,
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
          Add Address
        </Button>
      </Stack>
    </Box>
  );
};

export default AddressAddForm;
