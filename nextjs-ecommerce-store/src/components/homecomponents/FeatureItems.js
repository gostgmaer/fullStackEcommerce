import {
  ArrowRight,
  CardGiftcard,
  Gif,
  GifBoxTwoTone,
  NewReleases,
  ShieldMoon,
  Star,
} from "@mui/icons-material";
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import Smallproductcard from "../elements/Smallproductcard";
const FeatureItems = () => {
  return (
    <Box p={3} component={"section"}>
      <Box
        sx={{
          width: "100%",
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              py: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                gap: 1,

                alignItems: "center",
              }}
            >
              <ShieldMoon /> Top Ratings
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
              width="100%"
              p="10px"
              borderRadius={5}
              bgcolor={"white"}
              m="0"
              columns={12.6}
            >
              {Array.from(Array(4).keys()).map((item) => (
                <Smallproductcard size={null} issale={false} height={"160px"} key={item} />
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              py: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                gap: 1,

                alignItems: "center",
              }}
            >
              <Star /> Featured Items
            </Typography>
            <Button variant="text" endIcon={<ArrowRight />}>
              View all
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              p="10px"
              borderRadius={5}
              bgcolor={"white"}
              gap={"10px"}
              justifyContent="space-between"
              width="100%"
              m="0"
              columns={6.1}
            >
              {Array.from(Array(2).keys()).map((item) => (
                <Smallproductcard size={null} issale={false} height={"180px"} key={item} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureItems;