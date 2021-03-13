import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartDrawer } from '../../store/actions/cart/actions';
import { CartActions } from 'src/store/types/cart';

import classes from './cartTrigger.scss'
interface Props {
    totalQty: number
}
const CartTrigger:React.FC<Props> = (props: Props) => {
    const { totalQty } = props;
    const dispatch:Dispatch<CartActions> = useDispatch();
    
    return (
        <div className={classes.root}>
            {
                totalQty > 0 
                ?   <span className={classes.itemCount}>{totalQty}</span>
                :   null
            }
            <i 
                className={`fas fa-cart-arrow-down ${classes.cart}`}
                onClick={() => dispatch(toggleCartDrawer('main'))}
            ></i>
        </div>
    )
}

export default CartTrigger;