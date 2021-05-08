import React from 'react';
import classes from './creditCart.scss';
import { CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import { useCreditCard } from 'src/talons/Checkout/useCreditCard';
import { Button } from 'semantic-ui-react';
import { PaymentMethod } from 'src/interfaces/cart';

type Props = {
    setStep: any,
    method: PaymentMethod
}

const CreditCart:React.FC<Props> = (props: Props) => {
    const { setStep, method } = props;
    const { handleSubmit } = useCreditCard({setStep, method});

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
                <div className={classes.buttons}>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CreditCart;