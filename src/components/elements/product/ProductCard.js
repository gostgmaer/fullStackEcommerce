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

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div

          className="relative flex justify-center w-full cursor-pointer pt-2"
        >
          <div className="left-3">
            <Stock stock={product.stock} card />

          </div>
          <Discount product={{ ...product }} />
          {product?.image?.[0] ? (
            <Image
              src={product?.image?.[0]}
              onClick={() => handleModalOpen(!modalOpen, product)}
              width={210}
              height={210}
              alt="product"
              className="object-contain  transition duration-150 ease-linear transform group-hover:scale-105"
            />
          ) : (
            <Image
              src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
              width={210}
              height={210}
              alt="product"
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
            />
          )}

          <div className="right-3 z-10">

            <WishlistCard data={product} />
          </div>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product?.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600 cursor-pointer">
              <span className="line-clamp-2">
                {/* {showingTranslateValue(product?.title, lang)} */}
                {product?.title["data"]}
              </span>
            </h2>
          </div>
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price
              card
              product={product}
              currency={"$"}
              price={product.prices.price}
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
