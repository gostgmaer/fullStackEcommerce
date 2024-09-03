"use client"
import { ToastContainer } from "react-toastify";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";

import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage";
import { store } from "@/store";
// import store from "@/store";


export const metadata = {
  title: "Ecommerce Dashboard",
  description: "Created by kishor sarkar",
};

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default Layout;
