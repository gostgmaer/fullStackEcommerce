import { ArrayData } from "@/assets/mock/product";
import { Box } from "@mui/material";
import React from "react";
import Reviews from "./children/Reviews";
import Reviewform from "./children/Reviewform";

const Review = () => {
  return (
    <Box
      className="elements"
      sx={{
        width: "100%",
       
        p: 5,
      }}
    >
       <Reviewform/>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        gap={2}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        {ArrayData.map((item) => (
          <Reviews key={item} />
        ))}
      </Box>
   
    </Box>
  );
};

export default Review;
