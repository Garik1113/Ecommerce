import React from 'react'
import { Link } from 'react-router-dom';
import classes from './orderSuccess.scss';

type Props = {
    orderNumber: string
}

const OrderSuccess:React.FC<Props> = (props: Props) => {
    const { orderNumber } = props;

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.titleField}>
                    <h3 className={classes.title}>Thank you for your order</h3>
                </div>
                <div className={classes.textField}>
                    <span className={classes.text}>
                        Your Order Number is 
                        <Link to='account/orders'>
                            <b>{orderNumber}</b>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess;