import React from 'react';
import classes from './miniCart.scss';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import { useMiniCart } from 'src/talons/MiniCart/useMiniCart';
import { ICartItem } from 'src/interfaces/cart';


const MiniCart:React.FC = () => {
    const { 
        isActive, 
        handleClose, 
        cartItems = [], 
        totalPrice,
        currency
    } = useMiniCart();

    return (
        <div className={`${classes.root} ${isActive ? classes.root_open : null}`}>
            <header className={classes.header}>
                <div className={classes.cartName}>
                    <h3>Իմ զամբյուղը</h3>
                </div>
                <div className={classes.close}>
                    <i className={`fas fa-window-close ${classes.closeIcon}`} onClick={handleClose}></i>
                </div>
            </header>
            {
                !cartItems.length
                ?   <div className={classes.emptyCart}>
                        Ձեր զամբյուղը դատարկ է
                    </div>
                :   <section className={classes.body}>
                    {
                        cartItems.map((cartItem: ICartItem, index: number) => (
                            <CartItem 
                                showDescription={false} 
                                key={index}
                                cartItem={cartItem}
                                currency={currency}
                                handleClose={handleClose}
                            />
                        ))
                    }
                    </section>
            }
            {
                cartItems.length
                ?   <footer className={classes.footer}>
                        <div className={classes.subTotal}>
                            <span>Ընդհանուր արժեք:</span>
                            <span className={classes.price}>{totalPrice} {currency.name}</span>
                        </div>
                        <div className={classes.cartLink}>
                            <Link to="/cart" onClick={handleClose}>Զամբյուղի Էջ</Link>
                        </div>
                        <div className={classes.checkoutLink}>
                            <Link to="/checkout" onClick={handleClose}>Պատվերի Էջ</Link>
                        </div>
                    </footer>
                :   null
            }
        </div>
    )
}

export default MiniCart;