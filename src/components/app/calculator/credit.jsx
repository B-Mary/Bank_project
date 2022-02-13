import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import plus from './plus.svg'
import minus from './minus.svg'
import Offer from './offer'

const Credit = ({creditType, setcreditType}) => {
    debugger
    const inputRef = useRef();

    const mortCredit  = "Ипотечное кредитование";
    const avtoCredit = "Автомобильное кредитование";
    const chooseCredit = "Выберите цель кредита";
  
    
    const creditData = {
        title: creditType === mortCredit ? "Ипотечное кредитование" : "Автомобильное кредитование",
        priceTitle: creditType === mortCredit ? "недвижимости" : "автомобиля",
        minPriceValue: creditType === mortCredit ? 2000000 : 500000, 
        priceValueStep: creditType === mortCredit ? 100000 : 50000,
        minPriceText:  creditType === mortCredit ? 1200000 : 50000,
        maxPriceText:  creditType === mortCredit ? 25000000 : 5000000,
        initialRangeStart: creditType === mortCredit ? 10 : 20,
        initialRangeEnd: 100,
        initialStepRange: creditType === mortCredit ? 10 : 5,
        
    }
   

    const [creditCost, setCreditCost] = useState( creditData.minPriceValue);
// Стоимость недвижимости
    function decrease(){
        if ((creditCost - `${creditData.priceValueStep}`)< `${creditData.minPriceText}`){
            setCreditCost(`${creditData.minPriceText}`)
        } else {
             inputRef.current.value =  creditCost - `${creditData.priceValueStep}`
             setCreditCost(creditCost - `${creditData.priceValueStep}`)
        }    
    }

    function increase (){
        
        if((creditCost + creditData.priceValueStep) > creditData.maxPriceText){
            
            setCreditCost(creditData.maxPriceText)
        } else{
            setCreditCost(creditCost + creditData.priceValueStep)
        }
    }

   function changeValueProperty(evt){
       inputRef.current.value = evt.target.value
        setCreditCost(evt.target.value)
   }
// Первоначальный взнос
const [initialPaymentValue, setInitialPaymentValue] = useState(creditCost/10)

const changeValuePayment = (evt)=>{
    setInitialRangeValue(evt.target.value)
    const costPayment = (evt.target.value * creditData.minPriceValue) / 1000
    setInitialPaymentValue (costPayment + (creditData.minPriceValue / 10))  
}
const [initialRangeValue, setInitialRangeValue] = useState(creditData.initialRangeStart)

    return (
    <>{creditType === undefined ? null :
         <div className={classes["container-form"]}>
            <div className={classes["form"]}>
                <div>
                    <p className={classes["step-two"]}>Шаг 2. Введите параметры кредита</p>
                    <p className={classes["count-property"]}>Стоимость {creditData.priceTitle}</p>
                    <div className={classes["container-property"]}>
                        <img src={minus} alt="minus img"  onClick={decrease} className={classes["container-property__minus"]}/>
                        <input type="number" id='countProperty' onChange={changeValueProperty} value={creditCost} 
                            className={classes["container-property__input"]}/>
                        <p className={classes["container-property__rubl"]}>рублей</p>
                        <img src={plus} alt="plus img" onClick={increase} className={classes["container-property__plus"]} />
                    </div>
                    <p className={classes["property-min-max"]}>От {creditData.minPriceText}  до {creditData.maxPriceText}</p>
                </div>
                <div className={classes["container-payment"]}>
                    <p className={classes["container-payment__header"]}>Первоначальный взнос</p>
                    <div className={classes["payment-wrap"]}>
                        <input type="number"    value={initialPaymentValue}   className={classes["payment-wrap__input"]}/>
                        <p className={classes["payment-wrap__rubl"]}>рублей</p>
                    </div>
                    <div className={classes["container-range"]}>
                        <input type="range" name="range" id="paymentRange" value={initialRangeValue}  onChange={changeValuePayment} className={classes["slider"]} step={10}  min={10} />
                        <label htmlFor="paymentRange" className={classes["container-payment__rangeLabel"]}>{initialRangeValue}%</label>
                    </div>                  
                </div>
                <div className={classes["term-wrap"]}>
                    <p className={classes["term-wrap__header"]}>Срок кредитования</p>
                    <div className={classes["term-container"]}>
                        <input type="number" name="" id="term" className={classes["term-container__input"]} />
                        <p className={classes["term-container__years"]}>лет</p>
                        <div className={classes["container-range-years"]}>
                            <input type="range" name="range" id="paymentRange"   className={classes["slider"]} step={1}  min={10} /> 
                            <div className={classes["time-container"]}>
                                <p className={classes["time-container__min"]}> лет</p>
                                <p className={classes["time-container__max"]}> лет</p>
                            </div>  
                        </div>
                        
                    </div>               
                </div>
            </div>
            <Offer creditCost={creditCost} creditType={creditType} setcreditType={setcreditType}/>
            
        </div>
    }

    </>

    );

}

export default Credit;