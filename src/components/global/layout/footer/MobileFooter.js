"use client"
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FiHome, FiUser, FiShoppingCart, FiAlignLeft } from 'react-icons/fi';
import { SidebarContext } from '@/context/SidebarContext';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';

const MobileFooter = () => {
  const { toggleCartDrawer, toggleCategoryDrawer } = useContext(SidebarContext);
  const { data: session } = useSession();
  const { cartTotalQuantity } = useSelector((state) => state?.["cart"]);

  return (
    <>
      <footer className="lg:hidden fixed z-30 bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border/40 flex items-center justify-between w-full h-16 px-6 sm:px-10 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] transition-colors duration-200">
        <button
          aria-label="Bar"
          onClick={toggleCategoryDrawer}
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none text-foreground hover:text-primary transition-colors"
        >
          <FiAlignLeft className="w-6 h-6" />
        </button>
        
        <Link href="/" className="text-foreground hover:text-primary transition-colors flex items-center justify-center" aria-label="Home">
          <FiHome className="w-6 h-6" />
        </Link>

        <button
          onClick={toggleCartDrawer}
          aria-label="Cart"
          className="h-10 w-10 relative whitespace-nowrap inline-flex items-center justify-center text-foreground hover:text-primary transition-colors focus:outline-none"
        >
          {cartTotalQuantity > 0 && (
            <span className="absolute z-10 top-0.5 right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-primary rounded-full min-w-4 h-4">
              {cartTotalQuantity}
            </span>
          )}
          <FiShoppingCart className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center">
          {session ? (
            <Link href="/user/my-account/dashboard" className="relative flex items-center justify-center w-7 h-7">
              <Image
                width={28}
                height={28}
                src={session.user.image || '/assets/img/person.png'}
                alt="user"
                className="rounded-full border border-border bg-white"
              />
            </Link>
          ) : (
            <Link href="/auth/login" className="text-foreground hover:text-primary transition-colors flex items-center justify-center">
              <FiUser className="w-6 h-6" />
            </Link>
          )}
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(MobileFooter), { ssr: false });

