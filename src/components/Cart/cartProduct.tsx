import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'src/store/types/product';
import classes from './cartProduct.scss';

interface Props {
    product: Product
}

const CartProduct:React.FC<Props> = ({product}: Props) => {
    const { id, price, main_image, title } = product;
    return (
        <div className={classes.root}>
            <div className={classes.topActions}>
                <div className={classes.image}>
                    <img src={main_image}/>
                </div>
                <div className={classes.title}>
                    <Link to={`/product/${id}`}>
                        <h3>{title}</h3>
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
                    <input type="number" className={classes.quantityInput} min={1} defaultValue={1}/>
                </div>
                <div className={classes.summaryPrice}>
                    <div className={classes.propertyName}>
                        <b>Summary price</b>
                    </div>
                    <span>100000 USD</span>
                </div>
            </div>
            <div className={classes.bottomActions}>
                <div className={classes.removeEdit}>
                    <div className={classes.edit}>
                        <Link to={`/product/${id}`}>
                            <i className="far fa-edit"></i>
                        </Link>
                        
                    </div> 
                    <div className={classes.remove}>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;