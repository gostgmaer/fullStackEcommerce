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
  ViewList,
  ExpandMore,
} from "@mui/icons-material";
// import Filter from "./child/Filter";
import { useGlobalContext } from "@/context/globalContext";
import PCard from "../global/products/Card";
import { ArrayData } from "../../../public/assets/mock/product";
import PaginationBlock from "../global/fields/PaginationBlock";

const ProductListing = ({ props }) => {
  const {
    searchProducts,
    searchData,
    page,
    limit,
    filters,sort
  } = useGlobalContext();

  useEffect(() => {
    searchProducts();
  }, [sort, limit, page, searchData, filters]);



  return (
    <Container>
      <FilterSection props={props} />
      <BodySection props={props} />
    </Container>
  );
};

export default ProductListing;

export const FilterSection = ({ props }) => {
  const { setSort, sort } = useGlobalContext();


  const sortOptions = [
    { label: "Relevance", value: "relevance-desc", default: true },
    { label: "Price: Low to High", value: "salePrice-asc" },
    { label: "Price: High to Low", value: "salePrice-desc" },
    { label: "Newest Arrivals", value: "createdAt-desc" },
    { label: "Customer Ratings", value: "ratings-desc" },
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
      
      >
        <Box className=" flex gap-2">
          <p>



          </p>
          <div className=" flex flex-col">
            <p className=" leading-4">
              Searching for “ <strong> mobile phone</strong> ”
            </p>
            <p>
              <strong>{props.data.total} </strong> results found
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

    page,
    setPage,
    limit,
    setLimit,

  } = useGlobalContext();



  return (
    <Box
      py={2}
      display={"flex"}
      alignItems={"flex-start"}
      gap={2}
      component={"section"}
      className=" border"
    >
      <Box flex={1.2} className=" max-h-screen overflow-auto">
        <Filter props={props} />
      </Box>
      <Box flex={3}>
        <Box sx={{ flexGrow: 1 }} className=" min-h-screen">
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
            {props.data.results?.map((item) => (
              <PCard key={item._id} size={4} product={item} />
            ))}
          </Grid>
        </Box>
        <Box pt={2}>
          <Stack justifyContent={"space-between"} direction="row" spacing={2}>

            <PaginationBlock page={page} setPage={setPage} count={props.data.total} rowsPerPage={limit} setRowsPerPage={setLimit} perPage={[24, 48, 64]} />

          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export const Filter = ({ props }) => {
  // console.log(props);
  const { filters, setFilters
  } = useGlobalContext();

  const [price, setPrice] = useState([0,999]);

  // console.log("Filter", props);
  const handlePriceRangeChange = (event, newPriceRange) => {
    setPrice(newPriceRange)
  };

  const handlePriceRangeChangeCommit = (event, newPriceRange) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      salePrice: newPriceRange,
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

  };


  const handleClearFilter = (filterType) => {
    setPrice([0,999])
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: filterType==="salePrice"?[0,999]: [], // Reset the selected values for the given filter type
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
          <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('categories')}>Clear All</button></div>
          <FormGroup>
            {props.categories.results.map((category, checked) => (
              <FormControlLabel
                key={category._id}
                control={
                  <Checkbox
                    checked={filters.categories.includes(category._id)}
                    onChange={() => handleCheckboxChanges('categories', category._id)}
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
        <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('brandName')}>Clear All</button></div>
          <FormGroup>
            {props.brands.results.map((brand, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.brandName.includes(brand._id)}
                    onChange={() => handleCheckboxChanges('brandName', brand._id)}
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
        <div className=" text-right">  <button  className=" text-red-800 font-semibold" onClick={() => handleClearFilter('salePrice')}>Clear All</button></div>
 
          <Slider
            value={price}
            onChange={handlePriceRangeChange}
            onChangeCommitted={handlePriceRangeChangeCommit}
            
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            min={0}
            max={999}
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
        <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('rating')}>Clear All</button></div>
 
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
        <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('tags')}>Clear All</button></div>
 

          <FormGroup>
            {props?.tags?.results.map((tag, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.tags.includes(tag)}
                    onChange={() => handleCheckboxChanges('tags', tag)}
                  />
                }
                label={tag}
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
        <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('isAvailable')}>Clear All</button></div>
 
          <FormGroup>
            {["in stock", "out of Stock"].map((stock, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={filters.isAvailable.includes(stock)}
                    onChange={() => handleCheckboxChanges('isAvailable', stock)}
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

        <div className=" text-right">  <button className=" text-red-800 font-semibold" onClick={() => handleClearFilter('discount')}>Clear All</button></div>
 
          <FormGroup>
            {["10", "20", "30", "40", "50", "60"].map((discount, index) => (
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
