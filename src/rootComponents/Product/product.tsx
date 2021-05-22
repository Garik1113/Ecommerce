import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import Meta from 'src/components/Head/meta';
import Title from 'src/components/Head/title';
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
                <Title title={product.pageTitle}/>
                <Meta metaDescription={product.metaDescription}/>
                <ProductFullDetail product={product}/>
            </Fragment>
        )
    }
    
    
}

export default Product;