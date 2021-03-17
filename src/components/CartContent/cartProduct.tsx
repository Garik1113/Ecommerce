import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'src/config/defaults';
import { TCartItem } from 'src/store/types/cart';
import { useCartItem } from 'src/talons/MiniCart/useCartItem';
import { handleImageError } from 'src/util/handleImageError';
import get from 'lodash/get';
import classes from './cartProduct.scss';

interface Props {
    cartItem: TCartItem
}

const CartProduct:React.FC<Props> = (props: Props) => {
    const { cartItem } = props;
    const { 
        handleDeleteCartItem,
        handleChangeQuantity
    } = useCartItem({cartItem})
    const { product, quantity } = cartItem;
    const { name, _id, price } = product;

    return (
        <div className={classes.root}>
            <div className={classes.topActions}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={`${IMAGE_BASE_URL}/products/${get(product, "images[0].main_image", "")}`} className={classes.itemImage}/>
                </div>
                <div className={classes.title}>
                    <Link to={`/product/${_id}`}>
                        <h3>{name}</h3>
                    </Link>
                    
                </div>
                <div className={classes.price}>
                    <div className={classes.propertyName}>
                        <b>Price</b>
                    </div>
                    <span>{price.value} {price.currency}</span>
                </div>
                <div className={classes.quantity}>
                    <div className={classes.propertyName}>
                        <b>Quantity</b>
                    </div>
                    <div className={classes.qtyNumber}>
                        <i className="fas fa-chevron-left" onClick={() => handleChangeQuantity(false)}></i>
                        <input type="number"  min={1} defaultValue={1} value={quantity}/>
                        <i className="fas fa-chevron-right" onClick={() => handleChangeQuantity(true)}></i>
                    </div>
                </div>
                <div className={classes.summaryPrice}>
                    <div className={classes.propertyName}>
                        <b>Summary price</b>
                    </div>
                    <span>{price.value * quantity}</span>
                </div>
            </div>
            <div className={classes.bottomActions}>
                <div className={classes.removeEdit}>
                    <div className={classes.edit}>
                        <Link to={`/product/${_id}`}>
                            <i className="far fa-edit"></i>
                        </Link>
                        
                    </div> 
                    <div className={classes.remove} onClick={handleDeleteCartItem}>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;