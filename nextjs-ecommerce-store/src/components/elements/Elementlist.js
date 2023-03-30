import {
  ArrowForward,
  ArrowRight,
  FlashAuto,
  FlashOn,
  ImportContacts,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Productcard from "./Productcard";
const Elementlist = ({ children, title, icon }) => {
  return (
    <Box  p={2} component={"section"}>
      <Box sx={{ width: "100%", mt: 2 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            py: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            {icon ? (
              <Fragment>
                {icon} {title}
              </Fragment>
            ) : (
              <Fragment>{title}</Fragment>
            )}
          </Typography>
          <Button variant="text" endIcon={<ArrowRight />}>
            View all
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            gap={"10px"}
            justifyContent="space-between"
            p="0"
            width="100%"
            m="0"
            columns={12.6}
          >
            {children}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Elementlist;
