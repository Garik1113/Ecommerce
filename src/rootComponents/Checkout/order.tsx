import React from 'react';
import { ICartItem } from 'src/interfaces/cart';
import { useOrder } from 'src/talons/Checkout/useOrder';
import Button from '../../components/Button';
import CartItem from '../../components/MiniCart/cartItem';
import CheckoutTitle from './checkoutTitle';
import classes from './order.scss';
import OrderSuccess from './orderSuccess';

const Order:React.FC = () => {
    const { 
        handleClick, 
        showItems, 
        handleSubmit,
        message,
        orderNumber,
        currency,
        items,
        totalPrice,
        subTotal,
        shippingMethod
    } = useOrder();
    if (message == 'success' && orderNumber) {
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
                        <CartItem 
                            showDescription={false} 
                            cartItem={item} 
                            key={item._id} 
                            dontShowActions={true}
                            currency={currency}
                        />
                    ))
                }
                </div>
            : null
            }
            <div className={classes.subTotal}>
                <span>Sub Total</span>
                <span>{subTotal} {currency.name}</span>
            </div>
            <hr/>
            <div className={classes.subTotal}>
                <span>Shipping Total</span>
                <span>{shippingMethod?.price} {currency.name}</span>
            </div>
            <hr/>
            <div className={classes.total}>
                <span>Grand Total</span>
                <span>{totalPrice} {currency.name}</span>
            </div>
            <div className={classes.button}>
                <Button label="Place Order" priority="high" onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default Order;