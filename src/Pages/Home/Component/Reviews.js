import React from 'react';
import {
    useQuery
  } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewsCard from './ReviewsCard';
import Loader from '../../../SharedComponent/Loader/Loader';
const Reviews = () => {
    const {data:reviews,isLoading}=useQuery({
        queryKey:['reviews'],
        queryFn:()=>fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
    })
    return (
        <div className='my-20'>
        <h1 className='text-2xl underline underline-offset-8 py-8 pl-2 font-bold'>Look What Our Customers Says About Us -</h1>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {
        !isLoading?reviews.map(review=><SwiperSlide><ReviewsCard key={review._id} review={review}></ReviewsCard></SwiperSlide>):<Loader></Loader>
    }
      </Swiper>
        </div>
    );
};

export default Reviews;


