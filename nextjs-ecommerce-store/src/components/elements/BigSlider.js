import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigSlider = () => {
  return (
    <Box className="md:px-20 grid md:grid-cols-2">
      <Box className="images">
        <Link href={`/product/${245}`}>
          <Image
            src={"/assets/images/nike-black.png"}
            alt=""
            className=" rounded"
            width={"500"}
            height={"420"}
          />
        </Link>
      </Box>
      <Box className="info flex justify-center px-4 flex-col">
        <Box
          className="title"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Typography variant="h2">50% Off For Your First Shopping</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            lobortis consequat eu, quam etiam at quis ut convalliss.
          </Typography>
          <Button variant="outlined"> Show Now </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BigSlider;
