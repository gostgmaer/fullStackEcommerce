import { ToastContainer } from "react-toastify";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";
import StoreProvider from "@/store/storeProvider";
import PaypalProvider from "@/components/elements/payment/PaypalProvider";
import MobileFooter from "./footer/MobileFooter";
import Footer from "./footer/Footer";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <StoreProvider>
        <PaypalProvider>
          <div className="font-sans min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
            <NavBarTop />
            <Navbar />
            <main className="flex-grow pb-16 lg:pb-0">{children}</main>
            <MobileFooter />
            <Footer />
          </div>
        </PaypalProvider>
      </StoreProvider>
    </>
  );
};

export default Layout;
