import { Box } from "@mui/material";
import React from "react";

const Description = ({product}) => {
  return (
    <Box
      className="elements"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
       
      }}
    >
    <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </Box>
  );
};

export default Description;
