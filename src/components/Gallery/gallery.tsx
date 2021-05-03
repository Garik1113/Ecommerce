import React from 'react';
import { IProduct } from 'src/interfaces/product';
import classes from './gallery.scss';
import Item from './item';

type Props = {
    products: IProduct[],
    rootClass?: string
}

const Gallery:React.FC<Props> = (props: Props) => {
    const { products, rootClass } = props;
    
    return (
        <div className={`${rootClass ? rootClass : classes.root}`}>
            {
                products.map((product, index) => <Item rootClass={rootClass} key={index} item = {product}/>)
            }
        </div>
    )
};

export default Gallery;