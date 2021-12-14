import React, { useState } from 'react';
import classes from'./services.module.css'
import pig from './piggybank.png'
import dep from './depos.svg'
import cred from './credcards.svg'
import secur from './security.svg'
import online from './online.svg'
import check from './check.svg'
import car from './car.png'

const Services = () => {
    return (
        <div className={classes["wrapp"]} >
                <ul className={classes["list"]}>
                    <li className={classes["list-item"]}>
                        <img src={dep} alt="deposit logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Вклады</p>
                    </li>
                    <li className={classes["list-item"]}>
                        <img src={cred} alt="credit card logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Кредиты </p>
                    </li>
                    <li className={classes["list-item"]}>
                        <img src={secur} alt="security logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Страхование</p>
                    </li>
                    <li className={classes["list-item"]}>
                        <img src={online} alt="online services logo"className={classes["list-item__img-services"]} />
                        <p className={classes["list-item__text-services"]}>Онлайн-сервис</p>
                    </li>
                </ul>
            <div className={classes["content-block"]}>
                <div className={classes["deposit"]}>
                    <h3 className={classes["deposit__header"]}>
                    Вклады Лига Банка – это выгодная инвестиция в свое будущее
                    </h3>
                    <ul className={classes["list-list"]}>
                        <li className={classes["item"]}>
                            <img src={check} alt="check" className={classes["item__img"]} />
                            <p className={classes["item__text"]}>Проценты по вкладам до 7%</p>
                        </li>
                        <li className={classes["item"]}> 
                            <img src={check} alt="check" className={classes["item__img"]}/>
                            <p className={classes["item__text"]}>Разнообразные условия</p>
                        </li>
                        <li className={classes["item"]}>
                            <img src={check} alt="check" className={classes["item__img"]}/>
                            <p className={classes["item__text"]}>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</p>
                        </li>
                    </ul> 
                    <a href="#" className={classes["button-more"]}>
                        Узнать подробнее
                    </a>
                    <img src={pig} alt="img pig deposit" className={classes["deposit__pig"]} />   
                </div>
                <div className={classes["credits"]}>
                    <h3 className={classes["credits__header"]}>
                        Лига Банк выдает кредиты под любые цели
                    </h3>
                    <ul className={classes["list-list"]}>
                        <li className={classes["item"]}>
                            <img src={check} alt="check" className={classes["item__img"]} />
                            <p className={classes["item__text"]}>Ипотечный кредит</p>
                        </li>
                        <li className={classes["item"]}>
                            <img src={check} alt="check" className={classes["item__img"]} />
                            <p className={classes["item__text"]}>Автокредит</p>
                        </li>
                        <li className={classes["item"]}>
                            <img src={check} alt="check" className={classes["item__img"]} />
                            <p className={classes["item__text"]}>Потребительский кредит</p>
                        </li>
                    </ul>
                    <p className={classes["credits-text"]}>Рассчитайте ежемесячный платеж
и ставку по кредиту воспользовавшись нашим <a href='#' className={classes["credits-text__link"]}>кредитным калькулятором</a></p>
                    <img src={car} alt="car img"  className={classes["credits__car"]}/>
                </div>
            </div>
        </div>
    );

}

export default Services;