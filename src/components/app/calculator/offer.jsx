import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import ApplicationCredit from './application'

const Offer = () =>{
    return(
<>
        <div className={classes["offer"]}>
                <h3 className={classes["offer__header"]}>Наше предложение</h3>
                <div className={classes["wrap-offer"]}>
                        <div className={classes["offer-left"]}>
                                <p className={classes["offer-left__amount"]}> рублей</p>
                                <p className={classes["offer-left__subtitle"]}>Сумма кредита</p>
                                <p className={classes["offer-left__amount"]}> рублей</p>
                                <p className={classes["offer-left__subtitle"]}>Ежемесячный платеж</p>
                        </div>
                        <div className={classes["offer-right"]}>
                                <p className={classes["offer-right__amount"]}> %</p>
                                <p className={classes["offer-right__subtitle"]}>Процентная ставка</p>
                                <p className={classes["offer-right__amount"]}> рублей</p>
                                <p className={classes["offer-right__subtitle"]}>Необходимый доход</p>
                        </div>
                </div>
                <a href="#!" className={classes["offer__button"]} >Оформить заявку</a>
        </div>

<>
<ApplicationCredit /></>
 </>
    )
}

export default Offer;