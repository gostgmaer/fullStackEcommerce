"use client";

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { IoAddOutline, IoCart, IoClose, IoRemoveOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '@/store/reducers/cartSlice';

const CartDrawer = ({ setOpen }) => {
  const cart = useSelector((state) => state["cart"]);
  const { cartTotalAmount } = useSelector((state) => state["cart"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="flex flex-col w-full h-full bg-background">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/60 bg-muted/30 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
            <IoCart className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-base text-foreground tracking-tight">
            Shopping Cart
          </h2>
          {cart.cartItems.length > 0 && (
            <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 text-xs font-bold text-white bg-primary rounded-full">
              {cart.cartItems.length}
            </span>
          )}
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close cart"
          className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          <IoClose className="w-5 h-5" />
        </button>
      </div>

      {/* Items */}
      <div className="overflow-y-auto flex-grow scrollbar-hide">
        {cart.cartItems.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center h-full px-8 py-16 animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted dark:bg-slate-800 mb-5">
              <IoCart className="w-9 h-9 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1.5">
              Your cart is empty
            </h3>
            <p className="text-center text-sm text-muted-foreground leading-relaxed mb-6 max-w-[200px]">
              Add items to your cart to get started.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="divide-y divide-border/60">
            {cart.cartItems.map((data, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-4 py-3.5 hover:bg-muted/30 transition-colors"
              >
                {/* Product Image */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-border/60 bg-muted/30">
                  <Image
                    src={data.image[0]}
                    fill
                    sizes="56px"
                    alt={data.title}
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${data.slug}`}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-semibold text-foreground hover:text-primary transition-colors truncate leading-snug mb-0.5"
                  >
                    {data.title}
                  </Link>
                  <p className="text-xs text-muted-foreground mb-2">
                    ${data.price.toFixed(2)} each
                  </p>

                  {/* Quantity + Price row */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Quantity stepper */}
                    <div className="flex items-center gap-1 bg-muted/60 border border-border/60 rounded-lg px-1 h-7">
                      <button
                        onClick={() => dispatch(decreaseCart(data))}
                        aria-label="Decrease quantity"
                        className="w-5 h-5 flex items-center justify-center rounded hover:bg-muted text-foreground transition-colors"
                      >
                        <IoRemoveOutline className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-foreground min-w-[16px] text-center px-0.5">
                        {data.cartQuantity}
                      </span>
                      <button
                        onClick={() => dispatch(incrementCart(data))}
                        aria-label="Increase quantity"
                        className="w-5 h-5 flex items-center justify-center rounded hover:bg-muted text-foreground transition-colors"
                      >
                        <IoAddOutline className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Line total */}
                    <span className="text-sm font-bold text-foreground">
                      ${(data.price * data.cartQuantity).toFixed(2)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(removeFromCart(data))}
                      aria-label={`Remove ${data.title}`}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors rounded"
                    >
                      <MdDelete className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer — Checkout CTA */}
      {cart.cartItems.length > 0 && (
        <div className="flex-shrink-0 p-4 border-t border-border/60 bg-background space-y-3 animate-fade-in">
          {/* Subtotal */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">Subtotal</span>
            <span className="font-bold text-foreground text-base">
              ${Number(cartTotalAmount).toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Taxes and shipping calculated at checkout.
          </p>
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-sm transition-all duration-200 active:scale-[0.98] shadow-sm"
          >
            Proceed to Checkout →
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-full py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(CartDrawer), { ssr: false });
