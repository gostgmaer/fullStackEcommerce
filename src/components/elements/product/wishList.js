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
  //  console.log(id);
    
};

const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist({id,token}));
};

     const wishlistData = wishlist?.find((wishlistItem) => wishlistItem?.product?._id === data._id);
    return (
        <>

            <div className="group box-border  flex rounded-md shadow-sm pe-0 flex-col items-center  absolute right-3 top-3">
                {wishlistData ? (
                    <button 
                    // onClick={() => dispatch(removeFromWishlist({product:data._id}))}
                    onClick={() =>handleRemoveFromWishlist(data._id)}
                        aria-label="wishlist"
                        className="h-9 w-9 flex items-center  justify-center border border-gray-200 rounded text-gray-50 hover:border-red-500 bg-red-500 hover:text-white transition-all"
                    >
                        {" "}
                        <span className="text-xl">
                            <MdFavorite />
                        </span>{" "}
                    </button>
                ) : (
                    <button
                        onClick={() =>handleAddToWishlist(data._id)}
                        aria-label="wishlist"
                        className={`  h-9 w-9 flex items-center  justify-center border border-red-500 rounded  hover:border-red-500  hover:text-white transition-all`}
                    >
                        {" "}
                        <span className="text-xl">
                            <MdFavorite className=" text-red-500" />
                        </span>{" "}
                    </button>

                )}

            </div>

        </>
    );
}

export default WishlistCard;
