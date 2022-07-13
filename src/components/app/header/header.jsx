import React, { useState } from 'react';
import classes from'./header.module.css'
import Logo from './logo';
import Navigation from './navigation';
import Account from './account';


const Header = () => {
  
  return (
    
        <div className={classes["header"]} id="head">
          <div className={classes["wrapper"]}>
            <div className={classes["header-wrapper"]}>
              <Logo />
              <Navigation />
              <Account />
            </div>
          </div>
        </div>
    
       
     
  );
};

export default Header;