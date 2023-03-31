import { Box, Grid, Paper, styled } from "@mui/material";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import CatagoryCard from "../elements/Categorycard";
import Productcard from "../elements/Productcard";
import Carousalelement from "../Sliderelement/Carousalelement";
import CategoryList from "./CategoryListsection";
const Sectionone = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));

  return (
    <Box minHeight={"100vh"} p={5} component={"section"}>
      <Swiper
        navigation={true}
        height={100}
        modules={[Navigation]}
        className={"max-w-[1280px] mySwiper"}
      >
        <SwiperSlide>
          <Carousalelement />
        </SwiperSlide>
        <SwiperSlide>
          <Carousalelement />
        </SwiperSlide>
        <SwiperSlide>
          <Carousalelement />
        </SwiperSlide>
        <SwiperSlide>
          <Carousalelement />
        </SwiperSlide>
        <SwiperSlide>
          <Carousalelement />
        </SwiperSlide>
      </Swiper>
      <Box sx={{ width: "100%" }}>
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
            {Array.from(Array(12).keys()).map((item) => (
              <Productcard key={item} size={undefined} />
            ))}
          </Grid>
        </Box>
      </Box>
    
    </Box>
  );
};

export default Sectionone;
