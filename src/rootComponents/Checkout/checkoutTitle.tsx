import React from 'react';
import classes from './checkoutTitle.scss';

interface Props {
    title: string,
    number: number
}

const CheckoutTitle:React.FC<Props> = (props: Props) => {
    const {title, number} = props;
    return (
        <div className={classes.root}>
            <div className={classes.circle}>
                <span>{number}</span>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default CheckoutTitle;