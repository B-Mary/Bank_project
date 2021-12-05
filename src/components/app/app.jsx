import React from 'react';
import Header from './header/header';
import classes from './app.module.css';
import Slider from './slider/slider';

const App = () => {
 
  
  return (
    <>
        <div >
         <Header />
        </div>
        <div className={classes["slider"]}>
         <Slider />
       </div>
    </>
  );
};

export default App;
