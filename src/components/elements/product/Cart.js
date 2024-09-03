"use client";
// import { addToCart, updateCart } from "@/store/cartReducer";

import { addToCart, getTotals } from "@/store/cartReducer";
import { decreaseCart, incrementCart } from "@/store/reducers/cartSlice";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoAdd, IoAddOutline, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export const CartAddItems = ({ product }) => {
//   const cartItem = useSelector((state) => state["data"].cartItems);
//   const wishlist = useSelector((state) => state["data"].wishList);
//   const dispatch = useDispatch();

//   const [value, setValue] = useState(1);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   const handleDecrement = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   };
//   const addToCard = async () => {
//     const {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price,
//       salePrice,
//       sku,
//       ratings,
//       slug,
//     } = product;

//     const actualproduct = {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price: salePrice ? salePrice : price,
//       sku,
//       ratings,
//       slug,
//     };

//     const response = await dispatch(
//       addToCart({ product: actualproduct, quantity: value })
//     );
//     dispatch(saveCartToDb(cartItem));
//     setValue(1);
//   };

//   return (
//     <Box className="flex items-center gap-5">
//       <Stack
//         flex={0.5}
//         direction={"row"}
//         alignItems={"center"}
//         className="flex py-2 [&_.MuiInputBase-input]:cursor-pointer [&_.MuiInputBase-input]:text-center [&_.MuiInputBase-input]:p-3 [&_.MuiInputBase-input]:leading-none [&_.MuiInputBase-input]:h-4 [&_.MuiInputBase-input]:flex [&_.MuiInputBase-input]:items-center [&_.MuiInputBase-input]:justify-center"
//         sx={{
//           "&>.MuiButton-outlined": {
//             p: 0,
//             minHeight: 0,
//             minWidth: 0,
//             textTransform: "capitalize",
//           },
//         }}
//       >
//         <TextField
//           type="button"
//           value={"-"}
//           className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden rounded-none"
//           onClick={handleDecrement}
//         />
//         <TextField
//           type="text"
//           value={value}
//           className="h-10 w-10 text-center [&_.MuiInputBase-input]:cursor-auto "
//         />
//         <TextField
//           type="button"
//           value={"+"}
//           onClick={handleIncrement}
//           className="h-10 w-6 cursor-pointer bg-gray-300 overflow-hidden"
//         />
//       </Stack>
//       <Button
//         onClick={addToCard}
//         className="!bg-yellow-500 hover:bg-yellow-700 !text-white font-bold py-1 h-10 px-4 rounded w-full"
//       >
//         Add to Cart
//       </Button>
//     </Box>
//   );
// };

// export const AddToCartSingle = ({ product }) => {
//   const cartItem = useSelector((state) => state["data"].cartItems);
//   const dispatch = useDispatch();

//   const addToCard = async () => {
//     const {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price,
//       salePrice,
//       sku,
//       ratings,
//       slug,
//     } = product;

//     const actualproduct = {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price: salePrice ? salePrice : price,
//       sku,
//       ratings,
//       slug,
//     };

//     dispatch(
//       addToCart({
//         product: actualproduct,
//         quantity: 1,
//       })
//     );
//     const res = await dispatch(saveCartToDb(cartItem));
//   };

//   return (
//     <Box className="flex items-center gap-5">
//       <Button
//         onClick={addToCard}
//         className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 h-10 px-4 rounded"
//       >
//         Add to Cart
//       </Button>
//     </Box>
//   );
// };

// export const CartUpdate = ({ data }) => {
//   const dispatch = useDispatch();

//   const updateCartdata = async () => {
//     const {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price,
//       salePrice,
//       sku,
//       ratings,
//       slug,
//     } = data.product;

//     const actualproduct = {
//       _id,
//       title,
//       categories,
//       descriptions,
//       images,
//       price: salePrice ? salePrice : price,
//       sku,
//       ratings,
//       slug,
//     };

//     dispatch(
//       addToCart({
//         product: actualproduct,
//         quantity: 1,
//       })
//     );

//   };

//   return (
//     <div>
//         {inCart(product._id) ? (
//               <div>
//                 {items.map(
//                   (item) =>
//                     item.id === product._id && (
//                       <div
//                         key={item.id}
//                         className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded"
//                       >
//                         <button
//                           onClick={() =>
//                             updateItemQuantity(item.id, item.quantity - 1)
//                           }
//                         >
//                           <span className="text-dark text-base">
//                             <IoRemove />
//                           </span>
//                         </button>
//                         <p className="text-sm text-dark px-1 font-serif font-semibold">
//                           {item.quantity}
//                         </p>
//                         <button
//                           onClick={() =>
//                             item?.variants?.length > 0
//                               ? handleAddItem(item)
//                               : handleIncreaseQuantity(item)
//                           }
//                         >
//                           <span className="text-dark text-base">
//                             <IoAdd />
//                           </span>
//                         </button>
//                       </div>
//                     )
//                 )}{" "}
//               </div>
//             ) : (
//               <button
//                 onClick={() => handleAddItem(product)}
//                 aria-label="cart"
//                 className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//               >
//                 {" "}
//                 <span className="text-xl">
//                   <IoBagAddSharp />
//                 </span>{" "}
//               </button>
//             )}

//             <button
//               // onClick={() => handleAddItem(product)}
//               aria-label="cart"
//               className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//             >
//               {" "}
//               <span className="text-xl">
//                 <IoBagAddSharp />
//               </span>{" "}
//             </button>
//     </div>
//   );
// };

// export const AddToCard = ({ product }) => {
//   const items = useSelector((state) => state["data"]?.cartItems);
//   const dispatch = useDispatch();
//   const [value, setValue] = useState(1);
//   const incart = items.find((item) => item.product._id == product._id);

//   async function handleAddItem(product) {


//     const response = await dispatch(
//       addToCart({ product: product, quantity: value })

//     );
//     console.log(items, incart);



//     setValue(1);
//   }
//   function handleIncreaseQuantity(item) {
//     throw new Error("Function not implemented.");
//   }

//   function updateItemQuantity(id, arg1) {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="">

//       {items.find((item) => item.product._id == product._id) >
//         0 ? (
//         <div>
//           <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
//             <button>
//               <span className="text-dark text-base">
//                 <FaMinus />
//               </span>
//             </button>
//             <p className="text-sm text-dark px-1 font-serif font-semibold">1</p>
//             <button>
//               <span className="text-dark text-base">
//                 <IoAddOutline />
//               </span>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <button
//           aria-label="cart"
//           onClick={() =>
//             handleAddItem(product)
//           }
//           className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//         >

//           <span className="text-xl">
//             <IoBagAddSharp />
//           </span>{" "}
//         </button>
//       )}
//     </div>

//     // <button
//     //   onClick={() => handleAddItem(product)}
//     //   aria-label="cart"
//     //   className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//     // >
//     //   <span className="text-xl">

//     //     <div>
//     //       {incart ? incart : ""}
//     //     </div>

//     //     <IoBagAddSharp />
//     //   </span>
//     // </button>
//   );
// };

// <div>
//   <div>
//     {items.map(
//       (item) =>
//         item.id === product._id && (
//           <div
//             key={item.id}
//             className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded"
//           >
//             <button
//               onClick={() =>
//                 updateItemQuantity(item.id, item.quantity - 1)
//               }
//             >
//               <span className="text-dark text-base">
//                 <IoRemove />
//               </span>
//             </button>
//             <p className="text-sm text-dark px-1 font-serif font-semibold">
//               {item.quantity}
//             </p>
//             <button
//               onClick={() =>
//                 item?.variants?.length > 0
//                   ? handleAddItem(item)
//                   : handleIncreaseQuantity(item)
//               }
//             >
//               <span className="text-dark text-base">
//                 <IoAdd />
//               </span>
//             </button>
//           </div>
//         )
//     )}{" "}
//   </div>
//   ) : (
//   <button
//     onClick={() => handleAddItem(product)}
//     aria-label="cart"
//     className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//   >
//     {" "}
//     <span className="text-xl">
//       <IoBagAddSharp />
//     </span>{" "}
//   </button>
//       )}

//   <button
//     // onClick={() => handleAddItem(product)}
//     aria-label="cart"
//     className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
//   >
//     {" "}
//     <span className="text-xl">
//       <IoBagAddSharp />
//     </span>{" "}
//   </button>

// </div>



function AddToCard({ data }) {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state["cart"]);



  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const Cart = cart.cartItems.find((cartItem) => cartItem.id === data._id);
  console.log(Cart);
  

  return (
    <>

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
      
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
      
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
          

            {Cart ? (
              <div>
                <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                <button onClick={() => dispatch(decreaseCart({...data,id:data._id}))}>
                    <span className="text-dark text-base">
                      <FaMinus />
                    </span>
                  </button>
                  <p className="text-sm text-dark px-1 font-serif font-semibold">1</p>
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
