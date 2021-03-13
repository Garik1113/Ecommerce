import React from 'react';
import { Button } from 'semantic-ui-react';
import { usePaymentMethod } from 'src/talons/Checkout/usePaymentMethod';
import CheckoutTitle from './checkoutTitle';
import CreditCart from './creditCart';
import classes from './paymentMethod.scss';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from 'src/config/defaults';

type Props = {
    setStep: any
}

const PaymentMethod:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { setMethod, method, handleSubmit } = usePaymentMethod({setStep});
    const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
    
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
                        :   null
                    }
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setMethod("paypal")}/>
                    <span>Paypal</span>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="cash_on_delivery" onChange={() => setMethod("cash_on_delivery")}/>
                    <span>Cash on delivery</span>
                </div>
            </div>
            {method == "credit_cart" || method == "paypal"
            ?   null
            : <div className={classes.buttons}>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>}
        </div>
    )
}

export default PaymentMethod;