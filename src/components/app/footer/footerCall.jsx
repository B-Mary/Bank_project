import React from 'react';
import classes from './footerCall.module.css'
import phone from '../../../img/phone.svg'
import local from '../../../img/local.svg'

const CallUs =() =>{
    return(
        <div className={classes["call-container"]}>
            <div className={classes["call-mobile"]}>
                <a className={classes["call-link"]}>
                    <img src={phone} alt="phone icon" className={classes["call-link__phone"]} />
                    <p className={classes["call-link__number"]}>*0904</p>
                </a>
                <p className={classes["call-mobile__text"]}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </div>
            <div className={classes["call-local"]}>
                <a className={classes["call-link"]}>
                    <img src={local} alt="local icon"  className={classes["call-link__local"]}/>
                    <p className={classes["call-link__number"]}>8 800 111 22 33</p>
                </a>
                <p className={classes["call-local__text"]}> Бесплатный для всех городов России</p>
            </div>

        </div>
    )
}

export default  CallUs