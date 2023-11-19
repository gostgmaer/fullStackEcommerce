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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
const Elementlist = ({ children, title, icon, isSlide, slideItem,link='/product/search' }) => {
  return (
    <Box py={1} component={"section"}>
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
            sx={{
              display: "flex",
              gap: 1,

              alignItems: "center",
            }}
            variant="h4"
          >
            {icon && icon} <span>{title}</span>
          </Typography>
          <Link href={link}  >
            View all <ArrowRight/>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="flex-start"
            width="100%"
            columns={12}
          >
            {isSlide ? (
              <Swiper
                slidesPerView={slideItem}
                spaceBetween={8}
                style={{ padding: "10px 0" }}
                rewind={true}
                navigation={true}
                loop
                autoplay={{ delay: 3000 }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {children}
              </Swiper>
            ) : (
              <>{children}</>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Elementlist;
