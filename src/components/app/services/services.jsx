import React, { useState } from 'react';
import classes from'./services.module.css'
import pig from './piggybank.png'


const Services = () => {
    return (
        <div className={classes["wrapp"]} >
                <ul className={classes["list"]}>
                    <li className={classes["list__item"]}>
                        Вклады
                    </li>
                    <li className={classes["list__item"]}>
                       Кредиты 
                    </li>
                    <li className={classes["list__item"]}>
                        Страхование
                    </li>
                    <li className={classes["list__item"]}>
                        Онлайн-сервисы
                    </li>
                </ul>
            <div className={classes["content-block"]}>
                <div className={classes["deposit"]}>
                    <h3>
                    Вклады Лига Банка – это выгодная инвестиция в свое будущее
                    </h3>
                    <ul>
                        <li>Проценты по вкладам до 7%</li>
                        <li>Разнообразные условия</li>
                        <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
                    </ul> 
                    <a href="#">
                        Узнать подробнее
                    </a>
                    <img src={pig} alt="img pig deposit" />   
                </div>
            </div>
        </div>
    );

}

export default Services;