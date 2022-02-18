import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import classes from './calculator.module.css'

const ApplicationCredit = ({creditData, creditCost, initialPaymentValue, creditTermsValue}) => {
    const order_number = 10
    return(
        <div className={classes["apply-container"]}>
            <div className={classes["apply-wrapp"]}>
                <p className={classes["apply-wrapp__title"]}>Шаг 3. Оформление заявки</p>
            </div>
            <div className={classes["apply-form"]}>
            <div className={classes["apply-form__data"]}>
                <p  className={classes["apply-form__data-title"]}>Номер заявки</p>
                <label className={classes["apply-form__data-value"]}>{`№ 00${order_number}`}</label>
                <input type="hidden" name='order-number' value={order_number} />
            </div>
            <div className={classes["apply-form__data"]}>
                <p className={classes["apply-form__data-title"]}>Цель кредита</p>
                <label cclassName={classes["apply-form__data-value"]}>{creditData.subtitleCredit}</label>
                <input type="hidden" name='credit-target' value={creditData.subtitleCredit} />
            </div>
            <div className={classes["apply-form__data"]}>
                <p className={classes["apply-form__data-title"]}>Стоимость {creditData.priceTitle}</p>
                <label cclassName={classes["apply-form__data-value"]}>{creditCost}</label>
                <input type="hidden" name='credit-target' value={creditCost} />
            </div>
            <div className={classes["apply-form__data"]}>
                <p className={classes["apply-form__data-title"]}>Первоначальный взнос</p>
                <label cclassName={classes["apply-form__data-value"]}>{initialPaymentValue} рублей</label>
                <input type="hidden" name='credit-target' value={initialPaymentValue} />
            </div>
            <div className={classes["apply-form__data"]}>
                <p className={classes["apply-form__data-title"]}>Срок кредитования</p>
                <label cclassName={classes["apply-form__data-value"]}>{creditTermsValue} лет</label>
                <input type="hidden" name='credit-target' value={creditTermsValue} />
            </div>


            </div>

        </div>
    )
}

export default ApplicationCredit