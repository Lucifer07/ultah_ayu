import {React} from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay} from 'swiper';
import "../css/ban.css"
import slide_image_1 from '../foto/1.jpg';
import slide_image_2 from '../foto/2.jpg';
import slide_image_3 from '../foto/3.jpg';
import slide_image_4 from '../foto/4.jpg';
import slide_image_5 from '../foto/5.jpg';
import slide_image_6 from '../foto/6.jpg';
import slide_image_7 from '../foto/7.jpg';
import slide_image_8 from '../foto/8.jpg';
import slide_image_9 from '../foto/9.jpg';
import { Swiper, SwiperSlide ,Scrollbar} from 'swiper/react';

export default function Swiper1 (){
    return (
        <>
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                autoplay={{
                       delay: 400,
                       disableOnInteraction: false,
                   }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay,EffectCoverflow,Scrollbar]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_8} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_9} alt="slide_image" />
                </SwiperSlide>
                
            </Swiper>
            
        </div>
        </>
    )
}