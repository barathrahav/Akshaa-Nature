"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import slideOne from "../../../public/assets/img/brand/brand-01.png";
import slideTwo from "../../../public/assets/img/brand/brand-02.png";
import slideThree from "../../../public/assets/img/brand/brand-03.png";
import slideFour from "../../../public/assets/img/brand/brand-04.png";
import slideFive from "../../../public/assets/img/brand/brand-05.png";
import slideSix from "../../../public/assets/img/brand/brand-06.png";
import Link from "next/link";
import Image from "next/image";

const BrandSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: slideOne,
    },
    {
      id: 2,
      img: slideTwo,
    },
    {
      id: 3,
      img: slideThree,
    },
    {
      id: 4,
      img: slideFour,
    },
    {
      id: 5,
      img: slideFive,
    },
    {
      id: 6,
      img: slideSix,
    },
    {
      id: 7,
      img: slideOne,
    },
  ];

  return (
    <div className="bd-brand__area grey-bg pt-95 pb-65">
      <div className="container">
        <div className="row  justify-content-between">
          <div className="col-12">
            <div className="bd-brand-active swiper-container">
              <div className="swiper-wrappers">
                <Swiper
                  modules={[Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  {sliderData.length &&
                    sliderData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="swiper-slides">
                          <div className="bd-singel__brand mb-30">
                            <Link href="#">
                              <Image
                                style={{ width: "auto", height: "100%" }}
                                src={item.img}
                                alt="brand-thumb"
                              />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
