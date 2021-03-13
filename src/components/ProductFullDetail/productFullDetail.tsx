import React from 'react';
import { TProduct } from 'src/store/types/product';
import { useProductFullDetail } from 'src/talons/ProductFullDetail/useProductFullDetail';
import Attributes from '../Attributes';
import Button from '../Button';
import Quantity from '../Qunatity';
import Price from './price';
import classes from './productFullDetail.scss';
import ProductImageCarousel from './productImageCarousel';

export interface ProductProps {
    product: TProduct 
}


const ProductFullDetail:React.FC<ProductProps> = ({ product }: ProductProps) => {
    const talonProps = useProductFullDetail({ product });
    const {
        name,
        images,
        attributes,
        price,
        metaDescription,
        optionSelections,
        handleChangeOptionSelections,
        quantity,
        handleIncrementQuantity,
        handleDecrementQuantity,
        handleAddProductToCart
    } = talonProps;

    return (
        <div className={classes.root}>
            <section className={classes.carousel}>
                <ProductImageCarousel gallery={images}/>
            </section>
            <section className={classes.rightActions}>
                <div className={classes.title}>
                    <h2>{name}</h2>
                </div>
                <hr/>
                <div className={classes.price}>
                    <Price value={price.value} currency={price.currency}/>
                </div>
                <div className={classes.description}>
                    <p>{metaDescription}</p>
                </div>
                <Attributes 
                    attributes={attributes}
                    optionSelections={optionSelections}
                    handleChangeOptionSelections={handleChangeOptionSelections}
                />
                <Quantity 
                    quantity={quantity}
                    handleIncrementQuantity={handleIncrementQuantity}
                    handleDecrementQuantity={handleDecrementQuantity}
                />
                <div className={classes.button}>
                    <Button 
                        className={classes.button} 
                        label="ADD TO CART" 
                        priority="high" 
                        onClick={handleAddProductToCart} 
                        disabled={false}
                    />
                </div>
            </section>
        </div>
    )
}

export default ProductFullDetail;