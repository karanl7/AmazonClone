import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        // loopedSlides={4}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 8600
        }}
        spaceBetween={0}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"/images/carousel_1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/carousel_2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src="/images/carousel_vid.mp4" type="video/mp4"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/carousel_3.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/carousel_4.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/carousel_5.jpg"}/>
        </SwiperSlide>

      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"/>
    </div>
  )
};

export default Carousel;