import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import classes from './summary.scss';

type Props = {
    totalPrice: number
}

const Summary:React.FC<Props> = (props: Props) => {
    const {totalPrice} = props;
   console.log(totalPrice)
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h2>Summary</h2>
            </div>
            <hr/>
            <div className={classes.subTotal}>
                <p>Subtotal</p>
                <span>{totalPrice}</span>
            </div>
            <div className={classes.shipping}>
                <p>Shipping</p>
                <span>$0</span>
            </div>
            <hr/>
            <div className={classes.orderTotal}>
                <h3>Order Total</h3>
                <b>{totalPrice}</b>
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