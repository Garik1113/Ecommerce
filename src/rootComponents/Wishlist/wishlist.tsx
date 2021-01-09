import React from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import classes from './wishlist.scss';
import Gallery from '../../components/Gallery';

const WIshlist:React.FC = () => {
    const { products } = useCategoryContent();
    
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Favorites</h1>
            </div>
            <Gallery products={products} rootClass={classes.gallery}/>
        </div>
        
    )
}

export default WIshlist;