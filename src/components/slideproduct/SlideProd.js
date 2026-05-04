import React from 'react'
import Product from './Product'
import './slidepro.css'
import { Autoplay } from 'swiper/modules'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


function SlideProd({data, title}) {
  return (
    <div className='slide_products slide'>
      <div className='container'>
        <div className='top_slide'>
          <h2>{title}</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
        </div>

         <Swiper  loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={1000} 
         slidesPerView={5}

          pagination={true} modules={[Pagination ,Autoplay]} className="mySwiper">

           {data.map((item) => (
  <SwiperSlide key={item.id}>
    <Product item={item} />
  </SwiperSlide>
))}
      </Swiper>

       
      </div>
    </div>
  )
}

export default SlideProd