import React from "react";
// import Swiper from 'swiper'
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/modules";
const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={8}
      style={{ padding: "10px 0" }}
      rewind={true}
      navigation={true}
      pagination={true}
      loop

      modules={[Navigation,Pagination]}
      className="mySwiper"
    >
      {data?.images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={`Slide ${index + 1}`}
            className=" h-full mb-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
