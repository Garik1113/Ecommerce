import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import classes from './item.scss';
import { useItem } from '../../talons/Gallery/useItem';
import { handleImageError } from 'src/util/handleImageError';
import { IProduct } from 'src/interfaces/product';

interface Props {
    item: IProduct
}

const Item:React.FC<Props> = ({item}: Props) => {
    const { 
        handleAddToWishlist, 
        name, 
        imageSrc,
        currency,
        value
    } = useItem({item});

    return (
        <div className={classes.root}>
            <Link to={`/product/${item._id}`}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={imageSrc} className={classes.itemImage}/>
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
            </div>    
        </div>
    )
} 

export default Item;