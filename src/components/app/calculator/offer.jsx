import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'


const Offer = ({creditData, creditCost, setApplication}) =>{

        // ПРОЦЕНТНАЯ СТАВКА 
        const [interestRate, setInterestRate] = useState(creditData.interestRateInit);
//         function handleInitialFeeChange() {
//                 initialFeeValue < 300000 ? setInterestRate(props.content.interestRateInit) : setInterestRate(props.content.interestRateMin);
//                 setInitialFeeValue(+inputInitialFee.current.value)
            
// }

        function onClick(){       
                setApplication(true)
        }
    return(

        <div className={classes["offer"]}>
                <h3 className={classes["offer__header"]}>Наше предложение</h3>
                <div className={classes["wrap-offer"]}>
                        <div className={classes["offer-left"]}>
                                <p className={classes["offer-left__amount"]}> {creditCost} рублей</p>
                                <p className={classes["offer-left__subtitle"]}>{creditData.ammountName}</p>
                                <p className={classes["offer-left__amount"]}>{(creditCost / 5)} рублей</p>
                                <p className={classes["offer-left__subtitle"]}>Ежемесячный платеж</p>
                        </div>
                        <div className={classes["offer-right"]}>
                                <p className={classes["offer-right__amount"]}> {creditData.interestRate} %</p>
                                <p className={classes["offer-right__subtitle"]}>Процентная ставка</p>
                                <p className={classes["offer-right__amount"]}>{(creditCost / 40)} рублей</p>
                                <p className={classes["offer-right__subtitle"]}>Необходимый доход</p>
                        </div>
                </div>
                <a href="#!" className={classes["offer__button"]}  onClick={onClick}>Оформить заявку</a>
        </div>




    )
}

export default Offer;