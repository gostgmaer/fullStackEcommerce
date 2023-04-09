// /react-hooks/exhaustive-deps
import { ArrayData } from "@/assets/mock/product";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reviews from "./children/Reviews";
import Reviewform from "./children/Reviewform";
import { useSession } from "next-auth/react";
import { invokeExternalAPI } from "@/lib/http";
import moment from "moment";
import { useRouter } from "next/router";

const Review = () => {
  const route = useRouter();
  const [data, setData] = useState(null);

  const getReview = async () => {
    const newParams = {
      " filters[product][$eq]": route.query.productId,
    };
    const req = await invokeExternalAPI("reviews", "get", "", {}, newParams);

    setData(req);
  };

  getReview();

  const session = useSession();
  // console.log(session);
  return (
    <Box
      className="elements"
      sx={{
        width: "100%",
        p: 5,
      }}
    >
      {session.status === "authenticated" && <Reviewform />}
  {  data?.data?.data &&  <Box
        display={"flex"}
        alignItems={"flex-start"}
        gap={2}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        {data?.data?.data?.map((item) => (
          <Reviews data={item} key={item} />
        ))}
      </Box>}
    </Box>
  );
};

export default Review;

// export async function getStaticProps(ctx) {

//   return {
//     props: { reviews: data },
//     // will be passed to the page component as props
//   };
// }
