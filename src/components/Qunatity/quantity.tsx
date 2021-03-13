import React from 'react';
import classes from './quantity.scss';
import { Button } from 'semantic-ui-react';

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
            <Button icon="minus square" onClick={handleDecrementQuantity}/>
            <div className={classes.quantity}>{quantity}</div>
            <Button icon="plus square" onClick={handleIncrementQuantity}/>
        </div>
    )
}

export default Quantity;