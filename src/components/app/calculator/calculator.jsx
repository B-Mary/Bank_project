import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'
import down from './arrow-down.svg'
import upp from './arrow-upp.svg'
import plus from './plus.svg'
import minus from './minus.svg'


const Calculator = () => {
    const inputRef = useRef();

    const mortCredit  = "Ипотечное кредитование";
    const avtoCredit = "Автомобильное кредитование";
    const none = "Выберите цель кредита";
    const min = 2000000;
    // useEffect(()=>{
    //     debugger
    //     inputRef.current.value = min
    // },[])
    
//    Шаг 1 цель кредита 

    const [creditType, setcreditType] = useState("Выберите цель кредита")
    const cnahgeCredit = (value) =>{
        setcreditType(value )
    }
    const options =   [      
        {label : 'Ипотечное кредитование', value : mortCredit },
        { label: 'Автомобильное кредитование', value : avtoCredit}
    ]

// появление второй формы
    const [showForm, setFormStatus] = useState(false)
    const viewData = () => {
        setFormStatus(true);
    }    
    
    // Стоимость кредитования в шаге 2, первый инпут
    const [creditCost, setCreditCost] = useState(min);

    function decrease(){

        if ((creditCost - 100000)< 1200000){
            setCreditCost(1200000)
        } else {
            inputRef.current.value =  creditCost - 100000
             setCreditCost(creditCost - 100000)
        }    
    }
    function increase (){
        if((creditCost + 100000) > 25000000){
            setCreditCost(25000000)
        } else{
            setCreditCost(creditCost + 100000)
        }
    }

   function changeValueProperty(evt){
       inputRef.current.value = evt.target.value
        setCreditCost(evt.target.value)
   }


//    Шаг 2 , первоначальный взнос

   const [initialPaymentValue, setInitialPaymentValue] = useState(creditCost / 10)
   const changeValuePayment = (value)=>{
        setInitialPaymentValue(value )
   }

//    Стилизация select
    useEffect(()=>{
        document.addEventListener("click", function (evt) {
            debugger
            if( evt.targer.className === 'css-1s2u09g-control'){
                debugger
                this.style.borderColor = "transparent" 
            }
        })
        
        const selectWrapp = document.querySelector('.css-1s2u09g-control') 
        selectWrapp.style.borderStyle = "none";
        selectWrapp.style.display = "block";
        selectWrapp.style.width = "589px"
        selectWrapp.style.height = "55px"

        // const selectFocus = document.querySelector('.css-1pahdxg-control')
        // debugger
    
        //     debugger
        //     this.style.borderColor = "transparent"  
        // });

        const selectValue = document.querySelector('.css-319lph-ValueContainer')
        selectValue.style.width = "600px"
        selectValue.style.display = "block";
        selectValue.style.placeholder = "0"

        const selectPlaceholder = document.querySelector('.css-14el2xx-placeholder')
        selectPlaceholder.style.color = "#1F1E25"
        selectPlaceholder.style.paddingTop = "15px"
        selectPlaceholder.style.paddingLeft = "15px"


        const selectSingleValue = selectValue.querySelector('div')
         selectSingleValue.style.height = "55px"
        // selectSingleValue.style.color = "#1F1E25"
         selectSingleValue.style.paddingTop = "15px" 
        // selectSingleValue.style.paddingLeft = "15px"

       const arrowSelect = document.querySelector(".css-1hb7zxy-IndicatorsContainer")
       arrowSelect.style.display = "none"
      }, [])

      
 
    
    return (
        <div className={classes["calc-wrap"]}>
            <h2 className={classes["calc-wrap__header"]}>
                Кредитный калькулятор
            </h2>
            <p className={classes["calc-wrap__step1"]}> Шаг 1. Цель кредита</p>
            <div className={classes["select"]}>
                <Select options={options} onChange={cnahgeCredit}  placeholder="Выберите цель кредита" className={classes["selects"]}/>
                <img src={down} alt="arrow-down"  className={classes["select-one__img"]} />  
            </div>
            {creditType === none ? null :
            <>
                <div className={classes["container-form"]}>
                    <div className={classes["form"]}>
                        <div>
                            <p className={classes["step-two"]}>Шаг 2. Введите параметры кредита</p>
                            <p className={classes["count-property"]}>Стоимость недвижимости</p>
                            <div className={classes["container-property"]}>
                                <img src={minus} alt="minus img"  onClick={decrease} className={classes["container-property__minus"]}/>
                                <input type="number" id='countProperty' onChange={changeValueProperty} value={creditCost} 
                                className={classes["container-property__input"]}/>
                                <p className={classes["container-property__rubl"]}>рублей</p>
                                <img src={plus} alt="plus img" onClick={increase} className={classes["container-property__plus"]} />
                            </div>
                            <p className={classes["property-min-max"]}>От 1 200 000  до 25 000 000 рублей</p>
                        </div>
                        <div className={classes["container-payment"]}>
                            <p className={classes["container-payment__header"]}>Первоначальный взнос</p>
                            <div className={classes["payment-wrap"]}>
                                <input type="number" ref={inputRef} defaultValue={56}  className={classes["payment-wrap__input"]}/>
                                <p className={classes["payment-wrap__rubl"]}>рублей</p>
                            </div>
                            <input type="range" name="range" id="paymentRange" className={classes["container-payment__range"]} step={creditCost / 20}  max={creditCost}/>
                            <label htmlFor="paymentRange" className={classes["container-payment__rangeLabel"]}>10%</label>
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
                        <a href="#!" className={classes["propose__button"]} onClick={viewData}>Оформить заявку</a>
                    </div>
                </div>
                
                
             </>
            }
            
            { showForm ?
                <div className={classes["application"]} >
                    <h3 className={classes["application__header"]}>Шаг 3. Оформление заявки</h3>
                </div> : null

            }
           
        </div>
    );
}

export default Calculator;


