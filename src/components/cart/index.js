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
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromCart, updateCart } from "@/store/cartReducer";
import { sumWithInitial } from "@/lib/sevice";
import { CartAddItems, CartUpdate } from "../global/products/Cart";

export default function CartBlock() {
  const { state, setState } = useGlobalContext();
  const cartItem = useSelector((state) => state["data"].cartItems);
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          flexDirection: "column",
        }}
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
          <Typography variant="h6">
            Your Cart {cartItem?.length !== 0 && `(${cartItem.length})`}
          </Typography>
          <IconButton color="error" onClick={toggleDrawer(false)}>
            <HighlightOffOutlined />
          </IconButton>
        </Grid>
        <Divider />
        {cartItem.length !== 0 && (
          <Grid>
            {cartItem?.map((item) => (
              <Fragment key={item.id}>
                <HascartData data={item} />
                <Divider></Divider>
              </Fragment>
            ))}
          </Grid>
        )}
      </Box>
      {cartItem.length === 0 ? (
        <NoCartData></NoCartData>
      ) : (
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
            className=" bg-red-600"
            fullWidth
          >
            Checkout {`($ ${sumWithInitial(cartItem).toFixed(2)})`}
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
      )}
      {}
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
    <Stack spacing={2} mb={35}>
      <Typography>No cart has been Add</Typography>
    </Stack>
  );
};

const HascartData = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <CartUpdate data={data} />
      <Box
        display={"flex"}
        gap={2}
        flex={2.5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          width={100}
          height={100}
          alt="product"
          src={data.product.images[0]["url"]}
        ></Image>
        <Stack gap={0} alignItems={"flex-start"}>
          <Typography fontSize={14} className=" text-sm">{data.product.title}</Typography>
          <Typography fontSize={13} variant="body1">
            <span>$ {data.product.price.toFixed(2)}</span> x{" "}
            <span>{data.quantity}</span>
          </Typography>
          <Typography fontSize={13}>
            <span>$ {data.subtotal.toFixed(2)}</span>
          </Typography>
        </Stack>
        <IconButton
          onClick={() => dispatch(removefromCart(data.product._id))}
          color="error"
        >
          <Close></Close>
        </IconButton>
      </Box>
    </Box>
  );
};
