import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from './slider.module.css';
import blackCard from '../../../img/black-card.svg'
import whiteCard from '../../../img/white-card.png'
import sliderSecond from '../../../img/slider-2.png'
import sliderThird from '../../../img/slider-3.png'


const Slider = () => {
    return (
        
        
        <div className={classes["slider-container"]} >
        <Carousel autoPlay>
            <div className={classes["slider-main"]}>
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
                    <img src={whiteCard} alt="white card" className={classes["slider-card__white"]}  width="289px"/>
                </div>

            </div>
            <div className={classes["slider-second"]}>
                
                <div className={classes["second-content"]}>
                <img src={sliderSecond} alt="backgraund img"   className={classes["second-content__img"]} />
                    <div className={classes["container"]}>
                        <h2 className={classes["second-content__header"]}>
                                Лига Банк
                        </h2>
                        <p className={classes["second-content__text"]}>
                            Ваша уверенность в завтрашнем дне
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes["slider-third"]}>
                <div className={classes["third-content"]}>
                    <img src={sliderThird} alt="backgraund img"  className={classes["third-content__img"]} />
                    <div className={classes["container"]}>
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
                </div>
            </div>
            </Carousel>
        </div>
    
        
    
    );
  };
  
  export default Slider;