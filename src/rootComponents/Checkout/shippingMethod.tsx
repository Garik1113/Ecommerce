import React from 'react';
import CheckoutTitle from './checkoutTitle';
import classes from './shippingMethod.scss';

const ShippingMethod:React.FC = () => {
    return (
        <div className={classes.root}>
            <CheckoutTitle title="SHIPPING METHOD" number={2}/>
            <div className={classes.body}>
                <div className={classes.method}>
                    <div>
                       <input type="radio" name="method" value="Free" className={classes.radio} defaultChecked={true}/>
                        <span>Free</span> 
                    </div>
                    <span>$0</span>  
                </div>
                <div className={classes.method}>
                    <div>
                        <input type="radio" name="method" value="Cost" className={classes.radio}/>
                        <span>Cost</span>
                    </div>
                    <span>$100</span>  
                </div>
            </div>

        </div>
    )
}

export default ShippingMethod;