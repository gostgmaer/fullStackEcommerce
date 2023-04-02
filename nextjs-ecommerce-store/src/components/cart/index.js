import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Divider from "@mui/material/Divider";

import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import {
  Add,
  AddCircleOutline,
  Close,
  HighlightOffOutlined,
  Remove,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { useGlobalContext } from "@/context/globalContext";
import { Fragment } from "react";
import Image from "next/image";
import { ArrayData } from "@/assets/mock/product";
import { useRouter } from "next/router";

export default function SwipeableTemporaryDrawer() {
  const { state, setState } = useGlobalContext();

  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const Content = () => (
    <Box
      sx={{
        width: 375,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",

        flexDirection: "column",
      }}
      role="figure"
    >
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px 15px",
          }}
        >
          <Typography variant="h6">Your Cart</Typography>
          <IconButton color="error" onClick={toggleDrawer(false)}>
            <HighlightOffOutlined />
          </IconButton>
        </Grid>
        <Divider />
        <Grid>
          {ArrayData.slice(0, 4).map((item) => (
            <Fragment key={item}>
              {" "}
              <HascartData />
              <Divider></Divider>
            </Fragment>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          p: "10px 15px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Button
          onClick={() => {
            router.push("/checkout");
            setState(false);
          }}
          variant="contained"
          color="error"
          fullWidth
        >
          Checkout ($54541.00)
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/cart");
            setState(false);
          }}
          color="error"
          fullWidth
        >
          View Cart
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        className="asdasde"
        anchor={"right"}
        hideBackdrop={false}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Content />
      </SwipeableDrawer>
    </div>
  );
}

const NoCartData = (params) => {
  return (
    <Stack spacing={2}>
      <Typography>No cart has been Add</Typography>
    </Stack>
  );
};

const HascartData = (params) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Stack
        gap={1}
        alignItems={"center"}
        sx={{
          "&>.MuiButton-outlined": {
          p:0,
            minHeight: 0,
            minWidth: 0,
            textTransform: "capitalize",
          },
        }}
      >
        <Button variant="outlined" color="error">
          <Add></Add>
        </Button>
        <Typography
          variant="body2"
          sx={{ mx: 0.5, fontWeight: 600, fontSize: 15 }}
        >
          2
        </Typography>
        <Button variant="outlined" color="error">
          <Remove></Remove>
        </Button>
      </Stack>
      <Box
        display={"flex"}
        gap={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          width={80}
          height={80}
          alt="product"
          src="/assets/images/nike-black.png"
        ></Image>
        <Stack gap={0} alignItems={"flex-start"}>
          <Typography>This is a Product Title</Typography>
          <Typography fontSize={14} variant="body1">
            <span>$201.00</span> x<span>1</span>
          </Typography>
          <Typography fontSize={14}>
            <span>$ 210.00</span>
          </Typography>
        </Stack>
        <IconButton color="error">
          <Close></Close>
        </IconButton>
      </Box>
    </Box>
  );
};
