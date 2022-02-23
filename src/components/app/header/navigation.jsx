import React from 'react';
import classes from './navigation.module.css'

const Navigation = () => {
    return (
      <div className={classes["div-nav"]}>
         <ul className={classes["nav-list"]}>
            <li >
                 <a href="#services" className={classes["nav-list__link"]}>
                 Услуги
                 </a>
            </li>
            <li >
                 <a href="#calculator" className={classes["nav-list__link"]}>
                 Рассчитать кредит
                 </a>
            </li>
             <li >
                 <a href="#" className={classes["nav-list__link"]}>
                 Конвертер валют
                 </a>
            </li>
            <li >
                 <a href="#footer" className={classes["nav-list__link"]}>
                 Контакты
                 </a>
            </li>
         </ul>
      </div>
    );
  };
  
  export default Navigation ;
