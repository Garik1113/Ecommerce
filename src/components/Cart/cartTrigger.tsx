import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartDrawer } from '../../store/actions/cart/actions';
import { CartActions } from 'src/store/types/cart';

import classes from './cartTrigger.scss'

const CartTrigger:React.FC = () => {
    const dispatch:Dispatch<CartActions> = useDispatch();
    return (
        <div className={classes.root}>
            <i 
                className={`fas fa-cart-arrow-down ${classes.cart}`}
                onClick={() => dispatch(toggleCartDrawer('main'))}
            ></i>
        </div>
    )
}

export default CartTrigger;