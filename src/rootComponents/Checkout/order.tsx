import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';
import CartItem from '../../components/MiniCart/cartItem';
import CheckoutTitle from './checkoutTitle';
import classes from './order.scss';


const Order:React.FC = () => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = useCallback(():void => {
            setShowItems(!showItems);
    }, [showItems, setShowItems])

    return (
        <div className={classes.root}>
            <CheckoutTitle title="review order" number={4}/>
            <div className={classes.itemCount} onClick={handleClick}>
                <span>3 Items in Cart</span>
                {showItems 
                    ?   <i className="fas fa-chevron-up"></i>
                    :   <i className="fas fa-chevron-down"></i>
                } 
            </div>
            {showItems 
            ?  <div className={classes.items}>
                    <CartItem showDescription={false}/>
                    <CartItem showDescription={false}/>
                    <CartItem showDescription={false}/>
                </div>
            : null
            }
            <div className={classes.subTotal}>
                <span>Cart Subtotal</span>
                <span>$356</span>
            </div>
            <div className={classes.shipping}>
                <span>Shipping</span>
                <span>$0</span>
            </div>
            <hr/>
            <div className={classes.total}>
                <span>Order Total</span>
                <span>$356</span>
            </div>
            <div className={classes.button}>
                <Button label="Place Order" priority="high"/>
            </div>
        </div>
    )
}

export default Order;