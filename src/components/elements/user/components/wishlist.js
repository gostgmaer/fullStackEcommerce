"use client"
// import useWishlist from '@/context/hooks/useWishlist';
import { addByIncrement, removeFromCart } from '@/store/reducers/cartSlice';
import { removeFromwishlist } from '@/store/reducers/wishListSlice';
import { fetchWishlist, removeFromWishlist } from '@/store/reducers/wishslice';
import { notifySuccess } from '@/utils/notify/notice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { MdDelete, MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Blockwishlist = () => {
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const { wishlist, error } = useSelector((state) => state["wishlist"]);

    const token = { "Authorization": `Bearer ${session?.["accessToken"]}` }





    useEffect(() => {
        dispatch(fetchWishlist(token)); // Fetch wishlist when component mounts
    }, [dispatch]);
    // const { wishlist, addToWishlist, removeFromWishlist, loading, error } = useWishlist();


    // useEffect(async ()  => {

    // console.log( await fetchWishlist());

    // }, []);


    return (
        <div className="max-w-screen-2xl mx-auto ">
            <div className="rounded-md ">
                <div className="flex flex-col">
                    {<h3 className="text-lg font-medium mb-5">{`Wish List`}</h3>}
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                                <div className="overflow-y-auto flex-grow scrollbar-hide w-full max-h-full">


                                    {wishlist?.length === 0 ? (
                                        <div className="flex flex-col h-full justify-center">
                                            <div className="flex flex-col items-center">
                                                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                                                    <span className="text-emerald-600 text-4xl block">
                                                        <MdFavorite />
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
                                        wishlist?.map((data, index) => (
                                            <WishListCard key={index} data={data.product}></WishListCard>
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



const WishListCard = ({ data }) => {

    const dispatch = useDispatch();


    const [total, setTotal] = useState(1)

    const handleAddToCart = (product) => {
        dispatch(addByIncrement({ product: { ...product, id: product._id }, cartQuantity: total }));
        notifySuccess(`${product.title} is Successfully Add!`)
    }


    const { data: session } = useSession();
    const token = { "Authorization": `Bearer ${session?.["accessToken"]}` }


    const handleRemoveFromWishlist = (id) => {

        
        dispatch(removeFromWishlist({ id, token }));
    };



    return (
        <div

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
                        <span>${data.price}</span>

                    </div>


                </div>
            </div>
            <div className='flex w-full flex-wrap  overflow-hidden'>
                <div className="flex items-center ">
                    <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                        <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                                onClick={() => setTotal(total - 1)}
                                disabled={total <= 1 ? true : false}
                                className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                            >
                                <span className="text-dark text-base">
                                    <IoRemoveOutline />
                                </span>
                            </button>
                            <p className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out  flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24">
                                {total}
                            </p>
                            <button
                                disabled={data.quantity === 0 ? true : false}
                                onClick={() => {

                                    setTotal(total + 1)
                                }} className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500">
                                <span className="text-dark text-base">
                                    <IoAddOutline />
                                </span>
                            </button>
                        </div>
                        <button disabled={data.quantity === 0 ? true : false} onClick={() => handleAddToCart(data)} className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12">
                            Add To Cart
                        </button>
                    </div>
                </div>

            </div>
            <div>
                <button onClick={() => handleRemoveFromWishlist(data?._id)} className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}