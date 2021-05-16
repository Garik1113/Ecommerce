import React from 'react';
import Button from '../Button';
import classes from './quantity.scss';

type Props = {
    quantity: number,
    handleIncrementQuantity: any,
    handleDecrementQuantity: any,
}

const Quantity: React.FC<Props> = (props: Props) => {
    const {
        quantity, 
        handleDecrementQuantity, 
        handleIncrementQuantity
    } = props;
    return (
        <div className={classes.root}>
            <div onClick={handleDecrementQuantity} className={classes.icons}>-</div>
            <div className={classes.quantity}>{quantity}</div>
            <div onClick={handleIncrementQuantity} className={classes.icons}>+</div>
        </div>
    )
}

export default Quantity;