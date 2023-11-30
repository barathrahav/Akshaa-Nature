import React from 'react';
import { useState, useEffect } from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CountUpContent from '../common/counter/CountUpContent';
// import thumbOne from "../../../public/assets/img/banner/slider/slider-01.jpg"
// import thumbTow from "../../../public/assets/img/banner/slider/slider-02.jpg"
// import thumbThree from "../../../public/assets/img/banner/slider/slider-03.jpg"
import Image from 'next/image';
import axios from 'axios';
import nextConfig from "../../../next.config"

const HeroSlider = () => {
    const [thumb1, setThumb1] = useState(''); 

    useEffect(() => {
        const fetchThumb1 = async () => {
          try {
            const response = await axios.get('http://localhost:1337/api/banners?populate=*');
            //console.log("test",response.data);
            //console.log("test",nextConfig.api_url+response.data.data[0].attributes.Banner_image.data[0].attributes.url);
            if (response.data) {
              setThumb1(nextConfig.api_url+response.data.data[0].attributes.Banner_image.data[0].attributes.url);
              
            }
          } catch (error) {
            console.error('Error fetching thumb1 image:', error);
          }
        };
    
        fetchThumb1();
      }, []);

    return (
        <div className="bd-banner__right p-relative z-index-1 mb-60">
            <div className="bd-banner__active  swiper-container">
                <div className="swiper-wrappers">
                    <Swiper
                        modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        effect={"fade"}
                        slidesPerView={1}
                        
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                            el: '.bd-banner-pagination',
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                    <img src={thumb1} alt="banner-img" width={500} height={650} />
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                <Image src={thumbTow} alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                <Image src={thumbThree}  alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
            <div className="bd-banner__shape">
               
                <span className="counter"><CountUpContent number={80} text="k" /></span>
                <span className="bd-banner__shape-line"></span>
                <p>Metric ton product <br />supplied</p>
            </div>
            <div className="bd-banner-pagination banner-pagination-1"></div>
        </div>
    );
};

export default HeroSlider;