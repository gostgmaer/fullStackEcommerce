import { Box, Typography } from "@mui/material";
import React from "react";

const Footertwo = () => {
  return (
    <Box flex={1}>
      <Typography fontSize={24} variant="h4">Customer Care</Typography>
      <Box   sx={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}>
       
          {Array.from(Array(5).keys()).map((item) => (
            <Typography sx={{}} key={item}>Privacy</Typography>
          ))}
      
      </Box>
    </Box>
  );
};

export default Footertwo;
