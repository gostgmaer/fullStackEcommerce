"use client";

import { addToCart, getTotals } from "@/store/cartReducer";
import { decreaseCart, incrementCart } from "@/store/reducers/cartSlice";
import { IoAdd, IoAddOutline, IoBagAddSharp, IoRemove, IoRemoveOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function AddToCard({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state["cart"]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const cartData = cart.cartItems.find((cartItem) => cartItem.id === data._id);
  return (
    <>

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center  relative">
      
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
      
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
          

            {cartData ? (
              <div>
                <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                <button onClick={() => dispatch(decreaseCart({...data,id:data._id}))}>
                    <span className="text-dark text-base">
                    <IoRemoveOutline />
                    </span>
                  </button>
                  <p className="text-sm text-dark px-1 font-serif font-semibold">  {cartData.cartQuantity}</p>
                  <button onClick={() => dispatch(incrementCart({...data,id:data._id}))}>
                    <span className="text-dark text-base">
                      <IoAddOutline />
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                aria-label="cart"
                disabled={data.quantity === 0 ? true : false}
                onClick={() => handleAddToCart({...data,id:data._id})}
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
              >

                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>

            )}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default AddToCard;
