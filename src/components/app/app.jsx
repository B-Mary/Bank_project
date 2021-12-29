import React from 'react';
import Header from './header/header';
import classes from './app.module.css';
import Slider from './slider/slider';
import Services from './services/services'
import Calculator from './calculator/calculator'

const App = () => {
 
  
  return (
    <>
        {/* <div > */}
         <Header />
        {/* </div> */}
        <div className={classes["slider"]}>
         <Slider />
       </div>
       <Services />
       <Calculator />
    </>
  );
};

export default App;
