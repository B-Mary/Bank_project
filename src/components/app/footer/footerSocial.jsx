import React from 'react';
import classes from './footerSocial.module.css'
import faceboock from '../../../img/facebook.svg'
import insta from '../../../img/insta.svg'
import twitter from '../../../img/twitter.svg'
import youtube from '../../../img/youtube.svg'

const Social = () =>{
    return (
        <div className={classes["social"]}>
            <ul className={classes["social-list"]}>
                <li className={classes["social-list__item"]}>
                    <a href="#" className={classes["social-list__item-link"]}>
                        <img src={faceboock} alt="icon facebook"  />
                    </a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a href="#" className={classes["social-list__item-link"]}>
                        <img src={insta} alt="icon insta"  />
                    </a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a href="#" className={classes["social-list__item-link"]}>
                        <img src={twitter} alt="icon twitter" />
                    </a>
                </li>
                <li className={classes["social-list__item"]}>
                    <a href="#" className={classes["social-list__item-link"]}>
                        <img src={youtube} alt="icon youtube"  />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Social;