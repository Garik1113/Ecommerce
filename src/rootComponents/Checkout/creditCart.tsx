import React, { useCallback } from 'react';
import classes from './creditCart.scss';
import { CardNumberElement, CardCvcElement, CardExpiryElement, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CreditCart:React.FC = () => {
    const elements = useElements();
    const stripe = useStripe();
    console.log(elements)
    const handleSubmit = useCallback(async(event) => {
        event.preventDefault();
        console.log(elements)
        const card = elements.getElement("cardNumber");
        console.log(card)
        const {error, paymentMethod} = await stripe?.createPaymentMethod({type: "card", card});
        console.log(error, paymentMethod)
    }, [elements, stripe])
    return (
            <div className={classes.root}>
                
                    <form onSubmit={handleSubmit}>
                        <div className={classes.cartElement}>
                            <CardNumberElement className={classes.input}/>
                        </div>
                        <div className={classes.cartElement}>
                            <CardCvcElement className={classes.input}/>
                        </div>
                        <div className={classes.cartElement}>
                            <CardExpiryElement className={classes.input}/>
                        </div> 
                    </form>
                
            </div>
    )
}

export default CreditCart;