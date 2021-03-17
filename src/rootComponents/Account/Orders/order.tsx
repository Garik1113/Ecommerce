import React from 'react';
import { IOrder } from 'src/interfaces/order';
import classes from './order.scss';

type Props = {
    order: IOrder
}

const Order:React.FC<Props> = (props: Props) => {
    const { order } = props;

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.statusField}>
                    Status: <span>{order.status}</span>
                </div>

            </div>
        </div>
    )
}

export default Order