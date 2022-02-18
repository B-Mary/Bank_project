import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import down from './arrow-down.svg'
import upp from './arrow-upp.svg'

import Credit from './credit'


const Calculator = () => {
    const mortCredit  = "Ипотечное кредитование";
    const avtoCredit = "Автомобильное кредитование";
    const chooseCredit = "Выберите цель кредита";


    const [creditType, setcreditType] = useState("Выберите цель кредита")
    const cnahgeCredit = async (value) =>{
       await setcreditType(value.value )
    }
function createCreditData (creditType){
  return ({
    title: creditType === mortCredit ? "Ипотечное кредитование" : "Автомобильное кредитование",
    priceTitle: creditType === mortCredit ? "недвижимости" : "автомобиля",
    minPriceValue: creditType === mortCredit ? 2000000 : 500000,
    priceValueStep: creditType === mortCredit ? 100000 : 50000,
    minPriceText:  creditType === mortCredit ? 1200000 : 50000,
    maxPriceText:  creditType === mortCredit ? 25000000 : 5000000,
    initialRangeStart: creditType === mortCredit ? 10 : 20,
    initialRangeEnd: 100,
    initialStepRange: creditType === mortCredit ? 10 : 5,
    creditTermsValueRangeMin: creditType === mortCredit ? 5 : 1,
    creditTermsValueRangeMax: creditType === mortCredit ? 30 : 5,
    inerestRateMin: creditType === mortCredit ? 8.5 : 15,
    interestRate: creditType === mortCredit ? 9.4 : 16,
    ammountName : creditType === mortCredit ? "Сумма ипотеки" : "Сумма автокредита",
    subtitleCredit : creditType === mortCredit ? "Ипотека" : "Автомобиль",
    })
}
const data = createCreditData(creditType)

  const options =   [
        {label : 'Ипотечное кредитование', value : mortCredit },
        { label: 'Автомобильное кредитование', value : avtoCredit}
    ]

    const style = {
        control: (base, state) => ({
          ...base,
          border: state.isFocused ? 1 : 1,
          // This line disable the blue border
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            border: state.isFocused ? 0 : 0
          }

        })
      };

    return (
<div className={classes["calc-wrap"]}>
    <h2 className={classes["calc-wrap__header"]}>
                Кредитный калькулятор
    </h2>
    <p className={classes["calc-wrap__step1"]}> Шаг 1. Цель кредита</p>
    <div className={classes["select"]}>
        <Select options={options} onChange={cnahgeCredit}  placeholder="Выберите цель кредита" className={classes["selects"]} styles={style}/>
        <img src={down} alt="arrow-down"  className={classes["select-one__img"]} />
    </div>
    {(creditType === avtoCredit || creditType ===  mortCredit)  ? <Credit  creditData={data} /> : null }

</div>
    );
}

export default Calculator;
