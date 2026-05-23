"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { IoAddOutline, IoCartOutline, IoRemoveOutline, IoTrashOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';
import Layout from '@/components/global/layout/Layout';
import Price from '@/components/global/common/Price';

const CartPage = () => {
  const cart = useSelector((state) => state["cart"]);
  const { cartTotalAmount } = useSelector((state) => state["cart"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-8 lg:py-12 transition-colors duration-200">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
            Shopping Cart
          </h1>

          {cart.cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-12 text-center shadow-sm">
              <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full flex items-center justify-center mb-6">
                <IoCartOutline className="text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Your cart is empty
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 text-sm">
                Looks like you haven&apos;t added anything to your cart yet. Browse our collections to find the best fresh organic products.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Cart Items List */}
              <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  {/* Table Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {/* Table Items */}
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {cart.cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-4 items-center px-6 py-5 hover:bg-slate-50/40 dark:hover:bg-slate-800/10 transition-colors"
                      >
                        {/* Image + Title */}
                        <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                          <div className="relative w-16 h-16 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-1.5 flex-shrink-0">
                            <Image
                              src={item.image[0]}
                              alt={item.title}
                              fill
                              sizes="64px"
                              className="object-contain rounded"
                            />
                          </div>
                          <div className="flex flex-col overflow-hidden pr-4">
                            <Link
                              href={`/product/${item.slug}`}
                              className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-primary transition-colors truncate !no-underline"
                            >
                              {item.title}
                            </Link>
                            <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
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
                          <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Price
                          </span>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="col-span-4 md:col-span-2 flex justify-start md:justify-center">
                          <div className="flex items-center gap-1.5 py-1 px-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-150/40 dark:border-slate-700/60 rounded-lg shadow-sm">
                            <button
                              onClick={() => dispatch(decreaseCart(item))}
                              aria-label="Decrease quantity"
                              className="hover:text-primary active:scale-90 transition-all p-0.5"
                            >
                              <IoRemoveOutline className="text-sm text-slate-600 dark:text-slate-350" />
                            </button>
                            <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 px-1.5 min-w-[16px] text-center leading-none">
                              {item.cartQuantity}
                            </span>
                            <button
                              onClick={() => dispatch(incrementCart(item))}
                              aria-label="Increase quantity"
                              className="hover:text-primary active:scale-90 transition-all p-0.5"
                            >
                              <IoAddOutline className="text-sm text-slate-600 dark:text-slate-350" />
                            </button>
                          </div>
                        </div>

                        {/* Total price */}
                        <div className="col-span-4 md:col-span-2 flex md:flex-col justify-end items-baseline md:items-end">
                          <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-2">
                            Total:
                          </span>
                          <div className="text-right">
                            <span className="text-sm font-bold text-slate-900 dark:text-white block">
                              ${(item.price * item.cartQuantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="hidden md:inline-flex items-center gap-1 text-slate-400 hover:text-red-500 transition-colors text-xs font-medium mt-1"
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
                    className="inline-flex items-center justify-center text-xs sm:text-sm font-bold px-5 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="w-full lg:w-1/3 sticky top-24 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                    Order Summary
                  </h2>

                  <div className="flex flex-col gap-3.5 mb-5 text-sm">
                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        ${cartTotalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                      <span>Shipping estimate</span>
                      <span className="font-semibold text-emerald-600">Free</span>
                    </div>
                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                      <span>Tax estimate</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        $0.00
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                    <div className="flex justify-between items-baseline text-slate-900 dark:text-white">
                      <span className="text-base font-bold">Order Total</span>
                      <span className="text-xl font-extrabold text-primary">
                        ${cartTotalAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full inline-flex items-center justify-center text-sm font-bold py-3 px-4 bg-primary hover:bg-primary/95 text-white rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline"
                  >
                    Proceed to Checkout
                  </Link>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    <IoShieldCheckmarkOutline className="text-emerald-500 text-sm" />
                    Secure & Encrypted Checkout
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;