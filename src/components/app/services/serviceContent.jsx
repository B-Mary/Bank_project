import React from 'react';
import classes from'./services.module.css'
import pig from './piggybank.png'
import dep from './depos.svg'
import cred from './credcards.svg'
import secur from './security.svg'
import online from './online.svg'
import check from './check.svg'
import car from './car.png'
import lock from './lock.png'
import phone from './phone.png'

const ServicesContent =({data})=>{
    return(
    <div className={classes["content-block"]}>
       { data === "cred" ? (
            <div className={classes["credits"]} >
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
            </div>)
         : null}
            
            {data === "dep" ? (
            <div className={classes["deposit"]} >
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
            </div>)
            : null }
            {data === "secur" ? (
            <div className={classes["security"]} >
                <h3 className={classes["security__header"]}>
                    Лига Страхование — застрахуем все что захотите
                </h3>
                <ul className={classes["list-list"]}>
                    <li className={classes["item"]}>
                        <img src={check} alt="check" className={classes["item__img"]} />
                        <p className={classes["item__text"]}>Автомобильное страхование</p>
                    </li>
                    <li className={classes["item"]}> 
                        <img src={check} alt="check" className={classes["item__img"]}/>
                        <p className={classes["item__text"]}>Страхование жизни и здоровья</p>
                    </li>
                    <li className={classes["item"]}>
                        <img src={check} alt="check" className={classes["item__img"]}/>
                        <p className={classes["item__text"]}>Страхование недвижимости</p>
                    </li>
                </ul> 
                <a href="#" className={classes["button-more"]}>
                    Узнать подробнее
                </a>
                <img src={lock} alt="img lock" className={classes["security__img"]} />
            </div>)
            : null}
            {data === "onl" ? (
            <div className={classes["online"]} >
                <h3 className={classes["online__header"]}>
                Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
                </h3>
                <ul className={classes["list-list"]}>
                    <li className={classes["item"]}>
                        <img src={check} alt="check" className={classes["item__img"]} />
                        <p className={classes["online__text-one"]}>Мобильный банк,
    который всегда под рукой</p>
                    </li>
                    <li className={classes["item"]}> 
                        <img src={check} alt="check" className={classes["item__img"]}/>
                        <p className={classes["online__text-two"]}>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</p>
                    </li>
                </ul> 
                <a href="#" className={classes["button-more"]}>
                    Узнать подробнее
                </a>
                <img src={phone} alt="img phone" className={classes["online__img"]} />
            </div>)
            : null}
       
        
        
           
    </div>

    );
}

export default ServicesContent;