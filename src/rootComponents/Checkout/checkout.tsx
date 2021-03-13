import React, { useState } from 'react';
import { useCheckout } from 'src/talons/Checkout/useCheckout';
import BillingAddress from './billingAddress';
import classes from './checkout.scss';
import CheckoutHeader from './checkoutHeader';
import Order from './order';
import PaymentMethod from './paymentMethod';
import ShippingAddress from './shippingAddress';
import ShippingMethod from './shippingMethod';


const Checkout:React.FC = () => {
    const { 
        items, 
        totalPrice, 
        billingAndShippingAreTheSame, 
        handleChange,
        step,
        setStep
    } = useCheckout();
    

    return (
        <div className={classes.root}>
            <div>
                
                <div>
                    <CheckoutHeader/>
                </div>
                <div>
                    {step == "shipping" ? <ShippingAddress setStep={setStep}/> : null}
                </div>
                <div>
                    {
                        step == "billing" ? 
                        <BillingAddress
                            setStep={setStep}
                            billingAndShippingAreTheSame={billingAndShippingAreTheSame} 
                            handleChange={handleChange}
                        />
                        : null
                    }
                </div>
                <div>
                    {step == 'method' ? <ShippingMethod/> : null}
                </div>
                <div>
                    {step == 'payment' ? <PaymentMethod setStep={setStep}/> : null}
                </div>
                <div>
                    { step == 'order' ? <Order items={items} totalPrice={totalPrice} setStep={setStep} /> : null }
                </div>
            </div>
            {/* <div>
                <Order items={items} totalPrice={totalPrice}/>
            </div> */}
        </div>
    )
}

export default Checkout;