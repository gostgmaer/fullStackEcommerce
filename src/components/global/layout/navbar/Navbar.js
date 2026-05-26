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
import ProductServices from "@/helper/network/services/ProductServices";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [searchText, setSearchText] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchText.trim().length <= 1) {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const res = await ProductServices.getShowingProducts({
          query: searchText.trim(),
          limit: 5
        });
        if (res && res.results) {
          setSuggestions(res.results.slice(0, 5));
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        console.error("Suggestions fetch error:", err);
      }
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

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

      <div className="sticky top-0 z-50 w-full glass-effect transition-colors duration-300">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          
          {/* Mobile Header elements (Logo, and Right Actions) */}
          <div className="flex w-full items-center justify-between lg:hidden h-16">
            <Link href="/" className="flex items-center">
              <Image
                width={90}
                height={32}
                src={mounted && theme === "dark" ? "/logo/logo-light.svg" : "/logo/logo-color.svg"}
                alt="logo"
                style={{ width: "auto", height: "auto" }}
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
          <div className="relative w-full pb-3 block lg:hidden">
            <form
              onSubmit={handleSubmit}
              className="relative bg-muted/50 dark:bg-zinc-900 border border-border rounded-lg overflow-hidden w-full transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary"
            >
              <label className="flex items-center py-0.5">
                <input
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowSuggestions(e.target.value.trim().length > 1);
                  }}
                  onFocus={() => searchText.trim().length > 1 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
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

            {/* Mobile Suggestions Overlay */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden py-2 max-h-80 overflow-y-auto animate-fade-in text-left">
                <p className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Suggested Products
                </p>
                <div className="divide-y divide-border/40">
                  {suggestions.map((product) => (
                    <Link
                      key={product._id}
                      href={`/product/${product.slug}`}
                      onClick={() => {
                        setShowSuggestions(false);
                        setSearchText("");
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 transition-colors cursor-pointer !no-underline"
                    >
                      <div className="relative w-8 h-8 rounded bg-white flex-shrink-0 border border-border/55 p-0.5 flex items-center justify-center">
                        {product.image?.[0] ? (
                          <Image
                            src={product.image[0]}
                            alt={product.title}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-[10px] text-muted-foreground font-bold">Pkg</span>
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h5 className="text-xs font-bold text-foreground truncate">{product.title}</h5>
                        <p className="text-[10px] text-muted-foreground capitalize mt-0.5">{product.category?.title || product.unit}</p>
                      </div>
                      <span className="text-xs font-extrabold text-primary flex-shrink-0">
                        ${Number(product.prices?.price || 0).toFixed(2)}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border/50 mt-1 pt-1.5 px-4">
                  <Link
                    href={`/product/search?query=${searchText}&page=1&limit=24`}
                    onClick={() => setShowSuggestions(false)}
                    className="text-xs font-semibold text-primary hover:underline flex items-center justify-between"
                  >
                    <span>View all results for &quot;{searchText}&quot;</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Header elements */}
          <div className="hidden lg:flex items-center justify-between w-full py-4">
            <Link href="/" className="mr-6 flex-shrink-0">
              <Image
                width={110}
                height={40}
                src={mounted && theme === "dark" ? "/logo/logo-light.svg" : "/logo/logo-color.svg"}
                alt="logo"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
            
            {/* Search Bar */}
            <div className="relative flex-grow max-w-[600px] mx-8">
              <form
                onSubmit={handleSubmit}
                className="relative bg-muted/50 dark:bg-zinc-900 border border-border rounded-lg overflow-hidden w-full transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary"
              >
                <label className="flex items-center py-0.5">
                  <input
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      setShowSuggestions(e.target.value.trim().length > 1);
                    }}
                    onFocus={() => searchText.trim().length > 1 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
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

              {/* Desktop Suggestions Overlay */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden py-2 max-h-80 overflow-y-auto animate-fade-in text-left">
                  <p className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Suggested Products
                  </p>
                  <div className="divide-y divide-border/40">
                    {suggestions.map((product) => (
                      <Link
                        key={product._id}
                        href={`/product/${product.slug}`}
                        onClick={() => {
                          setShowSuggestions(false);
                          setSearchText("");
                        }}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors cursor-pointer !no-underline"
                      >
                        <div className="relative w-8 h-8 rounded bg-white flex-shrink-0 border border-border/50 p-0.5 flex items-center justify-center">
                          {product.image?.[0] ? (
                            <Image
                              src={product.image[0]}
                              alt={product.title}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-[10px] text-muted-foreground font-bold">Pkg</span>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <h5 className="text-xs font-bold text-foreground truncate">{product.title}</h5>
                          <p className="text-[10px] text-muted-foreground capitalize mt-0.5">{product.category?.title || product.unit}</p>
                        </div>
                        <span className="text-xs font-extrabold text-primary flex-shrink-0">
                          ${Number(product.prices?.price || 0).toFixed(2)}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-border/50 mt-1 pt-1.5 px-4">
                    <Link
                      href={`/product/search?query=${searchText}&page=1&limit=24`}
                      onClick={() => setShowSuggestions(false)}
                      className="text-xs font-semibold text-primary hover:underline flex items-center justify-between"
                    >
                      <span>View all results for &quot;{searchText}&quot;</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
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

