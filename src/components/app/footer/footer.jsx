import React from 'react';
import classes from './footer.module.css'
import LogoFooter from './logoFooter.jsx'
import FooterMenu from './footerMenu.jsx'



const Footer = () => {
    return (
        <div className={classes["footer"]}>
            <LogoFooter />
            <FooterMenu />
            
        </div>

    );
}

export default Footer