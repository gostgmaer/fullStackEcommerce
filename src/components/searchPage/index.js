import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Apps,
  ArrowDropDown,
  ArrowRight,
  ViewList,
  Circle,
  Filter1Outlined,
  FilterAlt,
  ExpandMore,
} from "@mui/icons-material";
// import Filter from "./child/Filter";
import { useGlobalContext } from "@/context/globalContext";
import PCard from "../global/products/Card";
import { ArrayData } from "../../../public/assets/mock/product";

import { useRouter, useSearchParams } from "next/navigation";
import { get } from "@/lib/network/http";
import SwipeableTemporaryDrawer from "@/layout/drawer";
import PaginationBlock from "../global/fields/PaginationBlock";
import LeftFilterSection from "./child/leftsection";


const ProductListing = ({ props }) => {
  const {
    products,
    searchProducts,
    state,
    setState,
    openModal,
    setOpenModal,
    searchData,
    setSearchData,
    category,
    setCategory,
    page,
    setPage,
    brand,
    setBrand,
    limit,
    setLimit,
    setSort,filters, setFilters,
    sort,
    price,
  } = useGlobalContext();
  useEffect(() => {
    searchProducts();
  }, [sort, limit, page, searchData,filters]);
  const params = useSearchParams();


  return (
    <Container>
      <FilterSection props={props} />
      <BodySection props={props} />
    </Container>
  );
};

export default ProductListing;

export const FilterSection = ({ props }) => {
  const { products, searchProducts, setSort, sort } = useGlobalContext();
  // const [personName, setPersonName] = React.useState("Relevance");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const sortOptions = [
    { label: "Relevance", value: "relevance-desc", default: true },
    { label: "Price: Low to High", value: "salePrice-asc" },
    { label: "Price: High to Low", value: "salePrice-desc" },
    { label: "Newest Arrivals", value: "createdAt-desc" },
    { label: "Customer Ratings", value: "ratings-desc" },
    // Add more sort options as needed
  ];



  return (
    <>
      <Box
        py={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        component={"section"}
        bgcolor={colors.grey[50]}
        borderRadius={3}
      >
        <Box className=" flex gap-2">
          <p>



          </p>
          <div className=" flex flex-col">
            <p className=" leading-4">
              Searching for “ <strong> mobile phone</strong> ”
            </p>
            <p>
              <strong>{products?.total} </strong> results found
            </p>
          </div>
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
                name={sort}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                input={<OutlinedInput />}
              >
                {sortOptions.map((name) => (
                  <MenuItem key={name.label} value={name.value}>
                    {name.label}
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

    </>
  );
};

export const BodySection = ({ props }) => {
  const {
    products,
    searchProducts,
    state,
    setState,
    openModal,
    setOpenModal,
    searchData,
    setSearchData,
    category,
    setCategory,
    page,
    setPage,
    limit,
    setLimit,
    setSort,
    sort,
  } = useGlobalContext();

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      py={2}
      display={"flex"}
      alignItems={"flex-start"}
      gap={2}
      component={"section"}
    >
      <Box flex={1.2}>
        <Filter props={props} />
      </Box>
      <Box flex={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            item
            gap={"2px"}
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
            {/* <Typography>
              <span>Showing</span>{" "}
              <span>
                {1}-{products.total}
              </span>{" "}
              of
              <span>{products.total}</span> Products
            </Typography>
            <Pagination
              variant="outlined"
              count={Math.round(products.total/limit)}
              page={page}
              onChange={handleChange}
            /> */}
            <PaginationBlock page={page} setPage={setPage} count={products.total} rowsPerPage={limit} setRowsPerPage={setLimit} perPage={[24, 48, 64]} />

          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export const Filter = ({ props }) => {
  // console.log(props);
  const {
    products,
    searchProducts,
    state,
    setState,
    openModal,
    setOpenModal,
    searchData,
    setSearchData,
    category,
    setCategory,
    page,
    setPage,
    brand,
    setBrand,
    limit,
    setLimit,
    setSort,
    price,
    setPrice,
    sort,filters, setFilters
  } = useGlobalContext();



  const handlePriceRangeChange = (event, newPriceRange) => {
    // The value will only change when the mouse leaves the slider
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newPriceRange,
    }));
  };

  const handleCheckboxChanges = (filterType, itemId) => {
    setFilters((prevFilters) => {
      const selectedItems = prevFilters[filterType];
      const index = selectedItems.indexOf(itemId);
      const updatedItems = [...selectedItems];

      if (index === -1) {
        // Item not selected, add it
        updatedItems.push(itemId);
      } else {
        // Item already selected, remove it
        updatedItems.splice(index, 1);
      }

      return {
        ...prevFilters,
        [filterType]: updatedItems,
      };
    });
    console.log(filters);
  };


  const handleClearFilter = (filterType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: [], // Reset the selected values for the given filter type
    }));
  };


  return (
    <Paper sx={{ padding: "", gap: 5, borderRadius: "" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
      <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('category')}>Clear All</button></div>
          <FormGroup>
            {props.categories.results.map((category, checked) => (
              <FormControlLabel
                key={category._id}
                control={
                  <Checkbox
                    checked={filters.category.includes(category._id)}
                    onChange={() => handleCheckboxChanges('category', category._id)}
                  />
                }
                label={category.name}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Brands
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {props.brands.results.map((brand, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.brands.includes(brand._id)}
                    onChange={() => handleCheckboxChanges('brands', brand._id)}
                  />
                }
                label={brand.name}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceRangeChange}
            onChangeCommitted={handlePriceRangeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            min={0}
            max={100}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {ArrayData.slice(0, 5).reverse().map((rate, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.rating.includes(rate)}
                    onChange={() => handleCheckboxChanges('rating', rate)}
                  />
                }
                label={<Rating
                  key={rate}
                  name="read-only-rating"
                  value={rate + 1}
                  readOnly
                />}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Tags
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {props?.tags?.results.map((tag, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.tags.includes(tag._id)}
                    onChange={() => handleCheckboxChanges('tag', tag._id)}
                  />
                }
                label={tag.name}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Availability
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            {["in stock","out of Stock"].map((stock, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.stock.includes(stock)}
                    onChange={() => handleCheckboxChanges('stock', stock)}
                  />
                }
                label={stock}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Discount
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            {["10","20","30","40","50","60"].map((discount, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.discount.includes(discount)}
                    onChange={() => handleCheckboxChanges('discount', discount)}
                  />
                }
                label={`${discount}%`}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    
   
      
    </Paper>
  );
};
