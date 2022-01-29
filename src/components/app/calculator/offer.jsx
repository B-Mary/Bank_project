import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import ApplicationCredit from './application'

const Offer = ({creditCost, creditType, setcreditType}) =>{
    return(
<>
        <div className={classes["propose"]}>
                <h3 className={classes["propose__header"]}>Наше предложение</h3>
                <div className={classes["wrap-propose"]}>
                </div>
                <a href="#!" className={classes["propose__button"]} >Оформить заявку</a>
        </div>

<>
<ApplicationCredit /></>
 </>
    )
}

export default Offer;