import { ArrayData } from "@/assets/mock/product";
import { Check, ShoppingBag } from "@mui/icons-material";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import CheckIcon from "@mui/icons-material/Check";
// import Box from '@mui/joy/Box';
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
// import Typography from '@mui/joy/Typography';
import { Box, Grid, Rating, Typography, colors, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ImageSlider from "./details/ImageSlider";
import { CartAddItems } from "@/components/global/products/Cart";


const Info = ({data}) => {
  // const [selected, setSelected] = useState(true);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState("");

  return (
    <Box width={"100%"}>
      <Grid
        container
        gap={5}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        columns={16.6}
      >
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          alignItems="center"
          gap={"10px"}
          flexDirection="column"
          item
          xs={8}
        >
          {/* <Image
            width={500}
            height={420}
            style={{ objectFit: "contain" }}
            alt="Xamaha R15 Black"
            src="/assets/images/nike-black.png"
          ></Image>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
            gap={"5px"}
          >
            {ArrayData.slice(0, 6).map((item) => (
              <Image
                key={item}
                width={70}
                height={50}
                style={{ objectFit: "contain", border: "1px solid grey" }}
                alt="Xamaha R15 Black"
                src="/assets/images/nike-black.png"
              ></Image>
            ))}
          </Box> */}
          <ImageSlider />
        </Grid>
        <Grid
          display={"flex"}
          alignItems="flex-start"
          gap={"15px"}
          flexDirection="column"
          item
          xs={8}
        >
          <Box
            display={"flex"}
            alignItems="flex-start"
            gap={"5px"}
            flexDirection="column"
          >
            <Typography variant="h1" className=" !text-4xl">{data.title} </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              variant="body1"
            >
              Brand: <span>{data.brand}</span>
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              variant="body1"
            >
              Rating:
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />{" "}
              <span> (20)</span>
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <strong>Option:</strong>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <RadioGroup
                  name="best-movie"
                  aria-labelledby="best-movie"
                  orientation="horizontal"
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  {["Star trek", "Batman", "Spider man"].map((name) => {
                    const checked = selected === name;
                    return (
                      <Chip
                        key={name}
                        variant={checked ? "solid" : "plain"}
                        color={checked ? "primary" : "neutral"}
                      >
                        <Radio
                          variant="outlined"
                          color={checked ? "" : "neutral"}
                          disableIcon
                          overlay
                          label={name}
                          value={name}
                          checked={checked}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSelected(name);
                            }
                          }}
                        />
                      </Chip>
                    );
                  })}
                </RadioGroup>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <strong>Type: </strong>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <RadioGroup
                  name="best-movie"
                  aria-labelledby="best-movie"
                  orientation="horizontal"
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  {["Thor", "The hulk"].map((name) => {
                    const checked = type === name;
                    return (
                      <Chip
                        key={name}
                        variant={checked ? "solid" : "plain"}
                        color={checked ? "primary" : "neutral"}
                      >
                        <Radio
                          variant="outlined"
                          color={checked ? "" : "neutral"}
                          disableIcon
                          overlay
                          label={name}
                          value={name}
                          checked={checked}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setType(name);
                            }
                          }}
                        />
                      </Chip>
                    );
                  })}
                </RadioGroup>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            alignItems="flex-start"
            gap={"5px"}
            flexDirection="column"
          >
           <div className="price-wrapper">
                <p className="price font-semibold text-red-500 flex gap-3 items-end">
                  <span className=" text-lg flex  items-end">
                    $
                    <span className=" ">
                      {data?.discount
                        ? data?.price.toFixed(2) -
                        data?.discount.toFixed(2)
                        : data?.price.toFixed(2)
                        ? data?.price.toFixed(2)
                        : data?.price.toFixed(2)}
                    </span>
                  </span>

                  <span className=" line-through text-gray-500 ">
                    ${data?.price ? data?.price.toFixed(2) : "$0.00"}
                  </span>
                  {data?.discount && (
                    <span className=" text-green-500 top-3 left-3">
                      {data?.discount &&
                        ((100 / data?.price) * data?.discount).toFixed(2)}
                      % off
                    </span>
                  )}
                </p>
              </div>
            <Typography
              sx={{
                color: colors.grey[800],
              }}
              gutterBottom
              variant="subtitle1"
            >
              Stock is avaliable
            </Typography>
          </Box>
              <CartAddItems product={data}/>
          <Typography
            sx={{
              color: colors.grey[800],
            }}
            gutterBottom
            variant="subtitle1"
          >
            Soldby: <strong>Mobile Store</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
