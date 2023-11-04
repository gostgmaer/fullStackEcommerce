import { useGlobalContext } from "@/context/globalContext";
import {
  Close,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Landingmodal = ({openModal, setOpenModal}) => {

  return (
    <Stack
      sx={{
        backgroundImage: "url(/assets/images/bg-1.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
      direction={"row"}
      alignItems={"flex-start"}
      gap={0}
    >
      <Grid container padding={"20px 5px"} spacing={2} columns={16}>
        <Grid item xs={8}></Grid>
        <Grid
          item
          xs={8}
          sx={{
            gap: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontSize={32}>
            UP TO 30% OFF
          </Typography>
          <Typography variant="h3" fontSize={42}>
            Sign up to Commerce
          </Typography>
          <Typography fontSize={16} py={2} textAlign={"center"}>
            Subscribe to the Gost eCommerce newsletter to receive timely
            updates from your favorite products.
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            id="emailaddressmodal"
            name="emailaddressmodal"
            placeholder="Enter your email address"
          ></TextField>
          <Button fullWidth color="error" variant="contained">
            Submit
          </Button>

          <Stack direction={"row"} py={2} justifyContent={"center"}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <IconButton sx={{m:1}} onClick={() => setOpenModal(null)}>
        <Close></Close>
      </IconButton>
    </Stack>
  );
};

export default Landingmodal;
