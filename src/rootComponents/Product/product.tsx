import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import ProductFullDetail from '../../components/ProductFullDetail';
import { useProduct } from '../../talons/Product/useProduct';

const Product:React.FC = () => {
    const params:any = useParams();
    const { id } = params;
    const { product } = useProduct({id});
    
    return (
        <Fragment>
            {
                product._id ? <ProductFullDetail product={product}/> : null
            }
            
        </Fragment>
        
    )
}

export default Product;