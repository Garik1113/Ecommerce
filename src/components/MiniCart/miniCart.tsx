import React from 'react';
import classes from './miniCart.scss';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import { useMiniCart } from 'src/talons/MiniCart/useMiniCart';
import { TCartItem } from 'src/store/types/cart';


const MiniCart:React.FC = () => {
    const { isActive, handleClose, cartItems = [], totalPrice } = useMiniCart();

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
                {
                    cartItems.map((cartItem: TCartItem, index: number) => (
                        <CartItem 
                            showDescription={true} 
                            key={index}
                            cartItem={cartItem}
                        />
                    ))
                }
            </section>
            <footer className={classes.footer}>
                <div className={classes.subTotal}>
                    <p>Cart Total:</p>
                    <span>{totalPrice.currency} {totalPrice.value}</span>
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