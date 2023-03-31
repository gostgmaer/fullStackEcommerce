import {
  ArrowRight,
  CardGiftcard,
  Gif,
  GifBoxTwoTone,
  NewReleases,
} from "@mui/icons-material";
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import Smallproductcard from "../elements/Smallproductcard";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const DiscountSlider = () => {
  return (
    <Box p={3} component={"section"}>
      <Box sx={{ width: "100%", mt: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            py: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              gap: 1,

              alignItems: "center",
            }}
          >
            <CardGiftcard /> Big Dscount
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
            m="0"
            columns={12}
          >
            <Swiper
              slidesPerView={6}
              spaceBetween={8}
              style={{padding:'10px 0'}}
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Array.from(Array(12).keys()).map((item) => (
                <SwiperSlide key={item}>
                  <Smallproductcard height={null} size={12} issale={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscountSlider;
