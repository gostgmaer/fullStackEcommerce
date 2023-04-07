import { ArrayData } from "@/assets/mock/product";
import { Box } from "@mui/material";
import React from "react";
import Reviews from "./children/Reviews";
import Reviewform from "./children/Reviewform";
import { useSession } from "next-auth/react";

const Review = () => {
  const session = useSession();
  console.log(session);
  return (
    <Box
      className="elements"
      sx={{
        width: "100%",

        p: 5,
      }}
    >
      {session.status==='authenticated' && <Reviewform />}
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
