import React, { useState } from 'react';
import classes from './calculator.module.css'
import down from './arrow-down.svg'
import upp from './arrow-upp.svg'
import plus from './plus.svg'
import minus from './minus.svg'


const Calculator = () => {
    const mortCredit  = "Ипотечное кредитование"
    const avtoCredit = "Автомобильное кредитование"
    const none = "Выберите цель кредита"
   

    const [creditType, setcreditType] = useState("none")
    const cnahgeCredit = (event) =>{
        setcreditType(event.target.value )
    }
    
    return (
        <div className={classes["calc-wrap"]}>
            <h2 className={classes["calc-wrap__header"]}>
                Кредитный калькулятор
            </h2>
            <p className={classes["calc-wrap__step1"]}> Шаг 1. Цель кредита</p>
            <div className={classes["select"]}>
                <select className={classes["calc-wrap__select"]} name = "Выберите цель кредита"  onChange={cnahgeCredit}>
                    <option id='choose' value={none} disabled selected hidden>Выберите цель кредита</option>
                    <option id='mort'  value={mortCredit}>Ипотечное кредитование </option>
                    <option id='avto'  value={avtoCredit}>Автомобильное кредитование</option>
                </select>
                <img src={down} alt="arrow-down"  className={autoBlur={true} ? `${classes["select-one__img"]}` : `${classes["select-one__img"]} ${classes["rotate-arrow"]}`} onChange={cnahgeCredit}/>  
            </div>
            {creditType === "none" ? null :
                <div className={classes["form"]}>
                    <div>
                        <img src={minus} alt="minus img" />
                        <p className={classes["step-two"]}>Шаг 2. Введите параметры кредита</p>
                        <label htmlFor="count">Стоимость недвижимости</label><br/>
                        <input type="number" id='countProperty' />
                        <img src={plus} alt="plus img" />
                        <p> От 1 200 000  до 25 000 000 рублей</p>
                    </div>
                    <div>
                        <p>Первоначальный взнос</p>
                        <input type="number" name="" id="countPayment" />
                        <input type="range" name="" id="paymentRange" />
                    </div>
                    <div>
                        <p>Срок кредитования</p>
                        <input type="number" name="" id="term" />
                        <input type="range" name="" id="termRange" />
                    </div>
                </div>
            
            }
    
            <div className={classes["offer"]}>

            </div>
            <div className={classes["application"]}>

            </div>
        </div>
    );
}

export default Calculator;


