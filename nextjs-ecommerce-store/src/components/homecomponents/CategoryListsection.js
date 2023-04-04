import { Category, PlayArrow } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Fragment } from "react";
import CatagoryCard from "../elements/Categorycard";
import Elementlist from "../elements/Elementlist";

const CategoryList = ({ data }) => {
  return (
    <Fragment>
      <Elementlist title={"Categories"} icon=<Category />>
        {data.map((item) => (
          <CatagoryCard category={item} key={item.id} />
        ))}
      </Elementlist>
    </Fragment>
  );
};

export default CategoryList;
