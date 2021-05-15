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
            <Button priority="normal" label="-" onClick={handleDecrementQuantity}/>
            <div className={classes.quantity}>{quantity}</div>
            <Button priority="normal" label="+" onClick={handleIncrementQuantity}/>
        </div>
    )
}

export default Quantity;