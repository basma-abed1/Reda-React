import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import { Link } from "react-router-dom"

import img1 from '../img/banner_Hero1.jpg'
import img2 from '../img/banner_Hero2.jpg'
import img3 from '../img/banner_Hero3.jpg'

function HeroSlider() {
  return (
    <div className='Hero'>
      <div className='container'>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          loop={true}
          speed={1000}
        >

          <SwiperSlide>
            <div className='content'>
              <h4>Introducing the new</h4>
              <h3>Microsoft Xbox</h3>
              <p>Windows Xp/10/7/8 Px3,Tv Box</p>
              <Link to="/">Shop Now</Link>
            </div>
            <img src={img1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <div className='content'>
              <h4>Introducing the new</h4>
              <h3>Microsoft Xbox</h3>
              <p>Windows Xp/10/7/8 Px3,Tv Box</p>
              <Link to="/">Shop Now</Link>
            </div>
            <img src={img2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <div className='content'>
              <h4>Introducing the new</h4>
              <h3>Microsoft Xbox</h3>
              <p>Windows Xp/10/7/8 Px3,Tv Box</p>
              <Link to="/">Shop Now</Link>
            </div>
            <img src={img3} alt="" />
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  )
}

export default HeroSlider