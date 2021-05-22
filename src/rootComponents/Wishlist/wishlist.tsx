import React from 'react';
import classes from './wishlist.scss';
import Item from '../../components/Gallery/item';
import { useWishlist } from 'src/talons/Wishlist/useWishlist';
import { IProduct } from 'src/interfaces/product';

const WIshlist:React.FC = () => {
    const { items } = useWishlist();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Հավանած</h1>
            </div>
            <div className={classes.list}>
                {
                    items.map((item: IProduct) => (
                        <Item key={item._id} item={item}/> 
                    ))
                }
            </div>
        </div>
        
    )
}

export default WIshlist;