import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import plus from './plus.svg'
import minus from './minus.svg'
import Offer from './offer'
import ApplicationCredit from './application'

const Credit = ({creditData}) => {
    const inputRef = useRef();
    const maternal_capital = 470000;

    const [creditCost, setCreditCost] = useState(creditData.minPriceValue);
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
    setInitialPaymentValue (costPayment + (creditData.minPriceValue / creditData.initialRangeStart))
}
const [initialRangeValue, setInitialRangeValue] = useState(creditData.initialRangeStart)

// Срок кредитования 
const [creditTermsValue, setCreditTermsValue] = useState(creditData.creditTermsValueRangeMin);
const changeCreditTerms = (evt) =>{
    setCreditTermsValue(evt.target.value)
}
 // процентная ставка в связке со сроком кредитования
//  const [interestRate, setInterestRate] = useState(creditData.interestRateInit);
//  function handleInitialFeeChange() {
//          initialFeeValue < 300000 ? setInterestRate(props.content.interestRateInit) : setInterestRate(props.content.interestRateMin);
//          setInitialFeeValue(+inputInitialFee.current.value)
     
// }

// Чекбокс материнский капитал
    function useMaternalCapital (evt){
        evt.target.checked ? setCreditCost(creditCost - maternal_capital) : setCreditCost(creditCost + maternal_capital)
    }

   
    
    // application
    const [application, setApplication] = useState(false)
    debugger
    return (
    <>{creditData === undefined ? null :
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
                        <input type="range" name="range" id="paymentRange" value={initialRangeValue}  onChange={changeValuePayment} className={classes["slider"]} step={creditData.initialStepRange}  min={creditData.initialRangeStart} />
                        <label htmlFor="paymentRange" className={classes["container-payment__rangeLabel"]}>{initialRangeValue}%</label>
                    </div>
                </div>
                <div className={classes["term-wrap"]}>
                    <p className={classes["term-wrap__header"]}>Срок кредитования</p>
                    <div className={classes["term-container"]}>
                        <input type="number" name="" id="term" value={creditTermsValue} className={classes["term-container__input"]}  />
                        <p className={classes["term-container__years"]}>лет</p>
                        <div className={classes["container-range-years"]}>
                            <input type="range" name="range" id="paymentRange" value={creditTermsValue}  className={classes["slider"]} step={1}  min={creditData.creditTermsValueRangeMin} onChange={changeCreditTerms}/>
                            <div className={classes["time-container"]}>
                                <p className={classes["time-container__min"]}>{creditTermsValue} лет</p>
                                <p className={classes["time-container__max"]}>{creditData.creditTermsValueRangeMax} лет</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes["maternal-wrap"]}>
                    <input type="checkbox" className={classes["maternal-wrap__chekbox"]} onChange={useMaternalCapital}/>
                    <p className={classes["maternal-wrap__text"]}>Использовать материнский капитал</p>
                </div>
            </div>
            <Offer creditData={creditData} creditCost={creditCost}  setApplication={setApplication}/>
        </div>
       
    }
   { application && <ApplicationCredit  creditData={creditData} creditCost={creditCost} initialPaymentValue={initialPaymentValue} creditTermsValue={creditTermsValue}/>}
    </>
    
    
    
    );

}

export default Credit;
