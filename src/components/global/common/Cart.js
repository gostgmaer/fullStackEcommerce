import { addToCart, updateCart, saveCartToDb } from "@/store/cartReducer";

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
    <div className="flex items-center gap-5">
      <div
  
        className="flex py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
      
      >
      <button
        onClick={addToCard}
        className="!bg-yellow-500 hover:bg-yellow-700 !text-white font-bold py-1 h-10 px-4 rounded w-full"
      >
        Add to Cart
      </button>
      </div>
     
    </div>
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
    <div className="flex items-center gap-5">
      <button
        onClick={addToCard}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 h-10 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
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
    <div
     
      className="flex justify-start py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
    
    >

    </div>
  );
};
