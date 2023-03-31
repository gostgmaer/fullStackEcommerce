import {
  ArrowRight,
  CardGiftcard,
  FlashOn,
  Gif,
  GifBoxTwoTone,
  NewReleases,
} from "@mui/icons-material";
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCode, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BigSlider from "../elements/BigSlider";

const Heroslider = () => {
  SwiperCode.use([Autoplay]);
  return (
    <Box pt={3} component={"section"}>
      <Box sx={{ width: "100%", mt: 0 }}>
        <Swiper
          navigation={true}
          pagination
          loop
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {Array.from(Array(5).keys()).map((slide) => (
            <SwiperSlide key={slide}>
              <BigSlider />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Heroslider;
