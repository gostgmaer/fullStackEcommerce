import { ArrayData } from "@/assets/mock/product";
import Layout from "@/layout";
import {
  Add,
  AddCircleOutline,
  Close,
  Remove,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
const CartItem = () => {
    return (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            p: 1,
            "&.MuiPaper-root:hover": {
              backgroundColor: colors.blue[50],
            },
          }}
        >
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Image
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
              alt="product"
              src="/assets/images/nike-black.png"
            ></Image>
            <Stack gap={0.5} alignItems={"flex-start"}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                voluptatem{" "}
              </Typography>
              <Stack fontSize={14} direction={"row"} gap={4}>
                <Typography>
                  <span>$201.00</span>x<span>1</span>
                </Typography>
                <Typography color={colors.red[500]} fontWeight={600}>
                  <span>$ 450.00</span>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                sx={{
                  "&>.MuiButton-outlined": {
                    p: 0.5,
                    minHeight: 0,
                    minWidth: 0,
                    textTransform: "capitalize",
                  },
                }}
              >
                <Button variant="outlined" color="error">
                  <Remove></Remove>
                </Button>
                <Typography
                  variant="body2"
                  sx={{ mx: 0.8, fontWeight: 600, fontSize: 15 }}
                >
                  2
                </Typography>
                <Button variant="outlined" color="error">
                  <Add></Add>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <IconButton color="error">
            <Close></Close>
          </IconButton>
        </Paper>
      );
}

export default CartItem