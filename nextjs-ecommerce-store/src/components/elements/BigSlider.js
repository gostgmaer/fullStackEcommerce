import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigSlider = () => {
  return (
    <Grid
      container
      item
      sx={{
        // display: "flex",
        // mx: 10,
        justifyContent: "space-between",
        
        // alignItems: "center",
        gap: 5,
        "&>.MuiGrid-item": {
          display: "flex",
          justifyContent: "center",
        },
      }}
      columns={12.6}
    >
      <Grid item xs={6} className="images">
        <Link href={`/product/${245}`}>
          <Image
            src={"/assets/images/nike-black.png"}
            alt=""
            className=" rounded"
            style={{objectFit:'contain'}}
            width={"500"}
            height={"420"}
          />
        </Link>
      </Grid>
      <Grid item xs={6} pr={6}>
        <Box
          className="title"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2">50% Off For Your First Shopping</Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            harum molestiae nobis laboriosam quia, natus ipsam itaque! Deleniti
            nisi adipisci odio mollitia accusamus maxime ducimus dicta,
            accusantium, reiciendis natus exercitationem?
          </Typography>
          <Button variant="outlined"> Show Now </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BigSlider;
