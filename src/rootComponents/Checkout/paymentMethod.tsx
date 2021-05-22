import React from 'react';
import { usePaymentMethod } from 'src/talons/Checkout/usePaymentMethod';
import CheckoutTitle from './checkoutTitle';
import CreditCart from './creditCart';
import classes from './paymentMethod.scss';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from 'src/config/defaults';
import { PaymentMethod } from 'src/interfaces/cart';
import Button from 'src/components/Button';

type Props = {
    setStep: any
}

const PaymentMethod:React.FC<Props> = (props: Props) => {
    const { setStep } = props;
    const { setMethod, method, handleSubmit, paymentMethods } = usePaymentMethod({setStep});
    const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
    
    return (
        <div className={classes.root}>
            <CheckoutTitle title="Վճարման եղանակ" number={4}/>
            <div className={classes.methods}>
                <div>
                    <div className={classes.list}>
                        {
                            paymentMethods && paymentMethods.length
                            ?   paymentMethods.map((e: PaymentMethod, i: number) => (
                                    e.enabled
                                    ?   <div className={classes.radio}>
                                            <input
                                                key={i}
                                                type="radio" 
                                                name="paymentMethod" 
                                                value={e.methodCode}
                                                checked={method?.methodCode == e.methodCode} 
                                                onChange={() => setMethod(e)}
                                            />
                                            <span onClick={() => setMethod(e)}>{e.methodName}</span> 
                                        </div>
                                    :   null
                            ))
                            :   null
                        }
                    </div>
                    {method?.methodCode == "cart" 
                        ? 
                            <Elements stripe={stripePromise}>
                                <CreditCart setStep={setStep} method={method}/>
                            </Elements>
                        :   null
                    }
                </div>
                
            </div>
            {method?.methodCode == "cart"
            ?   null
            : <div className={classes.buttons}>
                <Button onClick={handleSubmit} label="Հաստատել" priority="normal"></Button>
            </div>}
        </div>
    )
}

export default PaymentMethod;