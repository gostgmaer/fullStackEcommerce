import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Description from "./description";
import Specifications from "./specification";
import Review from "./review";
const ProductDetails = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} mt={5}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          className="[&_.MuiTab-root]:mr-5 [&_.MuiTab-root]:px-0 [&_.MuiTab-root]:hover::mr-5"
          sx={{
            "&>.MuiTabs-scroller": {
              display: "flex",
              justifyContent: "left",
              gap: "10px",
              alignItems: "center",
            },
          }}
          aria-label="basic tabs"
        >
          <Tab label="Descriptions" {...a11yProps(0)} />
          <Tab label="Specifications" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Description product={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Specifications />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Review /> */}
      </TabPanel>
    </Box>
  );
};

export default ProductDetails;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
