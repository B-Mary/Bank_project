import React, {useState} from 'react';
import classes from './account.module.css'
import btn from './btn.svg'
import Login from './popup/login'

const Account = () => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () =>{
    setShowModal(prev => !prev)
  }
    return (
      <div>
        <div className={classes["container-button"]}>
          <img src={btn} alt="Account button" className={classes["container-button__img"]} />
          <button onClick={openModal} className={classes["container-button__button"]}>
            Войти в Интернет-банк
          </button>  
        </div>
        <div>
          <Login showModal={showModal} setShowModal = {setShowModal} />
        </div>
      </div>
    );
  };
  
  export default Account;