"use client";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesItemSlideItem from "./ServicesItemSlideItem";

const ServicesItemSlider = () => {
  return (
    <div className="mt-12 app-container">
      <div className="flex items-center justify-between">
        <p className="font-medium text-[18px] leading-[21.6px] text-app-main-text">
          Branding Case Studies
        </p>
      </div>
      <div className="mt-4 gap-6 flex flex-col lg:hidden">
        <ServicesItemSlideItem />
        <ServicesItemSlideItem />
        <ServicesItemSlideItem />
      </div>
      <div className="hidden lg:block">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mt-4"
          style={{ overflow: "visible" }}
        >
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesItemSlideItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesItemSlider;
