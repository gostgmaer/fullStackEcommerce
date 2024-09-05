
import { ToastContainer } from "react-toastify";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";
import StoreProvider from "@/store/storeProvider";



const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <StoreProvider >
        <div className="font-sans dark:text-gray-100  text-gray-800 bg-gray-50 dark:bg-gray-800">

          <NavBarTop />
          <Navbar />
          <div className="">


            {children}



          </div>
          {/* <MobileFooter /> */}
          <div className="w-full">

            <hr className="hr-line"></hr>
            <div className="border-t border-gray-100 w-full">
              {/* <Footer /> */}
            </div>

          </div>

        </div>
      </StoreProvider>
    </>
  );
};

export default Layout;
