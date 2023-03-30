import { Category, PlayArrow } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Fragment } from "react";
import CatagoryCard from "../elements/Categorycard";
import Elementlist from "../elements/Elementlist";

const CategoryList = () => {
  return (
   <Fragment>
    <Elementlist title={'Categories'} icon=<Category/>>
         {Array.from(Array(12).keys()).map((item) => (
              <CatagoryCard key={item} />
            ))}
      </Elementlist>
   </Fragment>
  );
};

export default CategoryList;
