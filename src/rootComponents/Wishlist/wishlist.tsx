import React from 'react';
import classes from './wishlist.scss';
import Gallery from '../../components/Gallery';

const WIshlist:React.FC = () => {
    
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Favorites</h1>
            </div>
            <Gallery products={[]} rootClass={classes.gallery}/>
        </div>
        
    )
}

export default WIshlist;