import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
// // import "swiper/components/navigation/navigation.scss"

import classes from './slider.module.css';
import blackCard from './black-card.svg'
import whiteCard from './white-card.png'
import sliderSecond from './slider-2.png'
import sliderThird from './slider-3.png'

import SwiperCore, {
    Navigation, Pagination
  } from 'swiper';
  SwiperCore.use([Navigation, Pagination]);



const Slider = () => {
 
  
    return (
        <>
        <Swiper navigation={true} spaceBetween={30} centeredSlides={true}  pagination={{
                "clickable": true
          }} navigation={true} className="mySwiper">
    <div className={classes["slider-wrapp"]}>
        <div className={classes["slider-container"]} >
            <SwiperSlide className={classes["slider-main"]}>
                <div className={classes["slider-content"]}>
                    <h1 className={classes["slider-content__header"]}>
                        Лига Банк
                    </h1>
                    <p className={classes["slider-content__text"]}>
                         Кредиты на любой случай
                    </p>
                    <a href="#" className={classes["slider-content__button"]}>
                        Рассчитать кредит
                    </a> 
                </div>
                <div className={classes["slider-card"]}>
                    <img src={blackCard} alt="black card" className={classes["slider-card__black"]} />
                    <img src={whiteCard} alt="white card" className={classes["slider-card__white"]} />
                </div>

            </SwiperSlide>
            <SwiperSlide className={classes["slider-second"]}>
                <div className={classes["second-content"]}>
                    <img src={sliderSecond} alt="backgraund img"  className={classes["second-content__img"]} />
                    <h2 className={classes["second-content__header"]}>
                        Лига Банк
                    </h2>
                    <p className={classes["second-content__text"]}>
                    Ваша уверенность в завтрашнем дне
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={classes["slider-third"]}>
                <div className={classes["third-content"]}>
                    <img src={sliderThird} alt="backgraund img"  className={classes["third-content__img"]} />
                    <h2 className={classes["third-content__header"]}>
                        Лига Банк
                    </h2>
                    <p className={classes["third-content__text"]}>
                        Всегда рядом
                    </p>
                    <a href="#" className={classes["third-content__button"]}>
                        Найти отделение
                    </a>
                </div>
            </SwiperSlide>
        </div>
    </div>
     </Swiper> 
    </>
    );
  };
  
  export default Slider;