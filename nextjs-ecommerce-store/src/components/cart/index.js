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

export default function SwipeableTemporaryDrawer() {
  const { state, setState } = useGlobalContext();
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  console.log(sumWithInitial(cartItem));
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
      {cartItem.length === 0 && <NoCartData></NoCartData>}
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
          fullWidth
        >
          Checkout {cartItem.length !== 0 && `($ ${sumWithInitial(cartItem).toFixed(2)})`}
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
    <Stack spacing={2}>
      <Typography>No cart has been Add</Typography>
    </Stack>
  );
};

const HascartData = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Stack
        gap={1}
        flex={0.5}
        alignItems={"center"}
        sx={{
          "&>.MuiButton-outlined": {
            p: 0,
            minHeight: 0,
            minWidth: 0,
            textTransform: "capitalize",
          },
        }}
      >
        <IconButton
          sx={{ border: "1px solid", padding: "0" }}
          color="error"
          onClick={() =>
            dispatch(
              addToCart({
                id: data?.id,
                color: data.color,
                title: data?.title,
                desc: data.desc,
                image: data.image,
                quantity: data.quantity,
                subtotal: data["subtotal"],
                price: data["price"],
              })
            )
          }
        >
          <Add></Add>
        </IconButton>
        <Typography
          variant="body2"
          sx={{ mx: 0.5, fontWeight: 600, fontSize: 15 }}
        >
          {data.quantity}
        </Typography>
        <IconButton
          sx={{ border: "1px solid", padding: "0" }}
          color="error"
          onClick={() =>
            dispatch(
              updateCart({
                id: data?.id,
              })
            )
          }
        >
          <Remove></Remove>
        </IconButton>
      </Stack>
      <Box
        display={"flex"}
        gap={2}
        flex={2.5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          width={80}
          height={80}
          alt="product"
          src="/assets/images/nike-black.png"
        ></Image>
        <Stack gap={0} alignItems={"flex-start"}>
          <Typography fontSize={14} >{data.title}</Typography>
          <Typography fontSize={13} variant="body1">
            <span>$ {data.price.toFixed(2)}</span> x <span>{data.quantity}</span>
          </Typography>
          <Typography fontSize={13}>
            <span>$ {data.subtotal.toFixed(2)}</span>
          </Typography>
        </Stack>
        <IconButton
          onClick={() => dispatch(removefromCart(data.id))}
          color="error"
        >
          <Close></Close>
        </IconButton>
      </Box>
    </Box>
  );
};
