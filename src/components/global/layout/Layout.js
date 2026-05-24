"use client";

import { ToastContainer } from "react-toastify";
import AnnouncementBar from "./navbar/AnnouncementBar";
import NavBarTop from "./navbar/NavBarTop";
import Navbar from "./navbar/Navbar";
import MobileFooter from "./footer/MobileFooter";
import Footer from "./footer/Footer";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className="font-sans min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
        <AnnouncementBar />
        <NavBarTop />
        <Navbar />
        <main className="flex-grow pb-16 lg:pb-0">{children}</main>
        <MobileFooter />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
