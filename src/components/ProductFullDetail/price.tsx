import React from 'react';
import classes from './price.scss';

type Props = {
    price: number
}
const Price:React.FC<Props> = (props: Props) => {
    const { price } = props;
    return (
        <div className={classes.root}>
            <span className={classes.value}>{price}</span>
            {/* <span className={classes.currency}>{currency}</span> */}
        </div>
    )
}

export default Price;