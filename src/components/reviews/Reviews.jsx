import React from 'react';
import './Reviews.scss';

import EmptyBlock from '../ui/empty-block/EmptyBlock';
import Button from '../ui/button/Button';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styleUi/swiper.css";

//img
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';

export default function Reviews({ reviews }) {
    return (
        <>
            <EmptyBlock height={100} />
                <div className="reviews certificate container">
                    <div className="certificate__head">
                        <h3 className='title-block'>Отзывы</h3>
                        <div className="certificate__navigation">
                            <button className="reviews__custom-next button-navigation">
                                <img src={arrowLeft} alt={arrowLeft} srcSet={arrowLeft} />
                            </button>
                            <button className="reviews__custom-prev button-navigation">
                                <img src={arrowRight} alt={arrowRight} srcSet={arrowRight} />
                            </button>
                        </div>
                    </div>
                    <Swiper 
                        slidesPerView={2}
                        spaceBetween={30}
                        modules={[Navigation]}
                        loop={true}
                        navigation={{
                            nextEl: ".reviews__custom-next",
                            prevEl: ".reviews__custom-prev"
                        }}
                        className="swiper-reviews"
                        >
                        { reviews.map( item => (
                            <SwiperSlide key={item.id}>
                                <div className="reviews__block">
                                    <div className="reviews__content">
                                        <div className="reviews__user">
                                            <p>{item.user}</p>
                                        </div>
                                        <div className="reviews__firm">
                                            <p>{item.firm}</p>
                                        </div>
                                        <div className="reviews__text">
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                    <a href={item.url}>подробнее</a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <a className='reviews__all-rewiews' href="/">
                        <Button text={'Читать все отзывы'} />
                    </a>
                </div>
            <EmptyBlock height={80} />
        </>
    )
}
