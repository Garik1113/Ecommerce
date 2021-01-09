import React from 'react';
import { useCartPage } from '../../talons/Cart/useCartPage';
import classes from './cartPage.scss';
import CartProduct from '../../components/Cart/cartProduct';
import Summary from '../../components/Cart/summary';

const CartPage:React.FC = () => {
    const {product} = useCartPage();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Cart</h1>
            </div>
            <div className={classes.body}>
                <div className={classes.products}>
                    <CartProduct product={product}/>
                </div>
                <div className={classes.summary}>
                    <Summary/>
                </div>
            </div>
            
        </div>
    )
}

export default CartPage;