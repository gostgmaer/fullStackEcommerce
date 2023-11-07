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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCode from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BigSlider from "../elements/BigSlider";
import { productData } from "@/assets/mock/product";

const Heroslider = ({ data }) => {
  SwiperCode.use([Autoplay]);
  return (
    <Box py={1} component={"section"}>
      <Box sx={{ width: "100%", height: "100vh", m:0, p:0 }}>
        <Swiper
          navigation={true}
          pagination
          loop
          autoplay={{ delay: 100000 }}
          modules={[Navigation, Pagination]}
          className="mySwiper h-screen"
        >
          {data?.map((slide, index) => (
            <SwiperSlide key={index}>
              <BigSlider data={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Heroslider;
