import React from 'react';
import { IOrder } from 'src/interfaces/order';
import { useOrders } from 'src/talons/Account/useOrders';
import Tabs from '../tabs';
import Order from './order';
import classes from './orders.scss';

const Orders:React.FC = () => {
    const { orders } = useOrders();
    
    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                <Tabs/>
            </div>
            <div className={classes.orders}>
                {
                    orders.length 
                    ?   orders.map((e: IOrder) => (
                            <Order order={e} key={e._id} />
                            ))
                    :   <div className={classes.empty}>Empty</div>

                }         
            </div>            
        </div>
    )
}

export default Orders