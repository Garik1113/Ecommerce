import React from 'react';
import classes from './cartContent.scss';
import CartProduct from './cartProduct';
import Summary from './summary';
import { TCart } from 'src/store/types/cart';

type Props = {
    cart: TCart
}
const CartContent:React.FC<Props> = (props: Props) => {
   const { cart } = props;
   const { items=[], totalPrice } = cart;
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Cart</h1>
            </div>
            <div className={classes.body}>
                <div className={classes.products}>
                    {
                        items.map((e, i) => {
                            return <CartProduct cartItem={e} key={i}/> 
                        })
                    }
                </div>
                <div className={classes.summary}>
                    <Summary totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    )
}

export default CartContent;