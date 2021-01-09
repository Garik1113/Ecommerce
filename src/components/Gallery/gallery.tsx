import React from 'react';
import { Product } from 'src/store/types/product';
import classes from './gallery.scss';
import Item from './item';

type Props = {
    products: Product[],
    rootClass?: string
}

const Gallery:React.FC<Props> = (props: Props) => {
    const { products, rootClass } = props;
    
    return (
        <div className={`${rootClass ? rootClass : classes.root}`}>
            {
                products.map((product, index) => <Item key={index} item = {product}/>)
            }
        </div>
    )
};

export default Gallery;