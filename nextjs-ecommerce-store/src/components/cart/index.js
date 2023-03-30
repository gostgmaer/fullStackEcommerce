import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Divider from "@mui/material/Divider";

import { Grid, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useGlobalContext } from "@/context/globalContext";

export default function SwipeableTemporaryDrawer() {
  const { state, setState } = useGlobalContext();

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const Content = () => (
    <Box
      sx={{ width: 320 }}
      role="figure"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
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
          <Close />
        </IconButton>
      </Grid>
      <Divider />
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        hideBackdrop={true}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {state && <Content />}
      </SwipeableDrawer>
    </div>
  );
}
