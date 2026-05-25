"use client";
import Discount from "@/components/global/common/Discount";
import Price from "@/components/global/common/Price";
import Stock from "@/components/global/common/Stock";
import ProductModal from "@/components/global/modal/ProductModal";
import Image from "next/image";
import { useState } from "react";
import AddToCard from "./Cart";
import WishlistCard from "./wishList";

const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const safeProduct = product && typeof product === "object" ? product : null;
  const discountValue = Number(safeProduct?.prices?.discount ?? safeProduct?.discount ?? 0);

  if (!safeProduct) {
    return null;
  }

  const handleModalOpen = (value) => {
    setModalOpen(value);
  };

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={"₹"}
          attributes={attributes}
        />
      )}

      <div className="group relative flex flex-col justify-between overflow-hidden card-base hover:shadow-premium-hover hover:-translate-y-1 h-full w-full transition-all duration-400">
        {/* Top Section: Badges & Image */}
        <div className="relative w-full pt-4 flex justify-center items-center bg-muted/10 dark:bg-muted/5 group-hover:bg-muted/15 transition-colors duration-400">
          <Stock stock={product.stock} card />
          <Discount discount={Number.isFinite(discountValue) ? discountValue : 0} product={safeProduct} slug={safeProduct.slug} modal={false} />
          <WishlistCard data={product} />

          {product?.image?.[0] ? (
            <div className="relative w-full h-44 flex justify-center items-center px-4 mt-2 mb-2">
              <div className="relative w-full h-full cursor-pointer" onClick={() => handleModalOpen(!modalOpen)}>
                <Image
                  src={product?.image?.[0]}
                  alt={product?.title}
                  loading="lazy"
                  fill
                  sizes="(max-width: 768px) 150px, 180px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-44 flex justify-center items-center px-4 mt-2 mb-2">
              <div className="relative w-full h-full cursor-pointer" onClick={() => handleModalOpen(!modalOpen)}>
                <Image
                  src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                  alt="Placeholder"
                  loading="lazy"
                  fill
                  sizes="(max-width: 768px) 150px, 180px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 opacity-70"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section: Details & Purchase */}
        <div className="w-full p-4 sm:p-5 flex flex-col justify-between flex-grow bg-card">
          <div className="relative mb-2">
            <span className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider block mb-1.5">
              {product?.unit || "Unit"}
            </span>
            <h2 
              onClick={() => handleModalOpen(!modalOpen)}
              className="text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-200 cursor-pointer line-clamp-2 min-h-[40px] leading-snug"
            >
              {product?.title}
            </h2>
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/30">
            <Price
              card
              product={product}
              currency={"₹"}
              price={Number(product?.prices?.price)}
              originalPrice={Number(product?.prices?.originalPrice)}
            />
            <AddToCard data={product} />
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