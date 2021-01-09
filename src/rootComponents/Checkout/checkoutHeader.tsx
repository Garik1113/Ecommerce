import React, { useContext } from 'react';
import classes from './checkoutHeader.scss';

const CheckoutHeader:React.FC = () => {
    // const context = useContext();
    // console.log("CONTEXT", context)
    return (
        <div className={classes.root}>
                Checkout Header
        </div>
    )
}

export default CheckoutHeader;