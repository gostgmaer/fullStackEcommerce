import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, LinearProgress } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import MuiModal from "./modal";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box
        className="elements"
        minHeight={"100vh"}
        
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 0 }}
      >
        {children}
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Layout;
