import React from 'react';
import { Link } from 'react-router-dom';
import { ShippingMethod } from 'src/interfaces/cart';
import Button from '../Button';
import classes from './summary.scss';

type Props = {
    totalPrice: number,
    currency: any,
    shippingMethod: ShippingMethod | null,
    subTotal: number
}

const Summary:React.FC<Props> = (props: Props) => {
    const { totalPrice, currency, shippingMethod, subTotal } = props;

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h2>Summary</h2>
            </div>
            <hr className={classes.line}/>
            <div className={classes.subTotal}>
                <p>Subtotal</p>
                <span>{subTotal} {currency.name}</span>
            </div>
            {
                shippingMethod
                ?   <div>
                        <div className={classes.subTotal}> 
                            <p>Shipping: {shippingMethod.methodName}</p>
                            <span>{shippingMethod.price} {currency.name}</span>
                        </div>
                        <hr className={classes.line}/>
                    </div> 
                :   null
            }
            <div className={classes.orderTotal}>
                <h3>Order Total</h3>
                <b>{totalPrice} {currency.name}</b>
            </div>
            <div className={classes.button}>
                <Link to="/checkout">
                    <Button label="Proceed to Checkout" priority="high"/>
                </Link>
            </div>
        </div>
    )
}

export default Summary