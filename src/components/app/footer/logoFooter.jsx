import React from 'react';
import classes from './footer.module.css'
import logo from '../../../img/logo.svg'

const LogoFooter = () => {
    return (
        <div className={classes["footer-logo"]}>
            <div className={classes["container-logo"]}>
                <img src={logo} alt="Logo bank"  className={classes["container-logo__img"]}/>
                <h3 className={classes["container-logo__text"]}>ЛИГА Банк</h3>
            </div>
            <p className={classes["footer-logo__adress"]}>
            150015, г. Москва, ул. Московская, д. 32
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
            </p>
        </div>
    )
}

export default LogoFooter;