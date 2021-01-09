import React, { useEffect } from 'react';
import classes from './checkout.scss';
import CheckoutHeader from './checkoutHeader';
import Order from './order';
import PaymentMethod from './paymentMethod';
import ShippingAddress from './shippingAddress';
import ShippingMethod from './shippingMethod';




const Checkout:React.FC = () => {
    useEffect(() => {
        // fetch('https://f6nehuwv52.execute-api.us-east-1.amazonaws.com/Prod/product/123').then(res => console.log(res))
    }, [])
    return (
        <div className={classes.root}>
            <div>
                <div>
                    <CheckoutHeader/>
                </div>
                <div>
                    <ShippingAddress/>
                </div>
                <div>
                    <ShippingMethod/>
                </div>
                <div>
                    <PaymentMethod/>
                </div>
            </div>
            <div>
                <Order/>
            </div>
        </div>
    )
}

export default Checkout;