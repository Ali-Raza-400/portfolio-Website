import React from 'react'
import './testimonial.css'
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <section id='testimonial'>

      <h5>Review from Client</h5>
      <h2> Testimonials</h2>
      <Swiper className="container testimonials__container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
          <img src={AVRT1} alt="" />
          </div>
          <h5 className='client__name'>John</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ratione quisquam quos ipsum veritatis aliquid excepturi natus explicabo dolor? Veniam quia ut et quaerat eveniet ad blanditiis autem aut amet.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
          <img src={AVRT2} alt="" />
          </div>
          <h5 className='client__name'>John</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ratione quisquam quos ipsum veritatis aliquid excepturi natus explicabo dolor? Veniam quia ut et quaerat eveniet ad blanditiis autem aut amet.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
          <img src={AVRT3} alt="" />
          </div>
          <h5 className='client__name'>John</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ratione quisquam quos ipsum veritatis aliquid excepturi natus explicabo dolor? Veniam quia ut et quaerat eveniet ad blanditiis autem aut amet.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
          <img src={AVRT4} alt="" />
          </div>
          <h5 className='client__name'>John</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ratione quisquam quos ipsum veritatis aliquid excepturi natus explicabo dolor? Veniam quia ut et quaerat eveniet ad blanditiis autem aut amet.</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonial