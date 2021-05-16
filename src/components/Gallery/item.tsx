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

const Item:React.FC<Props> = ({item, rootClass}: Props) => {
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
        <div className={`${classes.root} ${rootClass && classes.flexRoot}`}>
            <Link to={`/product/${item._id}`}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={imageSrc} className={classes.itemImage}/>
                </div>        
            </Link>
            <div title={`${inWishList ? "Remove from Wishlist" : "Add to Wishlist"}`} className={`${classes.heart} ${inWishList ? classes.red : null}`} onClick={() =>  handleAddToWishlist(item._id || "")}>
                <i className="fas fa-heart"></i>
            </div>
            <div className={classes.actions}>
                <div className={`${rootClass && classes.actionFlex}`}>
                    <Link to={`/product/${item._id}`}>
                        <div className={`${classes.title} ${rootClass && classes.flexTitle}`}>
                            <span>{name}</span>
                        </div>  
                    </Link>
                    <div className={`${classes.itemFooter} ${rootClass && classes.flexFooter}`}>
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
                {
                    rootClass 
                    ?   <div className={classes.description} dangerouslySetInnerHTML={{__html: item.description}}></div>
                    :   null
                }
            </div>
              
        </div>
    )
} 

export default Item;