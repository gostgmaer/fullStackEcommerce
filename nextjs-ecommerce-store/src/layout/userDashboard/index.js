import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box } from "@mui/material";
import React, { Fragment } from "react";

const UserDashboard = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box
        className="elements"
        minHeight={"100vh"}
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
      >
        {children}
      </Box>

      <Footer />
    </Fragment>
  );
};

export default UserDashboard;
