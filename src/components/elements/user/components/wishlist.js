"use client"
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Blockwishlist = () => {

    const wishlist = useSelector((state) => state["wishlist"]);
    const { cartTotalAmount } = useSelector((state) => state["cart"])
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getTotals());
    }, [wishlist, dispatch]);

  return (
    <div className="max-w-screen-2xl mx-auto ">
    <div className="rounded-md ">
        <div className="flex flex-col">
            {<h3 className="text-lg font-medium mb-5">{`Wish List`}</h3>}
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                    <div className="overflow-y-auto flex-grow scrollbar-hide w-full max-h-full">
          { }

          {wishlist.wishlistItems.length === 0 ? (
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                  <span className="text-emerald-600 text-4xl block">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                    </svg>
                  </span>
                </div>
                <h3 className="font-semibold text-gray-700 text-lg pt-5">
                  Your wishlistItems is empty
                </h3>
                <p className="px-12 text-center text-sm text-gray-500 pt-2">
                  No items added in your wishlist. 
                </p>
              </div>
            </div>
          ) : (
            wishlist.wishlistItems.map((data, index) => (
              <div
                key={index}
                className="group w-full h-auto flex justify-start  items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0"
              >
                <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
                  <Image
                    src={data.image[0]}
                    width={40}
                    height={40}
                    alt={data.title}
                  />
                </div>
                <div className="flex flex-col w-full overflow-hidden">
                  <Link
                    className="truncate text-sm font-medium !no-underline !text-gray-700 text-heading line-clamp-1"
                    href={`/product/${data.slug}`}
                  >
                    {data.title}
                  </Link>
                  <span className="text-xs text-gray-400 mb-1">
                    Item Price ${data.price}
                  </span>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm md:text-base text-heading leading-5">
                      <span>${data.price * data.cartQuantity}</span>
                    </div>
                    <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                      <button onClick={() => dispatch(decreaseCart(data))} >
                        <span className="text-dark text-base">
                          <IoRemoveOutline />
                        </span>
                      </button>
                      <p className="text-sm font-semibold text-dark px-1">
                        {data.cartQuantity}
                      </p>
                      <button onClick={() => dispatch(incrementCart(data))}>
                        <span className="text-dark text-base">
                          <IoAddOutline />
                        </span>
                      </button>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(data))} className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blockwishlist