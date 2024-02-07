
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const SingleImageslider = ({ images }) => {
    return (
        <div className='relative text-black w-full h-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={8}
                style={{ padding: "10px 0" }}
                rewind={true}
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-full"

            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>

                        <div key={index} className="w-full h-full">

                            <img
                                src={image.url}
                                alt={`slide-${index}`}
                                className="w-full object-contain h-full"
                            />
                        </div>

                    </SwiperSlide>

                ))}

                {/* Add more slides as needed */}
            </Swiper>
        </div>
    )
}

