import React, { Fragment } from 'react';
import ProductFullDetail from '../../components/ProductFullDetail';
import { useProduct } from '../../talons/Product/useProduct';

const Product:React.FC = () => {
    const { product } = useProduct();
    console.log("PROR", product)
    return (
        <Fragment>
            <ProductFullDetail product={product}/>
        </Fragment>
        
    )
}

export default Product;