import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { usePaymentMethod } from 'src/talons/Checkout/usePaymentMethod';
import CheckoutTitle from './checkoutTitle';
import CreditCart from './creditCart';
import classes from './paymentMethod.scss';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

type Props = {
    setStep: any
}

const PaymentMethod:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { setMethod, method, handleSubmit } = usePaymentMethod({setStep});
    const stripePromise = loadStripe('pk_test_51HPTvgB9AM6FXiSYeO5vxQ4Go4RV7n2xnhROmBB7T57A0QTvwR4w3LvtzgIIxciKQX9gBYvZr6rvxXOw5oC0G0eN00S5JxiNLa')
    
    return (
        <div className={classes.root}>
            <CheckoutTitle title="payment method" number={3}/>
            <div className={classes.methods}>
                <div>
                    <div className={classes.radio}>
                        <input type="radio" name="paymentMethod" value="credit_cart" checked={method === 'credit_cart'} onChange={() => setMethod("credit_cart")}/>
                        <span>Credit Cart</span> 
                    </div>
                    {method === "credit_cart" 
                        ? 
                            <Elements stripe={stripePromise}>
                                <CreditCart/>
                            </Elements>
                        : null }
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setMethod("paypal")}/>
                    <span>Paypal</span>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="purchase_order" onChange={() => setMethod("purchase_order")}/>
                    <span>Cash on delivery</span>
                </div>
            </div>
            <Button onClick={() => setStep("billing")}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default PaymentMethod;