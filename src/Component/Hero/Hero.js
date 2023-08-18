import React, { useState } from 'react';
import "./Hero.css";
import Img4 from "../../Image/Image4.jpg";
import Img2 from "../../Image/Image2.jpg";
import Img3 from "../../Image/Image3.jpg";


import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';



function Hero() {
    let screenSize = window.innerWidth;
    
  return (
    <div className="HeroComtainer">
     
        <Swiper
          slidesPerView={1}
          direction={"vertical"}
          pagination={{
            clickable: 'true'
          }}
          autoplay = {
            screenSize <= 768 && {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop = {true}
          modules={[Autoplay, Pagination]}
          className='mySwiperCarosel'
        >
            <SwiperSlide>
              <img src={Img2} alt='Main_Img'/>
              <div className='ImageContent'>
                <h3>Title of vertical gallery</h3>
                <span>Travel / August 21 2023</span>
              </div>
            </SwiperSlide> 
            <SwiperSlide> 
              <img src={Img4} alt='Main_Img'/>
              <div className='ImageContent'>
                <h3>The Sound cloud <br/> You loved is doomed</h3>
                <span>Travel / August 21 2023</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='thirdSwiper-wrapper'>
              <img src={Img3} alt='Main_Img'/>
              <div className='ImageContent'>
                <h3>The Sound cloud <br/> You loved is doomed</h3>
                <span>Travel / August 21 2023</span>
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero;