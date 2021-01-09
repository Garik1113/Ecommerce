import React, { useState } from 'react';
import CheckoutTitle from './checkoutTitle';
import CreditCart from './creditCart';
import classes from './paymentMethod.scss';



const PaymentMethod:React.FC = () => {
    const [method, setMethod] = useState("credit_cart");
    return (
        <div className={classes.root}>
            <CheckoutTitle title="payment method" number={3}/>
            <div className={classes.methods}>
                <div>
                    <div className={classes.radio}>
                        <input type="radio" name="paymentMethod" value="credit_cart" checked={method === 'credit_cart'} onChange={() => setMethod("credit_cart")}/>
                        <span>Credit Cart</span> 
                    </div>
                    {method === "credit_cart" ? <CreditCart/> : null }
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setMethod("paypal")}/>
                    <span>Paypal</span>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" value="purchase_order" onChange={() => setMethod("purchase_order")}/>
                    <span>Purchase Order</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;