import React, { useState } from 'react';
import { IOrder } from 'src/interfaces/order';
import classes from './order.scss';
import CartProduct from 'src/components/CartContent/cartProduct'
import { ICartItem } from 'src/interfaces/cart';
import AddressCard from './addressCard';

type Props = {
    order: IOrder
}

const getDate = (createdAt: string) => {
    if(!createdAt) return null;
    const tempDate = new Date(createdAt);
    const month = tempDate.getMonth() + 1 > 9 ? tempDate.getMonth() + 1 : `0${tempDate.getMonth() + 1}`;
    const day = tempDate.getDate() > 9 ? tempDate.getDate() : `0${tempDate.getDate()}`
    const year = tempDate.getFullYear();
    return `${day}/${month}/${year}`
}

const getTotalPrice = (price: any): number => {
    return typeof price == 'object' ? Object.values(price)[0] : price
}

const Order:React.FC<Props> = (props: Props) => {
    const { order } = props;
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.header} onClick={() => setIsOpen(!isOpen)}>
                    <div className={classes.headerField}>
                        <div className={classes.headerTitle}>
                            Date
                        </div>
                        <span>
                            {getDate(order.createdAt)}
                        </span>
                    </div>
                    <div className={classes.headerField}>
                        <div className={classes.headerTitle}>
                            Grand total
                        </div>
                        <span>
                            {getTotalPrice(order.totalPrice)} {order.currency.name}
                        </span>
                    </div>
                    <div className={classes.headerField}>
                        <div className={classes.headerTitle}>
                            Order number
                        </div>
                        <span>
                            {order._id}
                        </span>
                    </div>
                </div>
                {
                    isOpen
                    ?   <div className={classes.content}>
                            <div className={classes.items}>
                                <div className={classes.paymentHeader}>
                                    Products
                                </div>
                                {
                                    order.items.map((e:ICartItem, i: number) => {
                                        return <CartProduct currency={order.currency} inOrder={true} cartItem={e} key={i}/>
                                    })
                                }
                            </div>
                            <div className={classes.addressField}>
                                <div className={classes.shipping}>
                                    <div className={classes.addressTitle}>
                                        Shipping Address
                                    </div>
                                    <AddressCard address={order.shippingAddress}/>
                                </div>
                                <div className={classes.billing}>
                                    <div className={classes.addressTitle}>
                                        Billing Address
                                    </div>
                                    <AddressCard address={order.billingAddress}/>
                                </div>
                            </div>
                            <div className={classes.payment}>
                                <div className={classes.paymentHeader}>
                                    Payment Method
                                </div>
                                <span className={classes.paymentValue}>
                                    {order.paymentMethod.methodName}
                                </span>
                            </div>
                            <div className={classes.payment}>
                                <div className={classes.paymentHeader}>
                                    Shipping Method
                                </div>
                                <span className={classes.paymentValue}>
                                    {order.shippingMethod.price} {order.currency.name}
                                </span>
                                <span className={classes.paymentValue}>
                                    {order.shippingMethod.methodName}
                                </span>
                            </div>
                            <div className={classes.payment}>
                                <div className={classes.paymentHeader}>
                                    Status
                                </div>
                                <span className={classes.status}>
                                    {order.status.name}
                                </span>
                            </div>
                            
                        </div>
                    :   null
                }
                
            </div>
        </div>
    )
}

export default Order