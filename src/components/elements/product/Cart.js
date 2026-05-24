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
              <div className="h-10 w-auto flex items-center gap-3 py-1 px-3 bg-primary text-primary-foreground rounded-xl shadow-[0_4px_14px_0_hsl(var(--primary)/30%)] transition-all duration-300">
                <button
                  onClick={() => dispatch(decreaseCart({ ...data, id: data._id }))}
                  aria-label="Decrease quantity"
                  className="hover:bg-white/20 rounded-md p-1 transition-colors"
                >
                  <IoRemoveOutline className="text-base text-primary-foreground" />
                </button>
                <p className="text-xs font-bold font-mono text-primary-foreground px-1 leading-none w-4 text-center">
                  {cartData.cartQuantity}
                </p>
                <button
                  onClick={() => dispatch(incrementCart({ ...data, id: data._id }))}
                  aria-label="Increase quantity"
                  className="hover:bg-white/20 rounded-md p-1 transition-colors"
                >
                  <IoAddOutline className="text-base text-primary-foreground" />
                </button>
              </div>
            </div>
          ) : (
            <button
              aria-label="Add to cart"
              disabled={data.stock === 0}
              onClick={() => handleAddToCart({ ...data, id: data._id })}
              className="btn-premium h-10 w-10 border border-border/60 text-foreground bg-muted/30 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_4px_14px_0_hsl(var(--primary)/30%)] disabled:opacity-50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
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
