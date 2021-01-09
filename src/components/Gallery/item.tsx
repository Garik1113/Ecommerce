import React from 'react';
import { Product } from 'src/store/types/product';
import Button from '../Button';
import { Link } from 'react-router-dom';
import classes from './item.scss';
import { useItem } from '../../talons/Gallery/useItem';

interface Props {
    item: Product
}


const Item:React.FC<Props> = ({item}: Props) => {
    const { main_image, title, price } = item;
    const { currency, value } = price;
    const { handleAddToWishlist } = useItem();

    return (
        <div className={classes.root}>
            <Link to={`/product/${item.id}`}>
                <div className={classes.image}>
                    <img src={main_image} className={classes.itemImage}/>
                </div>        
            </Link>
            <div className={classes.heart} onClick={() =>  handleAddToWishlist(item.id)}>
                <i className="fas fa-heart"></i>
            </div>
            <Link to={`/product/${item.id}`}>
                <div className={classes.title}>
                    <span>{title}</span>
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