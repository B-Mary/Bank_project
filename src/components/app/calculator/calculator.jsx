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
    const cnahgeCredit = (value) =>{
        setcreditType(value )
    }

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
    <Credit  creditType={creditType} setcreditType={setcreditType}/>
</div>
    );
}

export default Calculator;