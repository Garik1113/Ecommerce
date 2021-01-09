import { RouterAction } from 'connected-react-router';
import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import ProductFullDetail from '../../components/ProductFullDetail';
import { useProduct } from '../../talons/Product/useProduct';

export type ProductParams = {
    id: string
}

const Product:React.FC = () => {
    const params:ProductParams = useParams();
    const { id } = params;
    
    const { product } = useProduct({id});
    
    return (
        <Fragment>
            <ProductFullDetail product={product}/>
        </Fragment>
        
    )
}

export default Product;