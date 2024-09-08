import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoAddOutline, IoBag, IoRemoveOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

function OrderSummary() {
	const cart = useSelector((state) => state['cart']);
	const { cartTotalAmount } = useSelector((state) => state["cart"]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);
	return (
		<div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
			<div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white dark:bg-gray-700 order-1 sm:order-2">
				<h2 className="font-semibold text-black text-lg pb-4">Order Summary</h2>
				<div className="overflow-y-auto flex-grow w-full max-h-64 bg-gray-50 block ">
					{cart.cartItems.length === 0 ? (
						<div className="text-center py-10">
							<span className="flex justify-center my-auto text-gray-500 dark:text-gray-50 font-semibold text-4xl">
								<IoBag />
							</span>
							<h2 className="font-medium text-sm pt-2 text-gray-600 dark:text-gray-100">
								No Item Added Yet!
							</h2>
						</div>
					) : (
						cart.cartItems.map((cartItem, index) => {
							return (
								<div
									key={index}
									className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0 "
								>
									<div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
										<Image
											src={cartItem.image[0]}
											width={40}
											height={40}
											className=' w-10 h-10'
											alt="Blueberry"
										/>
									</div>
									<div className="flex flex-col w-full overflow-hidden">
										<Link
											className="truncate text-sm font-medium !no-underline !text-gray-700 text-heading line-clamp-1 "
											href={`/product/${cartItem.slug}`}
										>
											{cartItem.title}
										</Link>
										<span className="text-xs text-gray-400 mb-1">
											Item Price $ {cartItem.price}
										</span>
										<div className="flex items-center justify-between">
											<div className="font-bold text-sm md:text-base text-heading leading-5">
												<span className="text-black">
													$ {cartItem.price * cartItem.cartQuantity}
												</span>
											</div>
											<div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
												<button
													onClick={() => dispatch(decreaseCart(cartItem))}
												>
													<span className="text-dark text-base">
														<IoRemoveOutline />
													</span>
												</button>
												<p className="text-sm font-semibold text-dark px-1">
													{cartItem.cartQuantity}
												</p>
												<button
													onClick={() => dispatch(incrementCart(cartItem))}
												>
													<span className="text-dark text-base">
														<IoAddOutline />
													</span>
												</button>
											</div>
											<button
												onClick={() => dispatch(removeFromCart(cartItem))}
												className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
											>
												<MdDelete />
											</button>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
				<div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0 ">
					<form className="w-full">
						<div className="flex flex-col sm:flex-row items-start justify-end">
							<input
								type="text"
								placeholder="Input your coupon code"
								className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75"
							></input>
							<button className="md:text-sm text-black dark:text-gray-50 leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto">
								Apply
							</button>
						</div>
					</form>
				</div>
				<div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 dark:text-gray-100 last:border-b-0 last:text-base last:pb-0   ">
					Subtotal
					<span className="ml-auto flex-shrink-0 text-gray-800 dark:text-gray-200 font-bold">
						$ {cartTotalAmount}
					</span>
				</div>
				<div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 dark:text-gray-50 last:border-b-0 last:text-base last:pb-0   ">
					Shipping Cost
					<span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
						$ 0.00
					</span>
				</div>
				<div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 dark:text-gray-50 last:border-b-0 last:text-base last:pb-0">
					Discount
					<span className="ml-auto flex-shrink-0 font-bold text-orange-400 ">
						$ 0.00
					</span>
				</div>
				<div className="border-t mt-4 text-black">
					<div className="flex items-center font-bold justify-between pt-5 text-sm uppercase">
						Total Cost
						<span className="font-extrabold text-lg">$ {cartTotalAmount}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderSummary;
