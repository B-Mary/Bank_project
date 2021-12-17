import React, {  useEffect, createRef  } from 'react';
import classes from'./login.module.css'
import logo from './logo.svg'
import closed from './closed.svg'
import pass from './pass.svg'


const Login = ({showModal, setShowModal}) => {
  
  return (
    <>{ showModal ? 
    <div  className={classes["login-wrapp"]}>
        <div className={classes["login-logo"]}>
            <img src={logo} alt="logo"  className={classes["login-logo__img"]} />
            <div className={classes["login-text"]}>
                <h3 className={classes["login-text__header"]}>ЛИГА Банк</h3>
                <p className={classes["login-text__text"]}>интернет-банк</p>
            </div>
            <img src={closed} alt="closed img" className={classes["login-logo__closed"]} onClick={() => setShowModal(prev => !prev)}/>
        </div>
        <div className={classes["login-form"]}>
            <div className={classes["container-login"]}>
              <label for="uname" className={classes["container-login__text"]}>Логин </label>
              <input type="text"  name="uname" required  className={classes["container-login__input"]} autoFocus={true} />
            </div>
            <div className={classes["container-password"]}>
              <label for="pass" className={classes["container-password__text"]}>Пароль </label>
              <input type="password"  name="pass" required  className={classes["container-password__input"]}/>
              <img src={pass} alt="look password" className={classes["container-password__eye"]}/>
              <a href="#" className={classes["container-password__forgot"]} >
              Забыли пароль?
              </a>
            </div>
            <button className={classes["login-form__submit"]}> Войти</button>
        </div>
    </div> : null}</>
  );

};

export default Login;