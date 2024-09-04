"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { sliderData } from '@/utils/data';
import { content } from '@/assets/jsonfile/content';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
// import useTranslation from "next-translate/useTranslation";


//internal import


const MainCarousel = () => {
  // const { t } = useTranslation();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
     
        className="mySwiper"
      >
        {sliderData.map((item, i) => (
          <SwiperSlide
            className="h-full relative rounded-lg overflow-hidden"
            key={i + 1}
          >
            <div className="text-sm  hover:text-emerald-dark">
              <Image
                layout="responsive"
                width={950}
                height={400}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold  text-gray-800">
                  {/* {t(`common:${item.title}`)} */}
                  {item.title}
                </h1>
                <p className="text-base leading-6  font-sans line-clamp-1 dark:text-gray-700  md:line-clamp-none lg:line-clamp-none">
                  {/* {t(`common:${item.info}`)} */}
                  {item.info}
                </p>
                <Link href={item.url}>
                  {/* <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                   
                    
                  </a> */}
                  {content['Slider-btn']}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel
