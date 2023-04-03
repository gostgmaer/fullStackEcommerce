import {
  Box,
  Grid,
  Pagination,
  Stack,
  TablePagination,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
import { array } from "yup";
import Productcard from "../elements/Productcard";
import Filter from "./child/Filter";

const BodySection = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      p={3}
      display={"flex"}
      alignItems={"flex-start"}
      gap={5}
      component={"section"}
    >
      <Box flex={1} bgcolor={colors.grey[50]}>
        <Filter/>
      </Box>
      <Box flex={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            item
            gap={"10px"}
            justifyContent="space-between"
            p="0"
            width="100%"
            m="0"
            columns={12.8}
          >
            {Array.from(Array(24).keys()).map((item) => (
              <Productcard key={item} size={4} />
            ))}
          </Grid>
        </Box>
        <Box py={3}>
          <Stack justifyContent={"space-between"} direction="row" spacing={2}>
            <Typography>
              <span>Showing</span> <span>1-24</span> of <span>4125</span>{" "}
              Products
            </Typography>
            <Pagination
              variant="outlined"
              count={10}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default BodySection;
