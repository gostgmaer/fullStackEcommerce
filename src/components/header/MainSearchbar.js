import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  OutlinedInput,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { productData } from "@/assets/mock/product";
import { useFetcher } from "@/lib/helper";
const MainSearchbar = () => {
  const [anchorElcate, setAnchorElcate] = useState(null);
  const [value, setValue] = useState("");
  const opencate = Boolean(anchorElcate);
  useEffect(() => {
   // console.log(value);
  }, [value]);

  const handleClickcate = (event) => {
    setAnchorElcate(event.currentTarget);
  };
  const handleClosecate = (event) => {
    setAnchorElcate(null);
  };
  const handleMenuClick = (params) => {
    setValue(params.target.textContent);
  };

  // const category = useFetcher('categories')

  const handleMenuClose = (params) => {};
  return (
    <Box
      component="form"
      sx={{
        p: "2px 4px",
        flex: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        m: "0px !important",
        bgcolor: "transparent",
        border: "none",
      }}
    >
      <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search"
          size="small"
          placeholder="Searching for...."
          color="error"
          sx={{
            borderRadius: "1200px",
            p: 0,
            height: "44px",
            overflow: "hidden",
          }}
          endAdornment={
            <Button
              variant="contained"
              color="inherit"
              aria-label="more"
              id="long-button"
              aria-controls={opencate ? "long-menu" : undefined}
              aria-expanded={opencate ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClickcate}
              disableElevation
              endIcon={opencate ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                px: 3,
                height: "100%",
                textTransform: "capitalize",
                background: "#F6F9FC",
                borderRadius: "0 0 0 0",
                width: "220px",

                alignItems: "center",
                borderLeft: "1px solid #DAE1E7",
              }}
            >
              {value ? value : "All Category"}
            </Button>
          }
          startAdornment={
            <IconButton
              sx={{
                height: "100%",
              }}
            >
              <Search />
            </IconButton>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
      <Menu
        id="long-menu"
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: { width: "140px", backgroundColor: "#fff" },
          //   sx: {
          //     overflow: "visible",
          //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          //     mt: 1.5,
          //     "& .MuiAvatar-root": {
          //       width: 32,
          //       height: 32,
          //       ml: -0.5,
          //       mr: 1,
          //     },
          //     "&:before": {
          //       content: '""',
          //       display: "block",
          //       position: "absolute",
          //       top: 0,
          //       right: 14,
          //       width: 10,
          //       height: 10,
          //       bgcolor: "background.paper",
          //       transform: "translateY(-50%) rotate(45deg)",
          //       zIndex: 0,
          //     },
          //   },
        }}
        anchorEl={anchorElcate}
        open={opencate}
        onClose={() => setAnchorElcate(null)}
        onClick={() => setAnchorElcate(null)}
      >
        {value !== "All Category" && (
          <MenuItem onClick={handleMenuClick}>All Category</MenuItem>
        )}
        {productData.bottomCategories.map((option) => (
          <MenuItem key={option.id} onClick={handleMenuClick}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MainSearchbar;
