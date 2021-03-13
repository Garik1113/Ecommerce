import React from 'react';
import { TProduct } from 'src/store/types/product';
import Button from '../Button';
import { Link } from 'react-router-dom';
import classes from './item.scss';
import { useItem } from '../../talons/Gallery/useItem';
import { IMAGE_BASE_URL } from 'src/config/defaults';
import { handleImageError } from 'src/util/handleImageError';

interface Props {
    item: TProduct
}


const Item:React.FC<Props> = ({item}: Props) => {
    const {price, images, name } = item;
    const { currency, value } = price;
    const { handleAddToWishlist } = useItem();

    return (
        <div className={classes.root}>
            <Link to={`/product/${item._id}`}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={`${IMAGE_BASE_URL}/products/${images[0].small_image}`} className={classes.itemImage}/>
                </div>        
            </Link>
            <div className={classes.heart} onClick={() =>  handleAddToWishlist(item._id || "")}>
                <i className="fas fa-heart"></i>
            </div>
            <Link to={`/product/${item._id}`}>
                <div className={classes.title}>
                    <span>{name}</span>
                </div>  
            </Link>
            <div className={classes.itemFooter}>
                <div className={classes.price}>
                    <span>
                        {value}
                        {currency}
                    </span>
                </div>
                <div className={classes.button}>
                    <Button label="ADD TO CART" priority="high" onClick={() => {}}/>
                </div>     
            </div>    
        </div>
    )
} 

export default Item;