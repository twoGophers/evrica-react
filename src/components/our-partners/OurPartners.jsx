import React from 'react';
import './OurPartners.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../../assets/styleUi/swiper.css";

export default function OurPartners({ partners }) {
  return (
    <>
    <div className="parther container">
        <h3 className='title-block'>Наши партнеры</h3>
        <Swiper
            slidesPerView={4}
            spaceBetween={110}
            loop={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="swiper-partner"
        >
        {
            partners.map( item => (
               <SwiperSlide key={item.id}>
                    <div className="parther__image">
                        <img 
                            src={require(`../../assets/images/partner/${item.images}`)} 
                            alt={require(`../../assets/images/partner/${item.images}`)} 
                            srcSet={require(`../../assets/images/partner/${item.images}`)} 
                        />
                    </div>
                </SwiperSlide> 
            ))
        }
        <hr />
      </Swiper>
    </div> 
    <EmptyBlock height={100} />
    </>
  )
}
