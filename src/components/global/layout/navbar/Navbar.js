"use client";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import { useRouter } from "next/navigation";
import NavbarPromo from "./NavbarPromo";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "@/store/reducers/cartSlice";

//internal import
// import NavbarPromo from "@layout/navbar/NavbarPromo";
// import { UserContext } from "@context/UserContext";
// import LoginModal from "@component/modal/LoginModal";
import SideDrawer from "../drawer/drawar";
import CartDrawer from "../drawer/CartDrawer";
import { content } from "@/assets/jsonfile/content";
import { fetchSetting } from "@/store/reducers/settingsSlice";
// import { fetchWishlist } from "@/store/reducers/wishslice";
// import { SidebarContext } from "@context/SidebarContext";

const Navbar = () => {
  // const { t } = useTranslation();
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // const [userInfo, userInfoset] = useState(null);
  // const { toggleCartDrawer } = useContext(SidebarContext);
  // const { totalItems } = useCart();
  const router = useRouter();
  const cart = useSelector((state) => state?.["cart"]);
  const { cartTotalQuantity } = useSelector((state) => state?.["cart"]);
  const { setting } = useSelector((state) => state?.["setting"]);
  // console.log(setting);

  // const {
  //   state: { userInfo },
  // } = useContext(UserContext);

  // const token = { "Authorization": `Bearer ${session?.["accessToken"]}` }

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
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setImageUrl(user.image);
    }
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      <SideDrawer open={openCart} setOpen={setOpenCart}>
        <CartDrawer setOpen={setOpenCart} />
      </SideDrawer>

      <div className="bg-emerald-500 text-white sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
            >
              <Image
                width={110}
                height={40}
                src="./logo/logo-light.svg"
                alt="logo"
              />
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full placeholder:text-gray-500 text-gray-700">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder={content["search-placeholder"]}
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="pr-5  text-2xl font-bold" aria-label="Alert">
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>
              <button
                aria-label="Total"
                onClick={() => setOpenCart(true)}
                className="relative px-5  text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartTotalQuantity}
                </span>
                <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}

              <button className="pl-5  text-2xl font-bold" aria-label="Login">
                {session ? (
                  <Link
                    href="/user/my-account/dashboard"
                    className=" top-1 relative 2-6 h-6"
                  >
                    <Image
                      width={29}
                      height={29}
                      src={session?.user?.image || '/assets/img/person.png'}
                      
                      alt="user"
                      className="bg-white rounded-full"
                    />
                  </Link>
                ) : session ? (
                  <Link
                    className="leading-none font-bold font-serif block"
                    href="/user/my-account/dashboard"
                  >
                    {session?.user?.name}
                  </Link>
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </span>
                )}
              </button>
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
