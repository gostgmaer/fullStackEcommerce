import Elementlist from "@/components/elements/Elementlist";
import PCard from "@/components/global/products/Card";
import { ReplayOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Related = ({ data }) => {
  const router = useRouter();
console.log(data);

  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Elementlist
        title={"Related Products"}
        icon={<ReplayOutlined />}
        isSlide={undefined}
        slideItem={undefined}
      >
        {data.slice(0, 8).map((item) => (
          <PCard key={item.id} product={item} size={3} />
        ))}
      </Elementlist>
    </Box>
  );
};

export default Related;
