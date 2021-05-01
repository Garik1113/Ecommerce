import React, { useCallback } from 'react';
import { IAddress } from 'src/interfaces/address';
import { TStep } from 'src/talons/Checkout/useCheckout';
import classes from './checkoutHeader.scss';

type Props = {
    setStep: any
    step: TStep,
    paymentMethod: string,
    shippingAddress: IAddress,
    billingAddress: IAddress
}

const CheckoutHeader:React.FC<Props> = (props: Props) => {
    const { 
        setStep, 
        step,
        paymentMethod,
        shippingAddress,
        billingAddress
    } = props;
    const isDisabled = useCallback((index:number):boolean => {
        return step.index < index
    }, [step]);

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={`${classes.item} ${isDisabled(0) && shippingAddress._id ? classes.disabled : classes.active}`} onClick={() => isDisabled(0) && shippingAddress._id ? null :  setStep({value: "shipping", index: 0})}>
                    <i className={"fas fa-map-marker"}></i> 
                </div>
                <div className={classes.line}></div>
                <div className={`${classes.item} ${isDisabled(1) && billingAddress._id ? classes.disabled : classes.active}`} onClick={() => isDisabled(1) && billingAddress._id ? null : setStep({value: "billing", index: 1})}>
                    <i className="fas fa-location-arrow"></i>
                </div>
                <div className={classes.line}></div>
                <div className={`${classes.item} ${isDisabled(2) && !paymentMethod ? classes.disabled : classes.active}`} onClick={() => isDisabled(2) && !paymentMethod ? null : setStep({value: "payment", index: 2})}>
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