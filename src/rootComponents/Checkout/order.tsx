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
            <CheckoutTitle title="Պատվեր" number={5}/>
            <div className={classes.itemCount} onClick={handleClick}>
                <span>Զամբյուղում {items.length} ապրանք</span>
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
                            handleClose={() => {}} 
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
                <span>Ապրանքների գումար</span>
                <span>{subTotal} {currency.name}</span>
            </div>
            <hr/>
            <div className={classes.subTotal}>
                <span>Առաքման գումար</span>
                <span>{shippingMethod?.price} {currency.name}</span>
            </div>
            <hr/>
            <div className={classes.total}>
                <span>Ընդհանուր գումար</span>
                <span>{totalPrice} {currency.name}</span>
            </div>
            <div className={classes.button}>
                <Button label="Պատվիրել" priority="high" onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default Order;