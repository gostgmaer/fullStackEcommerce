
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { content } from "@/assets/jsonfile/content";
import { FaFacebook, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";

// import { FacebookIcon, LinkedinIcon, PinterestIcon, TwitterIcon, WhatsappIcon } from "react-share";



//internal import
// import { UserContext } from "@context/UserContext";

const Footer = () => {
  // const { t } = useTranslation();
  // const {
  //   state: { userInfo },
  // } = useContext(UserContext);

  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-card border-t border-border/30 text-foreground transition-colors duration-200">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-sm lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5 uppercase tracking-wider text-foreground">
              {content["footer-menu-title"]}
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/about-us" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-about-us"]}
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-contact-us"]}
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/terms-and-conditions" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-terms-and-conditions"]}
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/privacy-policy" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                    {content["Privacy Policy"]}
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-sm lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5 uppercase tracking-wider text-foreground">
              {content["footer-top-category"]}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/product/search?category=fish--meat" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-top-category-fish-meat"]}
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/product/search?category=drinks" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-top-category-soft-drinks"]}
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/product/search?category=baby-care" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-top-category-baby-care"]}
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/product/search?category=beauty--health" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  {content["footer-top-category-beauty-health"]}
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-sm lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5 uppercase tracking-wider text-foreground">
              Customer Support
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/track-order" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Track Your Order
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/faqs" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Frequently Asked Questions
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/shipping-policy" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Shipping & Delivery
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/return-policy" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Returns & Refunds
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/help-center" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Help Center
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us" className="text-muted-foreground inline-block w-full hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link href="/" className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
              <Image width={110} height={40} src="/logo/logo-color.svg" alt="logo" />
            </Link>
            <p className="leading-7 font-sans text-sm text-muted-foreground mt-3">
              <span>
                {content["footer-address"]}
              </span>
              <br />
              <span>  {content["footer-tell"]}</span>
              <br />
              <span>  {content["footer-email"]}</span>
            </p>
          </div>
        </div>

        <hr className="border-border/20"></hr>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-muted/20 dark:bg-muted/5 border border-border/30 rounded-xl my-4">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
            <div className="col-span-1">
              <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                {content["footer-follow-us"]}
              </span>
              <ul className="text-sm flex space-x-4">
                <li className="flex items-center transition ease-in-out duration-300">
                  <Link href="https://www.facebook.com" aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center text-muted-foreground hover:text-primary text-lg">
                    <FaFacebook/>
                  </Link>
                </li>
                <li className="flex items-center transition ease-in-out duration-300">
                  <Link href="https://twitter.com" aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center text-muted-foreground hover:text-primary text-lg">
                    <FaTwitter/>
                  </Link>
                </li>
                <li className="flex items-center transition ease-in-out duration-300">
                  <Link href="https://www.pinterest.com" aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center text-muted-foreground hover:text-primary text-lg">
                    <FaPinterest/>
                  </Link>
                </li>
                <li className="flex items-center transition ease-in-out duration-300">
                  <Link href="https://www.linkedin.com/in/tranhongtri/" aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center text-muted-foreground hover:text-primary text-lg">
                    <FaLinkedinIn/>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 text-center hidden lg:block md:block">
              <p className="text-base leading-7 font-medium block">{content["footer-call-us"]}</p>
              <h5 className="text-2xl font-bold text-primary leading-7">0333-333-333</h5>
            </div>
            <div className="col-span-1 hidden lg:block md:block">
              <ul className="lg:text-right">
                <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <Image
                    width={274}
                    height={85}
                    className="w-full filter dark:brightness-90"
                    src="/payment-method/payment-logo.png"
                    alt="payment method"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-5 border-t border-border/20">
        <p className="text-xs text-muted-foreground/70 leading-6">
          Copyright 2024 @{" "}
          <Link target="_blank" href="https://todayfruit-store.vercel.app/" className="text-primary hover:underline font-semibold" rel="noopener noreferrer">
            Today Fruit
          </Link>
          , All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

