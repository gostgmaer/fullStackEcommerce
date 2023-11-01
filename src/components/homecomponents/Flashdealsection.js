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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCode from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Productcard from "../elements/Productcard";

const FlashDeal = ({data}) => {
  SwiperCode.use([Autoplay]);
  return (
    <Box p={3} py={1} component={"section"}>
      <Box sx={{ width: "100%", mt: 0 }}>
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
            variant="h4"
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <FlashOn /> Flash Deal
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
            m=""
            columns={12}
          >
            <Swiper
              slidesPerView={5}
              spaceBetween={8}
              style={{ padding: "10px 0" }}
              rewind={true}
              navigation={true}
              loop
              autoplay={{ delay: 3000 }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Productcard product={item} size={12} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FlashDeal;
