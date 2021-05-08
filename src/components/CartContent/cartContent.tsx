import React from 'react';
import classes from './cartContent.scss';
import CartProduct from './cartProduct';
import Summary from './summary';
import { ICart } from 'src/interfaces/cart';

type Props = {
    cart: ICart,
    currency: any
}
const CartContent:React.FC<Props> = (props: Props) => {
   const { cart, currency } = props;
   const { items=[], totalPrice, shippingMethod, subTotal } = cart;

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Cart</h1>
            </div>
            <div className={classes.body}>
                <div className={classes.products}>
                    {
                        items.map((e, i) => {
                            return <CartProduct cartItem={e} key={i} currency={currency}/> 
                        })
                    }
                </div>
                <div className={classes.summary}>
                    <Summary 
                        totalPrice={totalPrice} 
                        currency={currency} 
                        shippingMethod={shippingMethod} 
                        subTotal={subTotal}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartContent;