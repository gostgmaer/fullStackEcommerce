import Head from "next/head";
import { ToastContainer } from "react-toastify";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";
import MobileFooter from "./footer/MobileFooter";
import Footer from "./footer/Footer";

export const metadata = {
  title: "Ecommerce Dashboard",
  description: "Created by kishor sarkar",
};

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className="font-sans dark:text-gray-100  text-gray-800 bg-gray-50 dark:bg-gray-800">
       
        <NavBarTop />
        <Navbar />
        <div className="">{children}</div>
        {/* <MobileFooter /> */}
        <div className="w-full">
          {/* <FooterTop /> */}
          {/* <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div> */}
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
