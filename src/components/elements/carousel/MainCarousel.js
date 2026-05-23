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
     
        className="mySwiper rounded-xl overflow-hidden shadow-sm"
      >
        {sliderData.map((item, i) => (
          <SwiperSlide
            className="h-full relative rounded-xl overflow-hidden"
            key={i + 1}
          >
            <div className="text-sm h-full w-full">
              <Image
                layout="responsive"
                width={950}
                height={400}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full justify-center bg-slate-950/10 dark:bg-slate-950/20">
              <div className="pl-6 pr-12 sm:pl-12 sm:pr-16 w-10/12 lg:w-9/12 xl:w-8/12">
                <h1 className="mb-2 font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  {/* {t(`common:${item.title}`)} */}
                  {item.title === 'Slider1Title' ? "The Best Quality Products Guaranteed!" : item.title === 'Slider2Title' ? "Best Different Type of Grocery Store" : "Quality Freshness Guaranteed!"}
                </h1>
                <p className="text-sm sm:text-base leading-relaxed font-sans text-slate-700 font-medium mb-4 max-w-md line-clamp-2 md:line-clamp-none">
                  {/* {t(`common:${item.info}`)} */}
                  {item.info === 'Slider1description' ? "Dramatically facilitate effective total linkage for go forward processes..." : item.info === 'Slider2description' ? "Quickly aggregate empowered networks after emerging products..." : "Intrinsicly fashion performance based products rather than accurate benefits..."}
                </p>
                <Link href={item.url} className="inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer !no-underline">
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
