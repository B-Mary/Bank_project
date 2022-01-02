import React, { useState } from 'react';
import classes from './calculator.module.css'
import down from './arrow-down.svg'
import upp from './arrow-upp.svg'
import plus from './plus.svg'
import minus from './minus.svg'


const Calculator = () => {
    const mortCredit  = "Ипотечное кредитование";
    const avtoCredit = "Автомобильное кредитование";
    const none = "Выберите цель кредита";
    const min = 2000000;
   

    const [creditType, setcreditType] = useState("none")
    const cnahgeCredit = (event) =>{
        setcreditType(event.target.value )
    }

    const [showForm, setFormStatus] = useState(false)
    const viewData = () => {
        debugger
        setFormStatus(true);
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
                <img src={down} alt="arrow-down"  className={classes["select-one__img"]} onChange={cnahgeCredit}/>  
            </div>
            {creditType === "none" ? null :
            <>
                <div className={classes["container-form"]}>
                    <div className={classes["form"]}>
                        <div>
                            <p className={classes["step-two"]}>Шаг 2. Введите параметры кредита</p>
                            <p className={classes["count-property"]}>Стоимость недвижимости</p>
                            <div className={classes["container-property"]}>
                                <img src={minus} alt="minus img" className={classes["container-property__minus"]}/>
                                <input type="number" id='countProperty' value={min}  className={classes["container-property__input"]}/>
                                <p className={classes["container-property__rubl"]}>рублей</p>
                                <img src={plus} alt="plus img" className={classes["container-property__plus"]} />
                            </div>
                            <p className={classes["property-min-max"]}>От 1 200 000  до 25 000 000 рублей</p>
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
                    <div className={classes["propose"]}>
                        <h3 className={classes["propose__header"]}>Наше предложение</h3>
                        <div className={classes["wrap-propose"]}>

                        </div>
                        <a href="##" className={classes["propose__button"]} onClick={viewData}>Оформить заявку</a>
                    </div>
                </div>
                
                
             </>
            }
            
            { showForm ?
                <div className={classes["application"]} >

                </div> : null

            }
           
        </div>
    );
}

export default Calculator;


