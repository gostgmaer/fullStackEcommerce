import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigSlider = ({ data }) => {
  // //console.log(data);
  return (
    <Grid
      container
      className={`  h-screen bg-cover bg-no-repeat bg-top bg-fixed bg-gray-800`}
      sx={{
        // display: "flex",
        // mx: 10,
        justifyContent: "space-between",

        // alignItems: "center",
        gap: 5,
        "&>.MuiGrid-item": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      columns={12.7}
    >
      <div className="z-10 flex px-40 items-center justify-between">
        <Grid item xs={6} className="images  text-white ">
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
            <Typography variant="h3">{data.title}</Typography>
            <Typography>
              {data.description
                ? data.description
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss."}
            </Typography>
            <Button variant="outlined" className=" hover:bg-black">
              {" "}
              {data?.buttonText ? data.buttonText : "Show Now"}{" "}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} pr={6}></Grid>
      </div>
      {data?.imgUrl && (
        <img
          src={`${data.imgUrl}`}
          alt={data.title}
          className="w-full h-full object-cover absolute -z-0 object-top bg-gray-800 opacity-60"
        />
      )}
      {data?.video && (
        <video
          src={data.video}
          className="w-full h-full object-cover absolute -z-0 object-top bg-gray-800 opacity-60"
        ></video>
      )}
    </Grid>
  );
};

export default BigSlider;

export const MiddleContent = ({ data }) => {
  return (
    <Grid
      container
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
      columns={12.7}
    >
      <Grid item xs={6} className="images">
        <Link href={`/product/${data.buttonLik}`}>
          <Image
            src={"/assets/images/nike-black.png"}
            alt=""
            className=" rounded"
            style={{ objectFit: "contain" }}
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
          <Typography variant="h3">{data.title}</Typography>
          <Typography>
            {data.description
              ? data.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss."}
          </Typography>
          <Button variant="outlined">
            {" "}
            {data?.buttonText ? data.buttonText : "Show Now"}{" "}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
