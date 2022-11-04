import React, { useRef } from 'react';
import './Certificate.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styleUi/swiper.css";

//img
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';

export default function Certificate({certificat}) {
  return (
    <>
        <EmptyBlock height={100} />
        <div className="certificate container">
            <div className="certificate__head">
                <h3 className='title-block'>Сертификаты качества топлива</h3>
                <div className="certificate__navigation">
                    <button className="certificate__custom-next button-navigation">
                        <img src={arrowLeft} alt={arrowLeft} srcSet={arrowLeft} />
                    </button>
                    <button className="certificate__custom-prev button-navigation">
                        <img src={arrowRight} alt={arrowRight} srcSet={arrowRight} />
                    </button>
                </div>
            </div>
            <Swiper 
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]}
                loop={true}
                navigation={{
                    nextEl: ".certificate__custom-next",
                    prevEl: ".certificate__custom-prev"
                }}
                >
                { certificat.map( item => (
                    <SwiperSlide key={item.id}>
                        <div className="certificate__image">
                            <img 
                                src={require(`../../assets/images/certificate/${item.images}`)} 
                                alt={require(`../../assets/images/certificate/${item.images}`)} 
                                srcSet={require(`../../assets/images/certificate/${item.images}`)} 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <EmptyBlock height={100} />
    </>
  )
}
