"use client"
import React, { useContext, useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
//internal import
// import LoginModal from "@component/modal/LoginModal";

import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { content } from "@/assets/jsonfile/content";

const NavBarTop = () => {

  // const {
  //   dispatch,
  //   state: { userInfo },
  // } = useContext(UserContext);

  const [userInfo, setuserInfo] = useState(null);

  const route = useRouter()
  const [modalOpen, setModalOpen] = useState(false);

  // const handleModal = () => {
  //   if (userInfo?.email) {
  //     route.push("/my-account/dashboard");
  //   } else {
  //     setModalOpen(!modalOpen);
  //   }
  // };

  // const handleLogOut = () => {
  //   dispatch({ type: "USER_LOGOUT" });
  //   Cookies.remove("userInfo");
  //   Cookies.remove("couponInfo");
  //   route.push("/");
  // };

  return (
    <>
      {/* {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )} */}

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
              <button
                // onClick={handleModal}
                className="font-medium hover:text-emerald-600"
              >
                {content["My account"]}

              </button>
              <span className="mx-2">|</span>

              {userInfo ? (
                <>
                  {" "}
                  <button
                    // onClick={handleLogOut}
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
                  <button
                    // onClick={() => setModalOpen(!modalOpen)}
                    className="flex items-center font-medium hover:text-emerald-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>
                    {content.Login}
                  </button>
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
