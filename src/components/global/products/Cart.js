import { addToCart, updateCart, saveCartToDb } from "@/store/cartReducer";
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
  const addToCard = async () => {
    const {
      _id,
      title,
      categories,
      descriptions,
      images,
      price,
      salePrice,
      sku,
      ratings,
      slug,
    } = product;

    const actualproduct = {
      _id,
      title,
      categories,
      descriptions,
      images,
      price: salePrice ? salePrice : price,
      sku,
      ratings,
      slug,
    };

    const response = await dispatch(
      addToCart({ product: actualproduct, quantity: value })
    );
    dispatch(saveCartToDb(cartItem));
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
          className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden rounded-none"
          onClick={handleDecrement}
        />
        <TextField
          type="text"
          value={value}
          className="h-10 w-10 text-center [&_.MuiInputBase-input]:cursor-auto "
        />
        <TextField
          type="button"
          value={"+"}
          onClick={handleIncrement}
          className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden"
        />
      </Stack>
      <Button
        onClick={addToCard}
        className="!bg-yellow-500 hover:bg-yellow-700 !text-white font-bold py-1 h-10 px-4 rounded w-full"
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export const AddToCartSingle = ({ product }) => {
  const cartItem = useSelector((state) => state["data"].cartItems);
  const dispatch = useDispatch();

  const addToCard = async () => {
    const {
      _id,
      title,
      categories,
      descriptions,
      images,
      price,
      salePrice,
      sku,
      ratings,
      slug,
    } = product;

    const actualproduct = {
      _id,
      title,
      categories,
      descriptions,
      images,
      price: salePrice ? salePrice : price,
      sku,
      ratings,
      slug,
    };

    dispatch(
      addToCart({
        product: actualproduct,
        quantity: 1,
      })
    );
    const res = await dispatch(saveCartToDb(cartItem));
  };

  return (
    <Box className="flex items-center gap-5">
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


  const updateCartdata = async () => {
    const {
      _id,
      title,
      categories,
      descriptions,
      images,
      price,
      salePrice,
      sku,
      ratings,
      slug,
    } = data.product;

    const actualproduct = {
      _id,
      title,
      categories,
      descriptions,
      images,
      price: salePrice ? salePrice : price,
      sku,
      ratings,
      slug,
    };

    dispatch(
      addToCart({
        product: actualproduct,
        quantity: 1,
      })
    );
   
  };

  return (
    <Stack
      flex={0.5}
      direction={"row"}
      alignItems={"center"}
      className="flex justify-start py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
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
        className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden "
        onClick={() =>
          dispatch(
            updateCart({
              _id: data?.product?.["_id"],
            })
          )
        }
      />

      <TextField
        type="text"
        value={data.quantity}
        className="h-10 w-10 text-center [&_.MuiInputBase-input]:cursor-auto "
      />

      <TextField
        type="button"
        value={"+"}
        onClick={updateCartdata
        }
        className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden"
      />
    </Stack>
  );
};
