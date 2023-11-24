import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Input,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Rating,
  Select,
  Slider,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import { Apps, ArrowDropDown, ArrowRight, ViewList,Circle } from "@mui/icons-material";
// import Filter from "./child/Filter";
import { useGlobalContext } from "@/context/globalContext";
import PCard from "../global/products/Card";
import { ArrayData } from "../../../public/assets/mock/product";
import { Router } from "next/router";

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



export const Filter = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [value, setValue] = useState([0, 2000]);
  let colorArray =['action','primary','secondary','error','info','success','warning']

  const handleChange = (event, newValue) => {
    // console.log(event);
    setValue(event.target.value);
  };

  const [height, setHeight] = useState(false);
  return (
    <Paper sx={{ padding: "18px 27px", gap: 5, borderRadius: "16px" }}>
      <Stack gap="8px">
        <Typography variant="h5">Categories</Typography>
        <Box
          sx={{
            transition: "height 250ms ease-in-out 0s",
            height: height ? `${ArrayData.length * 32.5}px` : "25px",
            overflow: "hidden",
            gap: "8px",
          }}
        >
          <Typography
            variant="body2"
            display={"flex"}
            sx={{cursor:'pointer'}}
            fontSize={'1rem'}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={() => setHeight(!height)}
          >
            Bath Preparations
            {height ? <ArrowDropDown /> : <ArrowRight />}
          </Typography>
          {ArrayData.map((item) => (
            <Typography fontSize={'1rem'} sx={{cursor:'pointer'}} pt={"10px"} pl={"15px"} key={item} variant="body2">
              {item} category child
            </Typography>
          ))}
        </Box>
        <Typography fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Typography fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Typography fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Typography fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Typography  fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Typography  fontSize={'1rem'} variant="body2">Bath Preparations</Typography>
        <Box></Box>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Price Range</Typography>

        <Stack width={"100%"}>
          <Stack direction={"row"}>
            <Input
              sx={{ flex: 1 }}
              type="number"
              value={value[0]}
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
              value={value[1]}
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
            value={value}
            min={0}
            step={1}
            max={95400}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </Stack>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Brands</Typography>

        <Stack width={"100%"}>
          <FormGroup>
            {ArrayData.slice(0, 6).map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={`Label ${item}`}
              />
            ))}
          </FormGroup>
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

                label={ <Rating key={item} name="read-only-rating" value={item+1} readOnly />}
              />
             
            ))}
          </FormGroup>
        </Stack>
      </Stack>
      <Stack gap="8px" mt={2}>
        <Typography variant="h5">Colors</Typography>

        <Stack direction={'row'} width={"100%"}>
        
            {colorArray.map((item) => (
               // @ts-ignore
               <Circle key={item} sx={{cursor:'pointer'}} color={`${item}`} fontSize='large'/>
             
            ))}
        
        </Stack>
      </Stack>
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