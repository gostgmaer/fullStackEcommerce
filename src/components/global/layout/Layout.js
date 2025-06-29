import { ToastContainer } from "react-toastify";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";
import StoreProvider from "@/store/storeProvider";
import PaypalProvider from "@/components/elements/payment/PaypalProvider";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <StoreProvider>
        <PaypalProvider>
          <div className="font-sans dark:text-gray-100  text-gray-800 bg-gray-50 dark:bg-gray-800">
            <NavBarTop />
            <Navbar />
            <div className="">{children}</div>
            {/* <MobileFooter /> */}
            <div className="w-full">
              <hr className="hr-line"></hr>
              <div className="border-t border-gray-100 w-full">
                {/* <Footer /> */}
              </div>
            </div>
          </div>
        </PaypalProvider>
      </StoreProvider>
    </>
  );
};

export default Layout;
