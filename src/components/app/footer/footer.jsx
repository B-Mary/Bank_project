import React from 'react';
import classes from './footer.module.css'
import LogoFooter from './logoFooter.jsx'
import FooterMenu from './footerMenu.jsx'
import CallUs from './footerCall'
import Social from './footerSocial'


const Footer = () => {
    return (

        <div className={classes["footer"]} id="footer">
            <div className={classes["wrapp-footer"]}>
            <LogoFooter />
            <FooterMenu />
            <CallUs />
            <Social />
            </div>
            
        </div>

    );
}

export default Footer