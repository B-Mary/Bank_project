import React from 'react';
import Header from './header/header';
import classes from './app.module.css';
import Slider from './slider/slider';
import Services from './services/services'
import Calculator from './calculator/calculator'
import MapRender from './map/map.jsx'
import Footer from './footer/footer.jsx'

const App = () => {
 
  
  return (
    <>
         <Header />
        <div className={classes["slider"]}>
         <Slider />
       </div>
       <Services />
       <Calculator />
       <MapRender />
       <Footer />
    </>
  );
};

export default App;
