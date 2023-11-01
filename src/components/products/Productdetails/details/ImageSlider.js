import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { imagesData } from "@/assets/mock/images";
import Image from "next/image";

export default function ImageSlider() {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        style={{ width: "100%" }}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {imagesData.map((item, index) => (
          <SwiperSlide
            style={{
              objectFit: "contain",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <Image
              width={420}
              height={360}
              style={{
                objectFit: "contain",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={item.attributes.image.large}
              alt="product images"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
