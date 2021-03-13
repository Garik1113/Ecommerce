import React, { useCallback } from 'react';
import { TStep } from 'src/talons/Checkout/useCheckout';
import classes from './checkoutHeader.scss';

type Props = {
    setStep: any
    step: TStep
}

const CheckoutHeader:React.FC<Props> = (props: Props) => {
    const { setStep, step } = props;
    const isDisabled = useCallback((index:number):boolean => {
        return step.index < index
    }, [step])
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={`${classes.item} ${isDisabled(0) ? classes.disabled : classes.active}`} onClick={() => isDisabled(0) ? null :  setStep({value: "shipping", index: 0})}>
                    <i className={"fas fa-map-marker"}></i> 
                </div>
                <div className={classes.line}></div>
                <div className={`${classes.item} ${isDisabled(1) ? classes.disabled : classes.active}`} onClick={() => isDisabled(1) ? null : setStep({value: "billing", index: 1})}>
                    <i className="fas fa-location-arrow"></i>
                </div>
                <div className={classes.line}></div>
                <div className={`${classes.item} ${isDisabled(2) ? classes.disabled : classes.active}`} onClick={() => isDisabled(2) ? null : setStep({value: "payment", index: 2})}>
                    <i className="far fa-money-bill-alt"></i>
                </div>
                <div className={classes.line}></div>
                <div className={`${classes.item} ${isDisabled(3) ? classes.disabled : classes.active}`} onClick={() => isDisabled(3) ? null : setStep({value: "order", index: 3})}>
                    <i className="fas fa-sort-amount-up-alt"></i>
                </div>
            </div>
        </div>
    )
}

export default CheckoutHeader;