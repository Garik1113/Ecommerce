import React from 'react';
import { Link } from 'react-router-dom';
import { useCartItem } from 'src/talons/MiniCart/useCartItem';
import classes from './cartItem.scss';
import get from 'lodash/get';
import { handleImageError } from 'src/util/handleImageError';
import { BACKEND_URL } from 'src/config/defaults';
import { ICartItem } from 'src/interfaces/cart';
import Attributes from '../Attributes';

type Props = {
    showDescription: boolean,
    cartItem: ICartItem,
    dontShowActions?: boolean,
    currency: any,
    handleClose: any
}

const CartItem:React.FC<Props> = (props: Props) => {
    const { showDescription, cartItem, dontShowActions, currency, handleClose } = props;
    const { product } = cartItem;
    const { 
        handleDeleteCartItem,
        handleChangeQuantity
    } = useCartItem({cartItem});
    
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={`${BACKEND_URL}/images/product/${get(product, "images[0].main_image", "")}`} className={classes.itemImage}/>
                </div>
                <div className={classes.rightActions}>
                    <div className={classes.title}>
                        <Link to={`/product/${product._id}`} onClick={handleClose}>
                            {product.name}
                        </Link>
                    </div>
                    <Attributes 
                        attributes={product.configurableAttributes}
                        classes={{
                            root: classes.attributeRoot,
                            attributeName: classes.attributeName,
                            attributeValue: classes.attributeValue,
                            
                        }}
                    />
                    {showDescription 
                    ?   <div className={classes.description}>
                            <p>{product.description}</p>
                        </div>
                    : null
                    }
                    <div className={classes.quantity}>
                        <div className={classes.qty}>
                            Քանակ: 
                        </div>
                        {dontShowActions 
                        ?   <span>{cartItem.quantity}</span>  
                        :   <div className={classes.qtyNumber}>
                                <i className="fas fa-chevron-left" onClick={() => handleChangeQuantity(false)}></i>
                                {/* <input type="number" min={1} value={1} readOnly={true}/> */}
                                <span>{cartItem.quantity}</span> 
                                <i className="fas fa-chevron-right" onClick={() => handleChangeQuantity(true)}></i>
                            </div>
                        }
                        <div>
                            <span className={classes.price}>{product.discountedPrice || product.price} {currency.name}</span>
                        </div>
                    </div>
                    {dontShowActions 
                    ?   null
                    :   <div className={classes.close} onClick={handleDeleteCartItem}>
                            <i className={`fas fa-trash ${classes.closeIcon}`}></i>
                        </div>
                    }
                </div>
            </div>
            <hr/>
        </div>
    )
} 

export default CartItem;
