"use client";
import { addTowishlist, removeFromwishlist } from "@/store/reducers/wishListSlice";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function WishlistCard({ data }) {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state["wishlist"]);

    const wishlistData = wishlist.wishlistItems.find((wishlistItem) => wishlistItem.id === data._id);
    return (
        <>

            <div className="group box-border  flex rounded-md shadow-sm pe-0 flex-col items-center  absolute right-3 top-3">
                {wishlistData ? (
                    <button onClick={() => dispatch(removeFromwishlist({ ...data, id: data._id }))}
                        aria-label="cart"
                        className="h-9 w-9 flex items-center  justify-center border border-gray-200 rounded text-gray-50 hover:border-red-500 bg-red-500 hover:text-white transition-all"
                    >
                        {" "}
                        <span className="text-xl">
                            <MdFavorite />
                        </span>{" "}
                    </button>
                ) : (
                    <button
                        onClick={() => dispatch(addTowishlist({ ...data, id: data._id }))}
                        aria-label="cart"
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
