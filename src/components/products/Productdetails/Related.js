import { ArrayData } from "@/assets/mock/product";
import Elementlist from "@/components/elements/Elementlist";
import Productcard from "@/components/elements/Productcard";
import { ReplayOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Related = ({data}) => {


const router = useRouter()
// console.log(router);

  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Elementlist title={"Related Products"} icon={<ReplayOutlined />}>
        {data.mobileList.slice(0,8).map((item) => (
          <Productcard key={item.id} product={item} size={undefined} />
        ))}
      </Elementlist>
    </Box>
  );
};

export default Related;
