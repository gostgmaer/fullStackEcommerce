"use client";

import { addToCart, decreaseCart, incrementCart } from "@/store/reducers/cartSlice";
import { IoBagAddSharp, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

/**
 * Add-to-cart / quantity stepper shown on the product card.
 * Uses product._id mapped to id for cart matching.
 */
function AddToCard({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state["cart"]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cartData = cart.cartItems.find((cartItem) => cartItem.id === data._id);

  return (
    <div className="group box-border flex rounded-lg pe-0 flex-col items-center relative">
      <div className="w-full">
        <div className="flex justify-between items-center text-sm sm:text-base">
          {cartData ? (
            <div>
              <div className="h-9 w-auto flex items-center gap-2 py-1 px-2.5 bg-primary text-white rounded-lg shadow-sm border border-primary/20">
                <button
                  onClick={() => dispatch(decreaseCart({ ...data, id: data._id }))}
                  aria-label="Decrease quantity"
                  className="hover:scale-105 active:scale-90 transition-all p-0.5"
                >
                  <IoRemoveOutline className="text-base text-white" />
                </button>
                <p className="text-xs font-sans font-extrabold text-white px-1 leading-none">
                  {cartData.cartQuantity}
                </p>
                <button
                  onClick={() => dispatch(incrementCart({ ...data, id: data._id }))}
                  aria-label="Increase quantity"
                  className="hover:scale-105 active:scale-90 transition-all p-0.5"
                >
                  <IoAddOutline className="text-base text-white" />
                </button>
              </div>
            </div>
          ) : (
            <button
              aria-label="Add to cart"
              disabled={data.stock === 0}
              onClick={() => handleAddToCart({ ...data, id: data._id })}
              className="h-9 w-9 flex items-center justify-center border border-slate-100 dark:border-slate-800 rounded-lg text-primary bg-slate-50 dark:bg-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm active:scale-95 disabled:opacity-50"
            >
              <span className="text-lg">
                <IoBagAddSharp />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToCard;
