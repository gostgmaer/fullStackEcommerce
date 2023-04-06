import Left from "@/components/Usermodule/Left";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, Grid, Stack } from "@mui/material";
import React, { Fragment } from "react";

const Userlayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box className="elements" minHeight={"100vh"} sx={{ width: "100%" }}>
        <Stack my={5} mx={4}>
          <Grid
            container
            spacing={2}
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            columns={16}
          >
            <Grid item xs={4}>
              <Left />
            </Grid>
            <Grid item xs={11.5}>
              {children}
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Userlayout;
