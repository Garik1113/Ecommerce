import React from 'react';
import { Link } from 'react-router-dom';
import classes from './item.scss';
import { useItem } from '../../talons/Gallery/useItem';
import { handleImageError } from 'src/util/handleImageError';
import { IProduct } from 'src/interfaces/product';

interface Props {
    item: IProduct,
    rootClass?: any
}

const Item:React.FC<Props> = ({item}: Props) => {
    const { 
        handleAddToWishlist, 
        name, 
        imageSrc,
        price,
        discountedPrice,
        inWishList,
        currency
    } = useItem({item});

    return (
        <div className={classes.root}>
            <Link to={`/product/${item._id}`}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={imageSrc} className={classes.itemImage}/>
                </div>        
            </Link>
            <div className={`${classes.heart} ${inWishList ? classes.red : null}`} onClick={() =>  handleAddToWishlist(item._id || "")}>
                <i className="fas fa-heart"></i>
            </div>
            <Link to={`/product/${item._id}`}>
                <div className={classes.title}>
                    <span>{name}</span>
                </div>  
            </Link>
            <div className={classes.itemFooter}>
                <div className={classes.priceField}>
                    {
                        discountedPrice
                        ?   <div className={classes.discountedPriceField}>
                                <span className={classes.newPrice}>{discountedPrice} {currency.name}</span>
                                <span className={classes.oldPrice}>{price} {currency.name}</span>
                            </div>
                        :   <div className={classes.price}>
                                <span className={classes.newPrice}>{price} {currency.name}</span>
                            </div>
                    }
                </div>
            </div>    
        </div>
    )
} 

export default Item;