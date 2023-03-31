import { ArrayData } from "@/assets/mock/product";
import { ShoppingBag } from "@mui/icons-material";
import {
  Box,
  Grid,
  Rating,
  Typography,
  Chip,
  colors,
  Button,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Info = () => {
  const [selected, setSelected] = useState(true);
  return (
    <Box width={"100%"}>
      <Grid container alignItems={"center"} spacing={2} columns={16}>
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          alignItems="center"
          gap={"10px"}
          flexDirection="column"
          item
          xs={8}
        >
          <Image
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
          </Box>
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
            <Typography variant="h1">Xamaha R15 Black R15 </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              variant="body1"
            >
              Brand: <span>Xiaomi</span>
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
              <Typography variant="subtitle1">Option:</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {ArrayData.slice(0, 4).map((item) => (
                  <Chip
                    key={item}
                    label="Chip"
                    onClick={() => setSelected((s) => !s)}
                    color={selected ? "primary" : "default"}
                  />
                ))}
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
              <Typography variant="subtitle1">Type:</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {ArrayData.slice(0, 3).map((item) => (
                  <Chip
                    key={item}
                    label="Type"
                    onClick={() => setSelected((s) => !s)}
                    color={selected ? "primary" : "default"}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Box   display={"flex"}
          alignItems="flex-start"
          gap={"5px"}
          flexDirection="column">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 600 }}
                color={colors.red[500]}
                variant="body2"
              >
                $256.00
              </Typography>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
                color={colors.grey[400]}
                variant="body2"
              >
                $275.00
              </Typography>
              <Typography
                sx={{
                  color: colors.green[600],
                }}
                variant="body2"
              >
                18% off
              </Typography>
            </Box>
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
          <Button color="error" variant="contained" endIcon={<ShoppingBag />}>
            Add to Cart
          </Button>
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
