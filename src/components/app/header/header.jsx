import React, { useState } from 'react';
import classes from'./header.module.css'
import Logo from './logo';
import Navigation from './navigation';
import Account from './account';


const Header = () => {
  
  return (
    <div>
      <div classNam={classes["wrapper-header"]}>
        <div className={classes["header"]}>
          <div className={classes["header-logo"]}>
            <Logo />
            <Navigation />
          </div>
          <Account />
        </div>
      </div>
      
    </div>
  );
};

export default Header;