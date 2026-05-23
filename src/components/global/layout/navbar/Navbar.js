"use client";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import { useRouter } from "next/navigation";
import NavbarPromo from "./NavbarPromo";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "@/store/reducers/cartSlice";

import SideDrawer from "../drawer/drawar";
import CartDrawer from "../drawer/CartDrawer";
import { content } from "@/assets/jsonfile/content";
import { fetchSetting } from "@/store/reducers/settingsSlice";
import ThemeToggle from "@/components/global/DarkLight";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [searchText, setSearchText] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const router = useRouter();
  const cart = useSelector((state) => state?.["cart"]);
  const { cartTotalQuantity } = useSelector((state) => state?.["cart"]);
  const { setting } = useSelector((state) => state?.["setting"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!setting) {
      dispatch(fetchSetting());
    }
  }, [dispatch, setting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/product/search?query=${searchText}&page=${1}&limit=${24}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      <SideDrawer open={openCart} setOpen={setOpenCart}>
        <CartDrawer setOpen={setOpenCart} />
      </SideDrawer>

      <div className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-colors duration-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          
          {/* Mobile Header elements (Logo, and Right Actions) */}
          <div className="flex w-full items-center justify-between lg:hidden h-16">
            <Link href="/" className="flex items-center">
              <Image
                width={90}
                height={32}
                src={mounted && theme === "dark" ? "/logo/logo-light.svg" : "/logo/logo-color.svg"}
                alt="logo"
                priority
              />
            </Link>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              <button
                aria-label="Total"
                onClick={() => setOpenCart(true)}
                className="relative p-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                {cartTotalQuantity > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-semibold leading-none text-white bg-primary rounded-full">
                    {cartTotalQuantity}
                  </span>
                )}
                <FiShoppingCart className="w-5 h-5" />
              </button>
              
              {session ? (
                <Link href="/user/my-account/dashboard" className="p-1">
                  <Image
                    width={24}
                    height={24}
                    src={session?.user?.image || '/assets/img/person.png'}
                    alt="user"
                    className="bg-white border border-border rounded-full"
                  />
                </Link>
              ) : (
                <Link href="/auth/login" className="p-2 text-foreground hover:text-primary transition-colors duration-200">
                  <FiUser className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Search Row */}
          <div className="w-full pb-3 block lg:hidden">
            <form
              onSubmit={handleSubmit}
              className="relative bg-muted/50 dark:bg-zinc-900 border border-border rounded-lg overflow-hidden w-full transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary"
            >
              <label className="flex items-center py-0.5">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className="w-full pl-4 pr-12 appearance-none bg-transparent py-2 text-sm font-sans focus:outline-none placeholder-muted-foreground text-foreground"
                  placeholder={content["search-placeholder"]}
                />
              </label>
              <button
                aria-label="Search"
                type="submit"
                className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <IoSearchOutline className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Desktop Header elements */}
          <div className="hidden lg:flex items-center justify-between w-full py-4">
            <Link href="/" className="mr-6 flex-shrink-0">
              <Image
                width={110}
                height={40}
                src={mounted && theme === "dark" ? "/logo/logo-light.svg" : "/logo/logo-color.svg"}
                alt="logo"
                priority
              />
            </Link>
            
            {/* Search Bar */}
            <div className="flex-grow max-w-[600px] mx-8">
              <form
                onSubmit={handleSubmit}
                className="relative bg-muted/50 dark:bg-zinc-900 border border-border rounded-lg overflow-hidden w-full transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary"
              >
                <label className="flex items-center py-0.5">
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    className="w-full pl-4 pr-12 appearance-none bg-transparent py-2.5 text-sm font-sans focus:outline-none placeholder-muted-foreground text-foreground"
                    placeholder={content["search-placeholder"]}
                  />
                </label>
                <button
                  aria-label="Search"
                  type="submit"
                  className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <IoSearchOutline className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Alert"
              >
                <FiBell className="w-5 h-5" />
              </button>
              
              <ThemeToggle />
              
              <button
                aria-label="Total"
                onClick={() => setOpenCart(true)}
                className="relative flex items-center space-x-2 p-2 bg-muted/50 dark:bg-zinc-900 border border-border rounded-lg text-foreground hover:bg-muted dark:hover:bg-zinc-800 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
                <span className="text-xs font-semibold">Cart</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-primary rounded-full">
                  {cartTotalQuantity}
                </span>
              </button>
              
              {session ? (
                <Link
                  href="/user/my-account/dashboard"
                  className="flex items-center space-x-2 border border-border hover:bg-muted dark:hover:bg-zinc-900 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <Image
                    width={24}
                    height={24}
                    src={session?.user?.image || '/assets/img/person.png'}
                    alt="user"
                    className="bg-white border border-border rounded-full"
                  />
                  <span className="text-xs font-medium text-foreground truncate max-w-[100px]">
                    {session?.user?.name || "Account"}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  <FiUser className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>

        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

