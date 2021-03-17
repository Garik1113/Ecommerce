import React from 'react';
import { ICartItem } from 'src/interfaces/cart';
import { IPrice } from 'src/interfaces/product';
import { useOrder } from 'src/talons/Checkout/useOrder';
import Button from '../../components/Button';
import CartItem from '../../components/MiniCart/cartItem';
import CheckoutTitle from './checkoutTitle';
import classes from './order.scss';
import OrderSuccess from './orderSuccess';

type Props = {
    items: ICartItem[],
    totalPrice: IPrice,
    setStep: any
}

const Order:React.FC<Props> = (props: Props) => {
    const { items, totalPrice } = props;
    const { 
        handleClick, 
        showItems, 
        handleSubmit,
        message,
        orderNumber
    } = useOrder();
    if(message == 'success' && orderNumber) {
        return <OrderSuccess orderNumber={orderNumber}/>
    }

    return (
        <div className={classes.root}>
            <CheckoutTitle title="review order" number={4}/>
            <div className={classes.itemCount} onClick={handleClick}>
                <span>{items.length} items in cart</span>
                {showItems 
                    ?   <i className="fas fa-chevron-up"></i>
                    :   <i className="fas fa-chevron-down"></i>
                } 
            </div>
            {showItems 
            ?  <div className={classes.items}>
                {
                    items.map((item: ICartItem) => (
                        <CartItem showDescription={false} cartItem={item} key={item._id} dontShowActions={true}/>
                    ))
                }
                </div>
            : null
            }
            <div className={classes.subTotal}>
                <span>Cart Total</span>
                <span>{totalPrice.value} {totalPrice.currency}</span>
            </div>
            <div className={classes.shipping}>
                <span>Shipping</span>
                <span>$0</span>
            </div>
            <hr/>
            <div className={classes.total}>
                <span>Order Total</span>
                <span>{totalPrice.value} {totalPrice.currency}</span>
            </div>
            <div className={classes.button}>
                <Button label="Place Order" priority="high" onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default Order;