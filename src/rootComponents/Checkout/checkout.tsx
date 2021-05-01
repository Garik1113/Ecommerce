import React from 'react';
import { useCheckout } from 'src/talons/Checkout/useCheckout';
import BillingAddress from './billingAddress';
import classes from './checkout.scss';
import CheckoutHeader from './checkoutHeader';
import Order from './order';
import PaymentMethod from './paymentMethod';
import ShippingAddress from './shippingAddress';


const Checkout:React.FC = () => {
    const { 
        items, 
        totalPrice, 
        billingAndShippingAreTheSame, 
        handleChange,
        step,
        setStep,
        shippingAddress, 
        billingAddress, 
        paymentMethod 
    } = useCheckout();
    

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div>
                    <CheckoutHeader 
                        setStep={setStep} 
                        step={step}
                        shippingAddress={shippingAddress}
                        billingAddress={billingAddress}
                        paymentMethod={paymentMethod}
                    />
                </div>
                <div>
                    {step.value == "shipping" ? <ShippingAddress setStep={setStep}/> : null}
                </div>
                <div>
                    {
                        step.value == "billing" ? 
                        <BillingAddress
                            setStep={setStep}
                            billingAndShippingAreTheSame={billingAndShippingAreTheSame} 
                            handleChange={handleChange}
                        />
                        : null
                    }
                </div>
                <div>
                    {step.value == 'payment' ? <PaymentMethod setStep={setStep}/> : null}
                </div>
                <div>
                    { step.value == 'order' ? <Order items={items} totalPrice={totalPrice} setStep={setStep} /> : null }
                </div>
            </div>
        </div>
    )
}

export default Checkout;