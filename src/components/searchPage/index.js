import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
// import FilterSection from "./Topsection";
// import BodySection from "./Bodysection";
import { Apps, ViewList } from "@mui/icons-material";
import Filter from "./child/Filter";
import Productcard from "../elements/Productcard";
import { productData } from "../../../public/assets/mock/product";
import { useGlobalContext } from "@/context/globalContext";
import PCard from "../global/products/Card";

const ProductListing = () => {
  return (
    <Container>
      <FilterSection />
      <BodySection />
    </Container>
  );
};

export default ProductListing;

export const FilterSection = () => {
  const { products } = useGlobalContext();
  const [personName, setPersonName] = React.useState("Relevance");
  const filterType = [
    "Relevance",
    "Popularity",
    "Price Low to High",
    "Price High to low",
    "Newest First",
  ];

  return (
    <Box
      p={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      component={"section"}
      bgcolor={colors.grey[50]}
      borderRadius={3}
    >
      <Box>
        <Typography fontSize={16} fontWeight={600} variant="subtitle1">
          Searching for “ <span> mobile phone</span> ”
        </Typography>
        <Typography>
          <span>{products?.total} </span> results found
        </Typography>
      </Box>
      <Box display={"flex"} gap={3} alignItems={"center"}>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Typography>Short by:</Typography>
          <FormControl sx={{ width: 200 }}>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{
                "&>.MuiSelect-outlined": {
                  padding: 1.2,
                },
              }}
              name={personName}
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              input={<OutlinedInput />}
            >
              {filterType.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Typography>View:</Typography>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <ViewList />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export const BodySection = () => {
  const { products } = useGlobalContext();
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
        <Filter />
      </Box>
      <Box flex={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            item
            gap={"5px"}
            justifyContent="flex-start"
            p="0"
            width="100%"
            m="0"
            columns={12.17}
          >
            {products?.["results"]?.map((item) => (
              <PCard key={item._id} size={4} product={item} />
            ))}
          </Grid>
        </Box>
        <Box py={3}>
          <Stack justifyContent={"space-between"} direction="row" spacing={2}>
            <Typography>
              <span>Showing</span> <span>1-24</span> of <span>{products.total}</span>{" "}
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
