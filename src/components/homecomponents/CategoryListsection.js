import { Category, PlayArrow } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Fragment } from "react";
import CatagoryCard from "../elements/Categorycard";
import Elementlist from "../elements/Elementlist";
import CategoryBlock from "../elements/Categorycard";
import { SwiperSlide } from "swiper/react";

const CategoryList = ({ data }) => {
// //console.log(data);
  return (
    <Fragment>
      <Elementlist
        title={"Categories"}
        icon=<Category />
        isSlide={1}
        slideItem={6}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryBlock category={item} key={item._id} size={12} />
          </SwiperSlide>
        ))}
      </Elementlist>
    </Fragment>
  );
};

export default CategoryList;
