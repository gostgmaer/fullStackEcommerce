"use client";

import { addByIncrement } from '@/store/reducers/cartSlice';
import { fetchWishlist, removeFromWishlist } from '@/store/reducers/wishslice';
import { notifySuccess } from '@/utils/notify/notice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Blockwishlist = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state["wishlist"]);

  useEffect(() => {
    if (session?.accessToken) {
      dispatch(fetchWishlist({ Authorization: `Bearer ${session.accessToken}` }));
    }
  }, [dispatch, session?.accessToken]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          My Wishlist
        </h3>
        
        {!wishlist || wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full flex items-center justify-center mb-5">
              <MdFavoriteBorder className="text-4xl" />
            </div>
            <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-1">
              Your wishlist is empty
            </h3>
            <p className="text-sm text-slate-450 dark:text-slate-400 max-w-sm">
              Add items that you like to your wishlist so you can buy them later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item, index) => (
              item?.product && (
                <WishListCard key={index} data={item.product} priority={index === 0} />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blockwishlist;

const WishListCard = ({ data, priority = false }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(1);
  const { data: session } = useSession();

  const handleAddToCart = (product) => {
    dispatch(addByIncrement({ product: { ...product, id: product._id }, cartQuantity: total }));
    notifySuccess(`${product.title} is Successfully Added!`);
  };

  const handleRemoveFromWishlist = (id) => {
    if (session?.accessToken) {
      dispatch(removeFromWishlist({ id, token: { Authorization: `Bearer ${session.accessToken}` } }));
    }
  };

  const isOutOfStock = data.quantity === 0;

  return (
    <div className="group bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative overflow-hidden">
      {/* Delete Button */}
      <button 
        onClick={() => handleRemoveFromWishlist(data?._id)} 
        className="absolute top-4 right-4 p-2 bg-card hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-xl transition-colors border border-border shadow-sm active:scale-95 z-10"
        aria-label="Remove from wishlist"
      >
        <IoTrashOutline className="text-sm" />
      </button>

      {/* Product Image Wrapper */}
      <div className="relative aspect-square w-full bg-muted/30 border border-border rounded-xl p-4 mb-4 flex items-center justify-center overflow-hidden">
        {data.image && data.image[0] && (
          <Image
            src={data.image[0]}
            alt={data.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain rounded-lg p-2 group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-[1px]">
            <span className="bg-rose-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Details & Actions */}
      <div className="flex flex-col flex-grow">
        <Link
          href={`/product/${data.slug}`}
          className="text-sm font-bold text-foreground hover:text-primary transition-colors line-clamp-2 leading-snug mb-2 !no-underline"
        >
          {data.title}
        </Link>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-black text-foreground">₹{data.price?.toFixed(2)}</span>
          {data.originalPrice && data.originalPrice > data.price && (
            <span className="text-xs text-muted-foreground line-through">₹{data.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Quantity Controls & Add to Cart */}
        <div className="mt-auto pt-2 flex flex-col gap-3">
          <div className="flex items-center justify-between border border-border rounded-lg h-10 overflow-hidden bg-muted/30">
            <button
              onClick={() => setTotal(Math.max(1, total - 1))}
              disabled={total <= 1 || isOutOfStock}
              className="flex items-center justify-center w-10 h-full hover:bg-muted transition-colors disabled:opacity-40"
            >
              <IoRemoveOutline className="text-muted-foreground" />
            </button>
            <span className="font-extrabold text-xs text-foreground w-10 text-center">
              {total}
            </span>
            <button
              onClick={() => setTotal(total + 1)}
              disabled={isOutOfStock}
              className="flex items-center justify-center w-10 h-full hover:bg-muted transition-colors disabled:opacity-40"
            >
              <IoAddOutline className="text-muted-foreground" />
            </button>
          </div>

          <button 
            disabled={isOutOfStock} 
            onClick={() => handleAddToCart(data)} 
            className="w-full h-10 inline-flex items-center justify-center text-xs font-bold bg-primary hover:bg-primary/95 text-white rounded-lg transition-all duration-200 active:scale-[0.98] shadow-sm disabled:opacity-40 cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};