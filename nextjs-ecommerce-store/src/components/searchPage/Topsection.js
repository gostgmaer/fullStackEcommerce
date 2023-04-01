import { Apps, Grid4x4, ViewList } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  colors,
} from "@mui/material";
import React from "react";

const FilterSection = () => {
  const [personName, setPersonName] = React.useState("Relevance");
  const filterType = [
    "Relevance",
    "Popularity",
    "Price Low to High",
    "Price High to low",
    "Newest First",
  ];

  React.useEffect(() => {
    console.log(personName);
  }, [personName]);

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
          <span>48 </span> results found
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

export default FilterSection;
