import React, { useState } from 'react';
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
import ServicesContent from './serviceContent'


const Services = () => {
    const [showServices, setShowServices] = useState("dep")
  const changeServices = (evt) =>{
      
    setShowServices(evt.currentTarget.id)
    
    
  }
    return (
        <div className={classes["wrapp"]} >
                <ul className={classes["list"]} >
                    
                    <li className={showServices === 'dep' ? `${classes["list-item"]} ${classes["active"]}` : `${classes["list-item"]}`} id='dep' onClick={changeServices}>
                        <img src={dep} alt="deposit logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Вклады</p>
                    </li>
                    <li className={showServices === 'cred' ? `${classes["list-item"]} ${classes["active"]} `: `${classes["list-item"]}`} id='cred' onClick={changeServices}>
                        <img src={cred} alt="credit card logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Кредиты </p>
                    </li>
                    <li className={showServices === 'secur' ? `${classes["list-item"]} ${classes["active"]} `: `${classes["list-item"]}`} id='secur' onClick={changeServices}>
                        <img src={secur} alt="security logo" className={classes["list-item__img"]}/>
                        <p className={classes["list-item__text"]}>Страхование</p>
                    </li>
                    <li className={showServices === 'onl' ? `${classes["list-item"]} ${classes["active"]} `: `${classes["list-item"]}`} id='onl' onClick={changeServices}>
                        <img src={online} alt="online services logo"className={classes["list-item__img-services"]} />
                        <p className={classes["list-item__text-services"]}>Онлайн-сервис</p>
                    </li>
                </ul>
                <ServicesContent  data={showServices} />
        </div>
    );

}

export default Services;