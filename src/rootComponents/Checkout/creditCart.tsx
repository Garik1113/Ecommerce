import React from 'react';
import classes from './creditCart.scss';
import { Elements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51HPTvgB9AM6FXiSYeO5vxQ4Go4RV7n2xnhROmBB7T57A0QTvwR4w3LvtzgIIxciKQX9gBYvZr6rvxXOw5oC0G0eN00S5JxiNLa')

const CreditCart:React.FC = () => {
    return (
        <div className={classes.root}>
            <Elements stripe={stripePromise}>
                <div className={classes.cartElement}>
                    <CardNumberElement className={classes.input}/>
                </div>
                <div className={classes.cartElement}>
                    <CardCvcElement className={classes.input}/>
                </div>
                <div className={classes.cartElement}>
                    <CardExpiryElement className={classes.input}/>
                </div>
            </Elements>
        </div>
    )
}

export default CreditCart;