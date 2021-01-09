import React from 'react';
import { Price } from 'src/store/types/product';
import classes from './price.scss';

const Price:React.FC<Price> = ({value, currency}: Price) => {
    return (
        <div className={classes.root}>
            <span className={classes.value}>{value}</span>
            <span className={classes.currency}>{currency}</span>
        </div>
    )
}

export default Price;