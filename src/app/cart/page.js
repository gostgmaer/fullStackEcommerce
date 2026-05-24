"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { IoAddOutline, IoCartOutline, IoRemoveOutline, IoTrashOutline, IoShieldCheckmarkOutline, IoGiftOutline, IoCloseOutline } from 'react-icons/io5';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';
import Layout from '@/components/global/layout/Layout';
import Price from '@/components/global/common/Price';
import ProductCard from '@/components/elements/product/ProductCard';
import CouponServices from '@/helper/network/services/CouponServices';
import ProductServices from '@/helper/network/services/ProductServices';

const CartPage = () => {
  const cart = useSelector((state) => state["cart"]);
  const { cartTotalAmount, cartTaxAmount } = useSelector((state) => state["cart"]);
  const dispatch = useDispatch();

  // Coupon States
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [loadingCoupon, setLoadingCoupon] = useState(false);

  // Recommendations State
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Load recommendations
  useEffect(() => {
    async function fetchRecs() {
      try {
        const res = await ProductServices.getPopularProducts();
        if (res && res.results) {
          setRecommendations(res.results.slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to fetch recommended products:", err);
      }
    }
    fetchRecs();
  }, []);

  // Shipping Calculations
  const freeShippingThreshold = 500;
  const isFreeShipCoupon = couponSuccess && localStorage.getItem('cartCouponCode') === "FREESHIP";
  const shippingCost = (cartTotalAmount >= freeShippingThreshold || isFreeShipCoupon) ? 0 : 50.00;
  const progressPercent = Math.min((cartTotalAmount / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - cartTotalAmount, 0);

  const simulateLocalCoupon = useCallback((codeStr) => {
    const uppercaseCode = codeStr.toUpperCase().trim();
    if (uppercaseCode === "SAVE10" || uppercaseCode === "WELCOME10") {
      const discountAmt = cartTotalAmount * 0.10;
      setCouponDiscount(discountAmt);
      setCouponSuccess(true);
      setCouponMessage(`WELCOME10 applied! 10% Off (-₹${discountAmt.toFixed(2)})`);
      localStorage.setItem('cartCouponCode', uppercaseCode);
    } else if (uppercaseCode === "FREESHIP") {
      setCouponDiscount(0);
      setCouponSuccess(true);
      setCouponMessage("Free shipping code applied successfully!");
      localStorage.setItem('cartCouponCode', uppercaseCode);
    } else {
      setCouponDiscount(0);
      setCouponSuccess(false);
      setCouponMessage("Invalid or expired coupon code.");
      localStorage.removeItem('cartCouponCode');
    }
  }, [cartTotalAmount]);

  // Coupon validation
  const applyCoupon = useCallback(async (codeStr) => {
    if (!codeStr) return;
    setLoadingCoupon(true);
    setCouponMessage("");
    try {
      const products = cart.cartItems.map(item => item._id);
      const cartItems = cart.cartItems.map(item => ({
        productId: item._id,
        quantity: item.cartQuantity
      }));
      
      const response = await CouponServices.applyCouponToProduct({
        code: codeStr,
        products,
        cart: { ...cart, cartItems: cartItems }
      });
      
      if (response && response.totals) {
        const finalPrice = response.totals.totalDiscountedPrice;
        const discountAmt = Math.max(cartTotalAmount - finalPrice, 0);
        setCouponDiscount(discountAmt);
        setCouponSuccess(true);
        setCouponMessage(`Discount Applied: -₹${discountAmt.toFixed(2)}`);
        localStorage.setItem('cartCouponCode', codeStr);
      } else {
        simulateLocalCoupon(codeStr);
      }
    } catch (err) {
      simulateLocalCoupon(codeStr);
    }
    setLoadingCoupon(false);
  }, [cart, cartTotalAmount, simulateLocalCoupon]);

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    applyCoupon(couponCode);
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponDiscount(0);
    setCouponSuccess(false);
    setCouponMessage("");
    localStorage.removeItem('cartCouponCode');
  };

  // Re-apply coupon when total changes to keep values sync'd
  useEffect(() => {
    const storedCoupon = localStorage.getItem('cartCouponCode');
    if (storedCoupon) {
      applyCoupon(storedCoupon);
    }
  }, [cartTotalAmount, applyCoupon]);

  const finalTotal = Math.max(cartTotalAmount + shippingCost + cartTaxAmount - couponDiscount, 0);

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8 lg:py-12 transition-colors duration-200 text-foreground">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground mb-8">
            Shopping Cart
          </h1>

          {cart.cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-card border border-border/40 rounded-2xl p-12 text-center shadow-sm">
              <div className="w-20 h-20 bg-muted/40 text-muted-foreground rounded-full flex items-center justify-center mb-6">
                <IoCartOutline className="text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground max-w-md mb-8 text-sm">
                Looks like you haven&apos;t added anything to your cart yet. Browse our collections to find the best furniture pieces.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 bg-primary hover:bg-primary/95 text-primary-foreground rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Cart Items List */}
              <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <div className="bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm">
                  {/* Table Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-muted/20 border-b border-border/45 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {/* Table Items */}
                  <div className="divide-y divide-border/30">
                    {cart.cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-4 items-center px-6 py-5 hover:bg-muted/10 transition-colors"
                      >
                        {/* Image + Title */}
                        <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                          <div className="relative w-16 h-16 bg-white border border-border/40 rounded-lg p-1.5 flex-shrink-0">
                            <Image
                              src={item.image?.[0] || 'https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png'}
                              alt={item.title}
                              fill
                              sizes="64px"
                              className="object-contain rounded"
                            />
                          </div>
                          <div className="flex flex-col overflow-hidden pr-4">
                            <Link
                              href={`/product/${item.slug}`}
                              className="text-sm font-bold text-foreground hover:text-primary transition-colors truncate !no-underline"
                            >
                              {item.title}
                            </Link>
                            <span className="text-xs text-muted-foreground mt-0.5">
                              Unit: {item.unit}
                            </span>
                            <button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="md:hidden flex items-center gap-1 text-red-500 hover:text-red-650 transition-colors text-xs font-semibold mt-2"
                              aria-label="Remove item"
                            >
                              <IoTrashOutline className="text-sm" /> Remove
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-4 md:col-span-2 text-left md:text-center">
                          <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                            Price
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            ₹{Number(item.price).toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="col-span-4 md:col-span-2 flex justify-start md:justify-center">
                          <div className="flex items-center gap-1.5 py-1 px-2.5 bg-muted/40 border border-border/60 rounded-lg shadow-sm">
                            <button
                              onClick={() => dispatch(decreaseCart(item))}
                              aria-label="Decrease quantity"
                              className="hover:text-primary active:scale-90 transition-all p-0.5 text-muted-foreground"
                            >
                              <IoRemoveOutline className="text-sm" />
                            </button>
                            <span className="text-xs font-extrabold text-foreground px-1.5 min-w-[16px] text-center leading-none">
                              {item.cartQuantity}
                            </span>
                            <button
                              onClick={() => dispatch(incrementCart(item))}
                              aria-label="Increase quantity"
                              className="hover:text-primary active:scale-90 transition-all p-0.5 text-muted-foreground"
                            >
                              <IoAddOutline className="text-sm" />
                            </button>
                          </div>
                        </div>

                        {/* Total price */}
                        <div className="col-span-4 md:col-span-2 flex md:flex-col justify-end items-baseline md:items-end">
                          <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-2">
                            Total:
                          </span>
                          <div className="text-right">
                            <span className="text-sm font-bold text-foreground block">
                              ₹{(item.price * item.cartQuantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="hidden md:inline-flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors text-xs font-medium mt-1"
                              aria-label="Remove item"
                            >
                              <IoTrashOutline /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center px-4">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center text-xs sm:text-sm font-bold px-5 py-2 border border-border text-foreground rounded-lg hover:bg-muted/10 transition-all !no-underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="w-full lg:w-1/3 sticky top-24 flex flex-col gap-4">
                
                {/* Free Shipping Goal Meter */}
                <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center text-xs font-semibold mb-2">
                    <span className="text-muted-foreground">
                      {remainingForFreeShipping > 0 ? (
                        <>
                          Spend <span className="font-bold text-foreground">₹{remainingForFreeShipping.toFixed(2)}</span> more for <span className="text-primary font-bold">FREE SHIPPING</span>
                        </>
                      ) : (
                        <span className="text-emerald-500 font-bold flex items-center gap-1">
                          🎉 You qualify for FREE SHIPPING!
                        </span>
                      )}
                    </span>
                    <span className="text-muted-foreground">{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-muted/40 rounded-full overflow-hidden border border-border/10">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        progressPercent >= 100 ? "bg-emerald-500" : "bg-primary"
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Sidebar Details */}
                <div className="bg-card border border-border/40 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-foreground border-b border-border/40 pb-4 mb-5">
                    Order Summary
                  </h2>

                  <div className="flex flex-col gap-3.5 mb-5 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="font-semibold text-foreground">
                        ₹{cartTotalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping estimate</span>
                      <span className={`font-semibold ${shippingCost === 0 ? "text-emerald-500" : "text-foreground"}`}>
                        {shippingCost === 0 ? "Free" : `₹${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    
                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <IoGiftOutline className="text-primary" /> Coupon Discount
                        </span>
                        <span className="font-semibold text-emerald-500">
                          -₹{couponDiscount.toFixed(2)}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax estimate</span>
                      <span className="font-semibold text-foreground">
                        ₹{cartTaxAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Coupon Code Input */}
                  <div className="border-t border-b border-border/40 py-4 mb-5">
                    {!couponSuccess ? (
                      <form onSubmit={handleCouponSubmit} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Promo Code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1 form-input py-1.5 px-3 bg-muted/40 border border-border rounded-lg text-xs focus:outline-none focus:border-primary placeholder-muted-foreground text-foreground"
                        />
                        <button
                          type="submit"
                          disabled={loadingCoupon}
                          className="px-4 py-1.5 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-lg text-xs transition duration-200 active:scale-95 disabled:opacity-50"
                        >
                          Apply
                        </button>
                      </form>
                    ) : (
                      <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg py-2 px-3 text-xs font-semibold">
                        <span className="flex items-center gap-1.5">
                          <IoGiftOutline /> Coupon Applied
                        </span>
                        <button
                          onClick={handleRemoveCoupon}
                          className="hover:text-red-500 p-0.5 rounded-full transition-colors text-sm"
                          aria-label="Remove coupon"
                        >
                          <IoCloseOutline />
                        </button>
                      </div>
                    )}
                    {couponMessage && (
                      <p className={`text-[10px] mt-1.5 font-semibold ${couponSuccess ? "text-emerald-500" : "text-red-500"}`}>
                        {couponMessage}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-baseline text-foreground">
                      <span className="text-base font-bold">Order Total</span>
                      <span className="text-xl font-extrabold text-primary">
                        ₹{finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {finalTotal < 50 ? (
                    <div className="w-full text-center">
                      <button
                        disabled
                        className="w-full inline-flex items-center justify-center text-sm font-bold py-3 px-4 bg-muted text-muted-foreground rounded-lg shadow-sm cursor-not-allowed opacity-70"
                      >
                        Proceed to Checkout
                      </button>
                      <p className="text-xs text-red-500 mt-2 font-semibold">
                        Minimum order amount is ₹50.00
                      </p>
                    </div>
                  ) : (
                    <Link
                      href="/checkout"
                      className="w-full inline-flex items-center justify-center text-sm font-bold py-3 px-4 bg-primary hover:bg-primary/95 text-primary-foreground rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline"
                    >
                      Proceed to Checkout
                    </Link>
                  )}

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    <IoShieldCheckmarkOutline className="text-emerald-500 text-sm" />
                    Secure & Encrypted Checkout
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Sticky Bottom Checkout Bar */}
          {cart.cartItems.length > 0 && (
            <div className="lg:hidden fixed bottom-16 left-0 right-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border/40 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex items-center justify-between animate-fade-in transition-all">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Order Total</span>
                <span className="text-lg font-black text-primary">₹{finalTotal.toFixed(2)}</span>
              </div>
              {finalTotal < 50 ? (
                <button
                  disabled
                  className="inline-flex items-center justify-center text-xs font-bold py-2.5 px-6 bg-muted text-muted-foreground rounded-lg shadow-md cursor-not-allowed opacity-70"
                >
                  Min ₹50
                </button>
              ) : (
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center text-xs font-bold py-2.5 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-md active:scale-95 transition-all !no-underline"
                >
                  Checkout Now
                </Link>
              )}
            </div>
          )}

          {/* Recommended Products Cross-sell */}
          {cart.cartItems.length > 0 && recommendations.length > 0 && (
            <div className="mt-16 border-t border-border/40 pt-10">
              <h3 className="text-xl font-bold text-foreground mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recommendations.map((prod, idx) => (
                  <ProductCard key={idx} product={prod} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;