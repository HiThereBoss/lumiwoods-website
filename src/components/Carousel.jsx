// components/GamePreviewCarousel.jsx
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
                <img
                src={imgSrc}
                alt={`Game concept ${index + 1}`}
                className="w-full h-auto object-contain rounded-xl shadow-md"
                />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}
