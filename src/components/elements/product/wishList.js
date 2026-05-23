"use client";


import { addToWishlist, removeFromWishlist } from "@/store/reducers/wishslice";
import { useSession } from "next-auth/react";

import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function WishlistCard({ data }) {
    const dispatch = useDispatch();
    const {wishlist,error} = useSelector((state) => state["wishlist"]);

    const { data: session, status } = useSession();
    const token ={ "Authorization": `Bearer ${session?.["accessToken"]}` }
    const handleAddToWishlist = (id) => {
        dispatch(addToWishlist({id,token}));
    };

    const handleRemoveFromWishlist = (id) => {
        dispatch(removeFromWishlist({id,token}));
    };

    const wishlistData = wishlist?.find((wishlistItem) => wishlistItem?.product?._id === data._id);
    
    return (
        <div className="absolute right-3 top-3 z-20">
            {wishlistData ? (
                <button 
                    onClick={() => handleRemoveFromWishlist(data._id)}
                    aria-label="Remove from wishlist"
                    className="h-8 w-8 flex items-center justify-center bg-red-50 dark:bg-red-950/40 text-red-500 rounded-full border border-red-100 dark:border-red-900/30 shadow-sm hover:scale-105 active:scale-90 transition-all duration-200"
                >
                    <MdFavorite className="text-base" />
                </button>
            ) : (
                <button
                    onClick={() => handleAddToWishlist(data._id)}
                    aria-label="Add to wishlist"
                    className="h-8 w-8 flex items-center justify-center bg-white/90 dark:bg-slate-800/90 text-slate-400 dark:text-slate-500 hover:text-red-500 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm hover:scale-105 active:scale-90 transition-all duration-200"
                >
                    <MdFavorite className="text-base" />
                </button>
            )}
        </div>
    );
}

export default WishlistCard;
