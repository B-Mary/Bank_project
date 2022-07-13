 import React from 'react';
 import classes from'./logo.module.css'
 import logo from '../../../img/logo.svg'

const Logo = () => {
    return (
      <div className={classes["container-logo"]}>
         <img src={logo} alt="Logo bank"  className={classes["container-logo__img"]}/>
         <h3 className={classes["container-logo__text"]}>ЛИГА Банк</h3>
      </div>
    );
  };
  
  export default Logo;