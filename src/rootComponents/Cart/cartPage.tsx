import React from 'react';
import CartContent from 'src/components/CartContent/cartContent';
import { useCartPage } from '../../talons/Cart/useCartPage';
import classes from './cartPage.scss';

const CartPage:React.FC = () => {
    const { cart } =  useCartPage();
    return (
        <div className={classes.root}>
            { cart ? <CartContent cart={cart}/> : null }
        </div>
    )
}

export default CartPage;