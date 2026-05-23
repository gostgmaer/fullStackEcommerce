import { Fragment, useState } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { content } from "@/assets/jsonfile/content";

const NavbarPromo = () => {
  return (
    <>
      <div className="hidden lg:block bg-card text-foreground border-b border-border/40 transition-colors duration-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 h-12 flex justify-between items-center">
          <div className="inline-flex">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className="md:flex space-x-8 items-center"
                  >
                    <Link
                      href="/about-us"
                      className="mx-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {content["About Us"]}
                    </Link>
                    <Link
                      href="/contact-us"
                      className="mx-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {content["Contact Us"]}
                    </Link>
                    <Link
                      href="/faqs"
                      className="mx-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {content.FAQ}
                    </Link>

                    <Link
                      href="/offer"
                      className="relative inline-flex items-center h-6 bg-red-100 dark:bg-red-950/40 ml-2 py-0 px-2.5 rounded-full text-xs font-semibold text-red-500 dark:text-red-400 hover:text-red-600 transition-colors"
                    >
                      {content.Offers}
                      <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </div>
                    </Link>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {content["Privacy Policy"]}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {content["Terms & Conditions"]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
