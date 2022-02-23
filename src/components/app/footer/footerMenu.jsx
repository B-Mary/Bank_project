import React from 'react';
import classes from './footerMenu.module.css'

const FooterMenu = ()=> {
    return (
        <div  className={classes["menu-container"]}>
            <ul className={classes["footer-nav"]}>
                <li className={classes["footer-nav__item"]}>
                    <a href="#services" className={classes["footer-nav__item-link"]}> Услуги</a>
                </li>
                <li className={classes["footer-nav__item"]}>
                   <a href="#calculator" className={classes["footer-nav__item-link"]}>Рассчитать кредит</a> 
                </li>
                <li className={classes["footer-nav__item"]}>
                  <a href="#footer" className={classes["footer-nav__item-link"]}> Контакты</a> 
                </li>
                <li className={classes["footer-nav__item"]}>
                  <a href="#" className={classes["footer-nav__item-link"]}>Задать вопрос</a>  
                </li>
            </ul>
        </div>
    )
}

export default FooterMenu;