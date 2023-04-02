import {
  ArrowForward,
  ArrowRight,
  FlashAuto,
  FlashOn,
  ImportContacts,
  Shield,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  colors,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { Item } from "../elements/Item";

const Footersection = () => {
  return (
    <Box p={3} component={"section"}>
      <Box sx={{ width: "100%", mt: 2 }}>
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
            {Array.from(Array(4).keys()).map((item) => (
              <FeatureItemscard key={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footersection;

export const FeatureItemscard = () => {
  return (
    <Grid
    item
      xs={3}
      sx={{
        "& .MuiPaper-rounded:hover": {
          boxShadow: "0px 6px 20px rgba(3, 0, 71, 0.09)",
        },
      }}
    >
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent
            sx={{
              position: "relative",
              padding: 0,
              display: "flex",
              alignItems: "center",
              height: "280px",
              justifyContent: "center",
              flexDirection: "column",
              gap:3,
              textAlign:'center',
              pb: "0 !important",
              cursor: "pointer",
            }}
          >
            <Shield style={{width:'50px',height:'50px'}} />

            <Typography gutterBottom variant="h5">
              Worldwide Delivery
            </Typography>
            <Typography gutterBottom variant="body1">
              We offer competitive prices on our 100 million plus product any
              range.
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};
