import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { CartActions } from 'src/store/types/cart';
import classes from './miniCart.scss';
import { toggleCartDrawer } from '../../store/actions/cart/actions';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';


const MiniCart:React.FC = () => {
    const isActive = useSelector((state:State) => state.cart.cartDrawer);
    const dispatch:Dispatch<CartActions> = useDispatch();
    
    const handleClose = useCallback(():void => {
        dispatch(toggleCartDrawer(""))
    },[dispatch, toggleCartDrawer]);

    return (
        <div className={`${classes.root} ${isActive ? classes.root_open : null}`}>
            <header className={classes.header}>
                <div className={classes.cartName}>
                    <h3>My Cart</h3>
                </div>
                <div className={classes.close}>
                    <i className={`fas fa-window-close ${classes.closeIcon}`}
                        onClick={handleClose}
                    ></i>
                </div>
            </header>
            <section className={classes.body}>
                <CartItem showDescription={true}/>
                <CartItem showDescription={true}/>
                <CartItem showDescription={true}/>
                <CartItem showDescription={true}/>
                <CartItem showDescription={true}/>
            </section>
            <footer className={classes.footer}>
                <div className={classes.subTotal}>
                    <p>Cart Subtotal:</p>
                    <span>$1540</span>
                </div>
                <div className={classes.cartLink}>
                    <Link to="/cart" onClick={handleClose}>View and edit cart</Link>
                </div>
                <div className={classes.checkoutLink}>
                    <Link to="/checkout" onClick={handleClose}>Go to Checkout</Link>
                </div>
            </footer>
        </div>
    )
}

export default MiniCart;