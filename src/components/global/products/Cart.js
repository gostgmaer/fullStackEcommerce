import { addToCart, updateCart } from "@/store/cartReducer";
import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartAddItems = ({ product }) => {
  const cartItem = useSelector((state) => state["data"].cartItems);
  const wishlist = useSelector((state) => state["data"].wishList);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const addToCard = () => {
    console.log(value);
    dispatch(
      addToCart({
        id: product.id,
        slug: product.slug,
        title: product.title,
        brand: product.brand,
        size: product.size,
        colors: product.colors,
        desc: product.description,
        image: product.thumbnail,
        quantity: value,
        subtotal: product["discount"]
          ? product["price"] - product["discount"]
          : product["price"],
        price: product["discount"]
          ? product["price"] - product["discount"]
          : product["price"],
      })
    );
    setValue(1);
  };

  return (
    <Box className="flex items-center gap-5">
      <Stack
        flex={0.5}
        direction={"row"}
        alignItems={"center"}
        className="flex py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
        sx={{
          "&>.MuiButton-outlined": {
            p: 0,
            minHeight: 0,
            minWidth: 0,
            textTransform: "capitalize",
          },
        }}
      >
        <TextField
          type="button"
          value={"-"}
          className="h-10 w-10 cursor-pointer "
          onClick={handleDecrement}
        />
        <TextField
          type="text"
          value={value}
          className="h-10 w-12 text-center [&_.MuiInputBase-input]:cursor-auto "
        />
        <TextField
          type="button"
          value={"+"}
          onClick={handleIncrement}
          className="h-10 w-10 cursor-pointer "
        />
      </Stack>
      <Button
        onClick={addToCard}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 h-10 px-4 rounded"
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export const CartUpdate = ({ data }) => {
  const dispatch = useDispatch();

  return (
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
              id: data.id,
              slug: data.slug,
              title: data.title,
              brand: data.brand,
              size: data.size,
              colors: data.colors,
              desc: data.description,
              image: data.thumbnail,
              quantity: 1,
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
  );
};
