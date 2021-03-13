import React from 'react';
import { Link } from 'react-router-dom';
import { TCartItem } from 'src/store/types/cart';
import { useCartItem } from 'src/talons/MiniCart/useCartItem';
import classes from './cartItem.scss';
import get from 'lodash/get';

type Props = {
    showDescription: boolean,
    cartItem: TCartItem
}

const CartItem:React.FC<Props> = (props: Props) => {
    const { showDescription, cartItem } = props;
    const { product } = cartItem;
    const { 
        handleDeleteCartItem,
        handleChangeQuantity
    } = useCartItem({cartItem});

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.image}>
                    <img src={get(product, "images[0].main_image", "")} />
                </div>
                <div className={classes.rightActions}>
                    <div className={classes.title}>
                        <Link to={`/product/${product._id}`}>
                            <h4>{product.name}</h4>
                        </Link>
                    </div>
                    {showDescription 
                    ?   <div className={classes.description}>
                            <p>{product.description}</p>
                        </div>
                    : null
                    }
                    <div className={classes.quantity}>
                        <div className={classes.qty}>
                            Qty: {cartItem.quantity}
                        </div>
                        <div className={classes.qtyNumber}>
                            <i className="fas fa-chevron-left" onClick={() => handleChangeQuantity(false)}></i>
                            <input type="number" min={1} value={1} readOnly={true}/>
                            <i className="fas fa-chevron-right" onClick={() => handleChangeQuantity(true)}></i>
                        </div>
                        <div className={classes.price}>
                            <span>{product.price.value}</span>
                        </div>
                    </div>
                    <div className={classes.close} onClick={handleDeleteCartItem}>
                        <i className={`fas fa-trash ${classes.closeIcon}`}></i>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
} 

export default CartItem;
