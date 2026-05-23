
import CouponServices from '@/helper/network/services/CouponServices';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoAddOutline, IoBag, IoRemoveOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

function OrderSummary({ code, setCode }) {
	const cart = useSelector((state) => state['cart']);
	const { cartTotalAmount } = useSelector((state) => state["cart"]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);


	// const [couponCode, setCouponCode] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	// const [total, setTotal] = useState(cartTotalAmount);
	const [isCoupon, setIsCoupon] = useState(false);
	const [discount, setDiscount] = useState(null);

	// Handle form submission
	const handleApplyCoupon = async (e) => {
		e.preventDefault();
		const products = cart.cartItems.map(item => item._id);
		const cartItems = cart.cartItems.map(item => ({
			productId: item._id,
			quantity: item.cartQuantity
		}));

		setLoading(true);
		try {
			const response = await CouponServices.applyCouponToProduct({ code, products, cart: { ...cart, cartItems: cartItems } });
			// Handle success response (e.g., show discount, update UI, etc.)
			// setTotal(response.totals.totalPrice)
			setDiscount(response.totals.totalDiscountedPrice)
			setIsCoupon(true)
			// setMessage(`Coupon applied successfully! Discount: ${response.data.discount}`);
		} catch (error) {
			// Handle error (e.g., invalid coupon, expired, etc.)
			setMessage(error.response?.data?.message || "Failed to apply coupon.");
		}
		setLoading(false);
	};

	return (
		<div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
			<div className="border border-border/40 p-6 lg:p-8 rounded-2xl bg-card shadow-sm text-foreground transition-all duration-200">
				<h2 className="font-bold text-foreground text-lg pb-4">Order Summary</h2>
				<div className="overflow-y-auto flex-grow w-full max-h-64 bg-muted/20 rounded-xl block border border-border/20">
					{cart.cartItems.length === 0 ? (
						<div className="text-center py-10">
							<span className="flex justify-center my-auto text-muted-foreground font-semibold text-4xl">
								<IoBag />
							</span>
							<h2 className="font-medium text-sm pt-2 text-muted-foreground">
								No Item Added Yet!
							</h2>
						</div>
					) : (
						cart.cartItems.map((cartItem, index) => {
							return (
								<div
									key={index}
									className="group w-full h-auto flex justify-start items-center bg-card py-3.5 px-4 border-b hover:bg-muted/30 transition-all border-border/40 relative last:border-b-0"
								>
									<div className="relative flex rounded-full border border-border/40 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4 bg-white">
										<Image
											src={cartItem.image[0]}
											width={40}
											height={40}
											className='w-10 h-10 object-contain'
											alt={cartItem.title}
										/>
									</div>
									<div className="flex flex-col w-full overflow-hidden">
										<Link
											className="truncate text-sm font-semibold !no-underline hover:text-primary transition-colors text-foreground line-clamp-1"
											href={`/product/${cartItem.slug}`}
										>
											{cartItem.title}
										</Link>
										<span className="text-xs text-muted-foreground mb-1">
											Item Price ${cartItem.price.toFixed(2)}
										</span>
										<div className="flex items-center justify-between">
											<div className="font-bold text-sm md:text-base leading-5">
												<span className="text-foreground">
													${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
												</span>
											</div>
											<div className="h-8 flex flex-wrap items-center justify-evenly p-1 border border-border bg-muted/40 text-muted-foreground rounded-lg">
												<button
													type="button"
													className="px-2"
													aria-label="Decrease quantity"
													onClick={() => dispatch(decreaseCart(cartItem))}
												>
													<span className="text-xs">
														<IoRemoveOutline />
													</span>
												</button>
												<p className="text-xs font-bold text-foreground px-1">
													{cartItem.cartQuantity}
												</p>
												<button
													type="button"
													className="px-2"
													aria-label="Increase quantity"
													onClick={() => dispatch(incrementCart(cartItem))}
												>
													<span className="text-xs">
														<IoAddOutline />
													</span>
												</button>
											</div>
											<button
												type="button"
												aria-label="Remove item"
												onClick={() => dispatch(removeFromCart(cartItem))}
												className="text-red-400 hover:text-red-600 text-lg cursor-pointer transition-colors"
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
				<div className="flex items-center mt-6 py-4 border-b border-border/40 text-sm w-full font-semibold">
					<form className="w-full" onSubmit={handleApplyCoupon}>
						<div className="flex flex-col sm:flex-row items-stretch justify-end space-y-2 sm:space-y-0 sm:space-x-3">
							<input
								type="text"
								placeholder="Coupon code"
								value={code}
								disabled={discount !== null}
								onChange={(e) => setCode(e.target.value)}
								className="form-input py-2 px-4 w-full bg-muted/50 dark:bg-zinc-950 border border-border rounded-lg text-sm h-11 transition duration-200 focus:outline-none focus:border-primary placeholder-muted-foreground text-foreground"
							/>
							<button 
								disabled={loading || discount !== null} 
								type="submit"
								className="leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-bold text-center justify-center border border-transparent rounded-lg focus-visible:outline-none focus:outline-none px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 h-11 text-sm w-full sm:w-auto"
							>
								{loading ? "..." : "Apply"}
							</button>
						</div>
						{message && <p className="text-xs text-red-500 mt-2">{message}</p>}
					</form>
				</div>
				
				<div className="space-y-2 mt-4">
					<div className="flex items-center text-sm w-full font-medium text-muted-foreground">
						Subtotal
						<span className="ml-auto text-foreground font-bold">
							${Number(cartTotalAmount || 0).toFixed(2)}
						</span>
					</div>
					<div className="flex items-center text-sm w-full font-medium text-muted-foreground">
						Shipping Cost
						<span className="ml-auto text-foreground font-bold">
							$0.00
						</span>
					</div>
					<div className="flex items-center text-sm w-full font-medium text-muted-foreground">
						Discount
						<span className="ml-auto font-bold text-orange-400">
							$0.00
						</span>
					</div>
				</div>
				
				<div className="border-t border-border mt-4 pt-4">
					<div className="flex items-center font-bold justify-between text-sm uppercase">
						Total Cost
						<span className="font-extrabold text-lg text-foreground">
							${discount ? Number(discount).toFixed(2) : Number(cartTotalAmount || 0).toFixed(2)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderSummary;
