import React from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL, IMAGE_BASE_URL } from 'src/config/defaults';
import { useCartItem } from 'src/talons/MiniCart/useCartItem';
import { handleImageError } from 'src/util/handleImageError';
import get from 'lodash/get';
import classes from './cartProduct.scss';
import { ICartItem } from 'src/interfaces/cart';
import Attributes from '../Attributes';

interface Props {
    cartItem: ICartItem,
    inOrder?: boolean,
    currency: any
}

const CartProduct:React.FC<Props> = (props: Props) => {
    const { cartItem, inOrder, currency } = props;
    const { 
        handleDeleteCartItem,
        handleChangeQuantity
    } = useCartItem({cartItem})
    const { product, quantity } = cartItem;
    const { name, _id, price, discountedPrice } = product;

    return (
        <div className={classes.root}>
            <div className={classes.topActions}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={`${BACKEND_URL}/images/product/${get(product, "images[0].main_image", "")}`} className={classes.itemImage}/>
                </div>
                <div className={classes.rightActions}>
                    <div className={classes.nameField}>
                        <Link to={`/product/${_id}`}>
                            {name}
                        </Link>
                        <div className={classes.attributeField}>
                            <Attributes 
                                attributes={product.configurableAttributes}
                                classes={{
                                    attribute: classes.attribute,
                                    root: classes.attributeRoot,
                                    attributeName: classes.attributeName,
                                    attributeValue: classes.attributeValue
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.price}>
                        <div className={classes.propertyName}>
                            Գին
                        </div>
                        <span className={classes.itemPrice}>{discountedPrice || price} {currency.name}</span>
                    </div>
                    <div className={classes.quantity}>
                        <div className={classes.propertyName}>
                            Քանակ
                        </div>
                        <div className={classes.qtyNumber}>
                            {!inOrder ? <i className="fas fa-chevron-left" onClick={() => handleChangeQuantity(false)}></i> : null}
                            <div className={classes.qty}>{quantity}</div>
                            {!inOrder ? <i className="fas fa-chevron-right" onClick={() => handleChangeQuantity(true)}></i> : null}
                        </div>
                    </div>
                    <div className={classes.summaryPrice}>
                        <div className={classes.propertyName}>
                            Ընդհանուր գումար
                        </div>
                        <span className={classes.summary}>{(discountedPrice || price)  * quantity} {currency.name}</span>
                    </div>
                </div>
            </div>
            {
                !inOrder
                ?   <div className={classes.bottomActions}>
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
                :   null
            }
            
        </div>
    )
}

export default CartProduct;