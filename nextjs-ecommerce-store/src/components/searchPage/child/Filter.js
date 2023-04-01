import { ArrayData } from "@/assets/mock/product";
import { ArrowDropDown, ArrowRight, Circle, ExpandMore } from "@mui/icons-material";
import { Input } from "@mui/joy";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormGroup,
  FormControl,
  Checkbox,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
  colors,
  FormControlLabel,
  Rating,
} from "@mui/material";
import React, { useState } from "react";

const Filter = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [value, setValue] = useState([0, 2000]);
  let colorArray =['action','primary','secondary','error','info','success','warning']

  const handleChange = (event, newValue) => {
    console.log(event);
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
          <FormGroup>
            {ArrayData.slice(0, 5).map((item) => (
                <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={ <Rating key={item} name="read-only" readOnly />}
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
      <Stack gap="8px" mt={2}>
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
      </Stack>
    </Paper>
  );
};

export default Filter;
