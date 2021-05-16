import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import ProductFullDetail from '../../components/ProductFullDetail';
import { useProduct } from '../../talons/Product/useProduct';

const Product:React.FC = () => {
    const params:any = useParams();
    const { id } = params;
    const { product } = useProduct({id});
    if (!product || !product._id) {
        return null
    } else {
        return (
            <Fragment>
                <ProductFullDetail product={product}/>
            </Fragment>
        )
    }
    
    
}

export default Product;