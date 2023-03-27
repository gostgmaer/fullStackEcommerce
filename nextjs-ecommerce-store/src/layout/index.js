import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import MuiModal from "./modal";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box className="elements">{children} </Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
