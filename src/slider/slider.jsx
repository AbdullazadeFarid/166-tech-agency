import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import user from '../assets/image/user.png'
import ulduz from '../assets/icon/Star.svg'

import 'swiper/css';
import "./slider.css"


import React from 'react'

const Homeswiper = () => {
  return (

    <>

<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      spaceBetween={50}
      slidesPerView={3}
      navigation

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        230: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>


            <SwiperSlide>
        <div className="home_slider_comment_cont">
            <div className='home_slider_comment_cont_head'>
              <img src={user} alt="" />
              <p>01</p>
            </div>
              <img className='home_slider_comment_cont_stars' src={ulduz} alt="" />
              <p className='home_slider_comment_cont_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>
              <div className='home_slider_comment_cont_line'></div>
              <h2>Lisa Smith</h2>
          </div>
      </SwiperSlide>

    </Swiper>

    </>
  )
}

export default Homeswiper