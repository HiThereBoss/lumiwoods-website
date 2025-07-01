import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GamePreviewCarousel({ images }) {
    return (
        <div className="w-full max-w-5xl mx-auto">
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="rounded-xl"
        >
            {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
                <img
                    src={imgSrc}
                    alt={`Game concept ${index + 1}`}
                    className="max-h-full max-w-full object-contain rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#E3D6C5]"
                />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}
