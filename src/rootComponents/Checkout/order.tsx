import React, { useCallback, useState } from 'react';
import { TCartItem } from 'src/store/types/cart';
import { TPrice } from 'src/store/types/product';
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
    const { items, totalPrice, setStep } = props;
    const [showItems, setShowItems] = useState(false);
    const handleClick = useCallback(():void => {
            setShowItems(!showItems);
    }, [showItems, setShowItems])

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
                        <CartItem showDescription={false} cartItem={item} key={item._id}/>
                    ))
                }
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
            <Button onClick={() => setStep("payment")}>Back</Button>
        </div>
    )
}

export default Order;