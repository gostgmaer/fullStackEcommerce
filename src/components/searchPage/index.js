import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
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
} from "@mui/icons-material";
// import Filter from "./child/Filter";
import { useGlobalContext } from "@/context/globalContext";
import PCard from "../global/products/Card";
import { ArrayData } from "../../../public/assets/mock/product";

import { useRouter, useSearchParams } from "next/navigation";
import { get } from "@/lib/network/http";
import SwipeableTemporaryDrawer from "@/layout/drawer";
import PaginationBlock from "../global/fields/PaginationBlock";

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
    setSort,
    sort,
    price,
  } = useGlobalContext();

  // const getProducts =async ()=>{
  //   const res=  await get('/products')
  //   //console.log(res);
  //   setProduct(res)
  // }

  // //console.log(props);

  useEffect(() => {
    searchProducts();
  }, [sort, limit, page, category, searchData, brand, price]);
  const params = useSearchParams();
  // params.append()
  // route.push({
  //   query: {
  //     filter: 'categories',
  //   },
  // })

  // params.set

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
            {/* <Button onClick={toggleDrawer("left", true)}>{"left"}</Button> */}
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleDrawer("left", true)}
            >
              <FilterAlt /> Filter
            </button>
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
      <SwipeableTemporaryDrawer state={state} toggleDrawer={toggleDrawer}>
        <Filter props={props} />
      </SwipeableTemporaryDrawer>
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
      gap={5}
      component={"section"}
    >
      {/* <Box flex={1} bgcolor={colors.grey[50]}>
        <Filter props={props} />
      </Box> */}
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
              <PCard key={item._id} size={3} product={item} />
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
            <PaginationBlock page={page} setPage={setPage} count={products.total} rowsPerPage={limit} setRowsPerPage={setLimit} perPage={[24,48,64]}/>
            
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export const Filter = ({ props }) => {
 // //console.log(props);
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
    sort,
  } = useGlobalContext();

  const [value, setValue] = useState([0, 2000]);

  const handleChange = (event, newValue) => {
   // //console.log(event.target.value);
    setPrice(event.target.value);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [personName, setPersonName] = React.useState([]);

  var newCate = [];

  const handleSelectChange = (e) => {
    const cate = e.target.value;

    if (e.target.checked === true && !newCate.includes(cate)) {
      newCate.push(cate);
    } else if (e.target.checked === false) {
      newCate = newCate.filter((value) => value !== cate);
    }
    ////console.log(newCate);
    setCategory(newCate);
  };

  const [height, setHeight] = useState(false);
  return (
    <Paper sx={{ padding: "18px 27px", gap: 5, borderRadius: "" }}>
      <Stack gap="8px">
        <Typography variant="h5">Categories</Typography>

        <Box>
          {/* <FormControl sx={{ m: 1, width: 250 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Categories
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleSelectChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

          {/* <FormControl sx={{ m: 1, minWidth: 120,width:"100%" }} size="small">
            <Select
              id="brand-select-small"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select"
            >
              <MenuItem defaultValue={""} value="">
                <em>Select</em>
              </MenuItem>

              {props.categories.results.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

          {/* <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-categories"
            name="controlled-radio-buttons-categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {props.categories.results.map((item) => (
              <FormControlLabel
                key={item._id}
                value={item._id}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup> */}

          <FormGroup>
            {props.categories.results.map((item) => (
              <FormControlLabel
                key={item._id}
                control={
                  <Radio
                    value={item._id}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                }
                label={item.name}
              />
            ))}
          </FormGroup>
        </Box>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Price Range</Typography>

        <Stack width={"100%"}>
          <Stack direction={"row"}>
            <Input
              sx={{ flex: 1 }}
              type="number"
              value={price?.[0]}
              slotProps={{
                input: {
                  min: 0,
                  max: 999999,
                  step: 1,
                },
              }}
            ></Input>
            <Stack
              direction={"row"}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              -
            </Stack>
            <Input
              type="number"
              sx={{ flex: 1 }}
              value={price?.[1]}
              slotProps={{
                input: {
                  min: 0,
                  max: 999999,
                  step: 1,
                },
              }}
            ></Input>
          </Stack>
          <Slider
            value={price}
            min={0}
            step={1}
            max={1000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </Stack>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Brands</Typography>

        <Stack width={"100%"}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              id="brand-select-small"
              value={brand}
              defaultValue={""}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Select"
            >
              <MenuItem defaultChecked value="">
                <em>None</em>
              </MenuItem>

              {props.brands.results.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Ratings</Typography>

        <Stack width={"100%"}>
          <FormGroup className=" flex flex-col-reverse">
            {ArrayData.slice(0, 5).map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={
                  <Rating
                    key={item}
                    name="read-only-rating"
                    value={item + 1}
                    readOnly
                  />
                }
              />
            ))}
          </FormGroup>
        </Stack>
      </Stack>
      {/* <Stack gap="8px" mt={2}>
        <Typography variant="h5">Colors</Typography>

        <Stack direction={"row"} width={"100%"}>
          {colorArray.map((item) => (
            // @ts-ignore
            <Circle
              key={item}
              sx={{ cursor: "pointer" }}
              color={`${item}`}
              fontSize="large"
            />
          ))}
        </Stack>
      </Stack> */}
      {/* <Stack gap="8px" mt={2}>
        <Typography variant="h5">Status</Typography>

        <Stack  width={"100%"}>
        
            {colorArray.slice(0,3).map((item) => (
               // @ts-ignore
               <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={`Label ${item}`}
              />
             
            ))}
        
        </Stack>
      </Stack> */}
    </Paper>
  );
};
