import React from 'react';
import Header from './header/header';
import classes from './app.module.css';
import Slider from './slider/slider';
import Services from './services/services'

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
    </>
  );
};

export default App;
