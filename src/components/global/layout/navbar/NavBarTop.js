"use client"
import React from "react";
import Link from "next/link";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import dynamic from "next/dynamic";
import { content } from "@/assets/jsonfile/content";
import { useSession } from "next-auth/react";
import { handleSignOut } from "../../common/signout";
const NavBarTop = () => {
  const { data: session } = useSession();
  
  return (
    <>
  

      <div className="hidden lg:block bg-muted/40 text-muted-foreground border-b border-border/40 transition-colors duration-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="py-2.5 font-sans text-xs font-medium flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2 text-primary" />
              {content["Call Us"]}
              <Link
                href="tel:0333333333"
                className="font-bold text-primary hover:underline ml-1"
              >
                0333333333
              </Link>
            </span>

            <div className="lg:text-right flex items-center space-x-3">
              <Link href="/about-us" className="hover:text-primary transition-colors duration-200">
                {content["About Us"]}
              </Link>
              <span className="text-border">|</span>
              <Link href="/contact-us" className="hover:text-primary transition-colors duration-200">
                {content["Contact Us"]}
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/user/my-account/dashboard"
                className="hover:text-primary transition-colors duration-200"
              >
                {content["My account"]}
              </Link>
              <span className="text-border">|</span>

              {session ? (
                <button
                  onClick={() => handleSignOut()}
                  className="flex items-center hover:text-primary transition-colors duration-200"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>
                  {content.logout}
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center hover:text-primary transition-colors duration-200"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>
                  {content.Login}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
