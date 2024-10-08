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
  

      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              {/* {t("common:Call Us")} */}
              {content["Call Us"]}
              <Link
                href="tel:0333333333"
                className="font-bold text-emerald-500 ml-1"
              >
                0333333333
              </Link>
            </span>

            <div className="lg:text-right flex items-center">
              <Link href="/about-us" className="font-medium hover:text-emerald-600">
                {content["About Us"]}
              </Link>
              <span className="mx-2">|</span>
              <Link href="/contact-us" className="font-medium hover:text-emerald-600">

                {
                  content["Contact Us"]
                }

              </Link>
              <span className="mx-2">|</span>
              <Link
              href={"/user/my-account/dashboard"}
                className="font-medium hover:text-emerald-600"
              >
                {content["My account"]}

              </Link>
              <span className="mx-2">|</span>

              {session ? (
                <>
                  {" "}
                  <button
                   onClick={() => handleSignOut()}
                    className="flex items-center font-medium hover:text-emerald-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>
                    {content.logout}
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                   href={'/auth/login'}
                    className="flex items-center font-medium hover:text-emerald-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>
                    {content.Login}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
