"use client";
import Discount from "@/components/global/common/Discount";
import Price from "@/components/global/common/Price";
import Stock from "@/components/global/common/Stock";
import ProductModal from "@/components/global/modal/ProductModal";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/store/cartReducer";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import AddToCard from "./Cart";
import WishlistCard from "./wishList";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

const ProductCard = ({ product, attributes }) => {
  // const { data: session, status } = useSession();
  // const route = useRouter()
  // const wishlist = useSelector((state) => state["data"].wishList);


  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };




  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={"$"}
          attributes={attributes}
        />
      )}

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center  bg-white dark:bg-gray-800 relative">
        <div

          className="relative flex justify-center w-full cursor-pointer pt-2"
        >
          <div className="left-3">
            <Stock stock={product.stock} card />

          </div>
          <Discount product={{ ...product }} slug={product.slug} modal={undefined} />
          {product?.image?.[0] ? (

            <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
              <div className="relative w-full h-full p-2">
                <Image
                  src={product?.image?.[0]}
                  onClick={() => handleModalOpen(!modalOpen, product)}
                  alt="product"
                  loading="lazy"
                  width={210}
                  height={210}
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 absolute h-full w-full inset-0  text-white"
                  sizes="100%"

                />
              </div>
            </div>
        
          ) : (
         

            <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
              <div className="relative w-full h-full p-2">
                <Image
                  src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                  alt="product"
                  loading="lazy"
                  width={210}
                  height={210}
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 absolute h-full w-full inset-0  text-white"
                  sizes="100%"

                />
              </div>
            </div>
          )}

          <div className="right-3 z-10">

            <WishlistCard data={product} />
          </div>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 dark:text-gray-50 font-medium text-xs d-block mb-1">
              {product?.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600 dark:text-gray-200 cursor-pointer">
              <span className="line-clamp-2">
                {/* {showingTranslateValue(product?.title, lang)} */}
                {product?.title?.["data"]}
              </span>
            </h2>
          </div>
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price
              card
              product={product}
              currency={"$"}
              price={product?.prices?.price}
              originalPrice={product?.prices?.originalPrice}
            />


            <div>
              <AddToCard data={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;



// export const PCard = (product) => {
//   return <div
//     className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative"
//   >
//     <div className="w-full flex justify-between">
//       <span
//         className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium"
//       >Stock :<span className="text-orange-700 pl-1 font-bold"
//       >1350
//         </span></span
//       >
//     </div>
//     <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
//       <div className="relative w-full h-full p-2">
//         <Image
//           alt="product"
//           loading="lazy"
//           decoding="async"
//           data-nimg="fill"
//           className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 absolute h-full w-full inset-0  text-transparent"
//           sizes="100%"

//           src={product?.image?.[0]}

//         />
//       </div>
//     </div>
//     <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
//       <div className="relative mb-1">
//         <span className="text-gray-400 font-medium text-xs d-block mb-1"></span>
//         <h2
//           className="text-heading truncate mb-0 block text-sm font-medium text-gray-600"
//         >
//           <span className="line-clamp-2">Premium T-Shirt</span>
//         </h2>
//       </div>
//       <div
//         className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl"
//       >
//         <div className="font-serif product-price font-bold">
//           <span className="inline-block text-lg font-semibold text-gray-800"
//           >₹450.00</span
//           >
//         </div>
//         <AddToCard data={product} />
//       </div>
//     </div>
//   </div>

// }