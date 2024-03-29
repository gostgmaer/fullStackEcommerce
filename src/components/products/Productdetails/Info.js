import { Check, KeyboardArrowDown, ShoppingBag } from "@mui/icons-material";
import { Box, Grid, Rating, Typography, colors, Button } from "@mui/material";
import React from "react";
import { CartAddItems } from "@/components/global/products/Cart";
import { Select, selectClasses, Option } from "@mui/joy";
import Link from "next/link";

import {SingleImageslider} from "@/components/global/products/slider";
const Info = ({ data }) => {
  return (
    <Box width={"100%"}>
      <Grid
        container
        gap={2}
      alignItems={'flex-start'}
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
          className=" h-[525px]"
          xs={8}
        >
          {/* <CustomImageSlider images={data.images} /> */}
          <SingleImageslider images={data.images} />
          {/* <SLiderDomp images={data.images}/> */}
        </Grid>
        <Grid
          display={"flex"}
          alignItems="flex-start"
          gap={"15px"}
          flexDirection="column"
          item
          zIndex={10}
          xs={8}
        >
          <Box
            display={"flex"}
            alignItems="flex-start"
            gap={"8px"}
            flexDirection="column"
          >
            <Typography variant="h1" className=" !text-2xl">
              {data?.title}{" "}
            </Typography>
            <div className="border-t border-gray-300 my-1 w-10 border-2"></div>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              variant="body1"
            >
              Rating:
              <Rating
                name="half-rating-read"
                defaultValue={data?.averageRating.toFixed(1)}
                precision={0.1}
                readOnly
              />
              <span>({data.totalReviews}) </span>
            </Typography>

            <div className="price-wrapper">
              <p className="price font-semibold text-red-500 flex gap-3 items-end">
                <span className=" text-lg flex  items-end">
                  $
                  <span className=" ">
                    {data?.salePrice
                      ? data?.salePrice.toFixed(2)
                      : data?.price.toFixed(2)}
                  </span>
                </span>

                <span className=" line-through text-gray-500 ">
                  ${data?.price ? data?.price.toFixed(2) : "$0.00"}
                </span>
                {data?.salePrice && (
                  <span className=" text-green-500 top-3 left-3">
                    {data?.salePrice &&
                      ((100 / data?.price) * data?.salePrice).toFixed(2)}
                    % off
                  </span>
                )}
              </p>
            </div>
            <div className="product-short-description">
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: colors.grey[800],
                }}
                gutterBottom
                variant="subtitle1"
              >
                Stock is avaliable
              </Typography>
              <Box
                width={"100%"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <span className="flex-1">Option:</span>
                <Select
                  className="flex-2"
                  placeholder="Select a Options"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    flex: 2,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  {["Star trek", "Batman", "Spider man"].map((name, index) => (
                    <Option key={index} value={name}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Box>
              <Box
                width={"100%"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="flex-1">Type: </span>
                <Select
                  className="flex-[2]"
                  placeholder="Select a Type"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    flex: 2,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  {["Thor", "The hulk"].map((name, index) => (
                    <Option key={index} value={name}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Box>
            </Box>
            <CartAddItems product={data} />

            <div className="border-t border-gray-300 my-4 border-1 w-1 "></div>

            <div className="product_meta">
              <Typography
                sx={{
                  color: colors.grey[800],
                }}
                variant="subtitle1"
              >
                SKU: <span>{data?.sku}</span>
              </Typography>
              <Typography
                sx={{
                  color: colors.grey[800],
                }}
                variant="subtitle1"
                className=" flex gap-2 items-center"
              >
                Category:{" "}
                <p className="category text-xs font-semibold uppercase is-smaller no-text-overflow product-cat p-1 cursor-pointer">
                  {data?.categories?.map((category) => (
                    <Link
                      href={`/product/search?category:${category.slug}`}
                      key={category._id}
                    >
                      {category.name}
                    </Link>
                  ))}
                </p>
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: colors.grey[800],
                }}
                variant="subtitle1"
              >
                Brand: <span>{data?.brandName?.name}</span>
              </Typography>
              {/* <Typography
                sx={{
                  color: colors.grey[800],
                }}
           
                variant="subtitle1"
              >
                Soldby: <strong>Mobile Store</strong>
              </Typography> */}
              <Typography
                sx={{
                  color: colors.grey[800],
                }}
                variant="subtitle1"
              >
                Tags:{" "}
                <span className=" font-medium">{data.tags.toString()}</span>
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;

const Showtextdata = ({ params }) => {
  //  console.log(params.length);
  return (
    <>

      <span>({params.length}) </span>{" "}
    </>
  );
};




