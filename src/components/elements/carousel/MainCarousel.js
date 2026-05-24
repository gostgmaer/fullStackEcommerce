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
import { Navigation,Pagination,Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
// import useTranslation from "next-translate/useTranslation";


//internal import


const MainCarousel = () => {
  // const { t } = useTranslation();
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-premium group">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[450px] lg:h-[500px]"
      >
        {sliderData.map((item, i) => (
          <SwiperSlide
            className="h-full relative w-full overflow-hidden"
            key={i + 1}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-cover transform scale-105 hover:scale-100 transition-transform duration-[10000ms] ease-out"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
            </div>
            <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full justify-center">
              <div className="pl-8 sm:pl-16 md:pl-20 w-11/12 lg:w-4/5 xl:w-2/3 space-y-6 animate-slide-in-right">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Fresh Arrivals</span>
                </div>
                
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] drop-shadow-sm">
                  {/* {t(`common:${item.title}`)} */}
                  {item.title === 'Slider1Title' ? "100% Organic Fresh Harvest Delivered Daily" : item.title === 'Slider2Title' ? "Premium Artisanal Quality, Locally Sourced" : "Eat Fresh, Live Better — Save 10% Today"}
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-sans text-muted-foreground font-medium max-w-lg">
                  {/* {t(`common:${item.info}`)} */}
                  {item.info === 'Slider1description' ? "Experience farm-fresh organic groceries, hand-picked and delivered straight to your door within 1 hour. Healthy eating made effortless." : item.info === 'Slider2description' ? "Discover curated gourmet selections, organic pantry essentials, and seasonal specialties crafted by local farms." : "Get premium quality groceries at the best value prices. Use code WELCOME10 at checkout on your first order."}
                </p>
                
                <div className="pt-4 flex items-center gap-4">
                  <Link href={item.url} className="btn-premium px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(var(--primary)/40%)] text-sm !no-underline">
                    {content['Slider-btn']}
                  </Link>
                  <Link href="/about-us" className="btn-premium px-8 py-3.5 bg-background text-foreground border border-border/80 hover:bg-muted shadow-sm text-sm !no-underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
