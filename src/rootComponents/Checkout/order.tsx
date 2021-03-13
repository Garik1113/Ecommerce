import React from 'react';
import { TCartItem } from 'src/store/types/cart';
import { TPrice } from 'src/store/types/product';
import { useOrder } from 'src/talons/Checkout/useOrder';
import Button from '../../components/Button';
import CartItem from '../../components/MiniCart/cartItem';
import CheckoutTitle from './checkoutTitle';
import classes from './order.scss';

type Props = {
    items: TCartItem[],
    totalPrice: TPrice,
    setStep: any
}

const Order:React.FC<Props> = (props: Props) => {
    const { items, totalPrice } = props;
    const { handleClick, showItems, handleSubmit } = useOrder()

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
                    items.map((item: TCartItem) => (
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