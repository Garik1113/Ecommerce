import React from 'react';
import Address from '../../components/Address';
import CheckoutTitle from './checkoutTitle';
import classes from './shippingAddress.scss';

const ShippingAddress:React.FC = () => {
    return (
        <div className={classes.root}>
            <CheckoutTitle title="SHIPPING ADDRESS" number={1}/>
            <Address/>
        </div>
    )
}

export default ShippingAddress;