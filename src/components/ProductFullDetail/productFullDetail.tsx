import React from 'react';
import { Attribute, AttributeValue, TProduct } from 'src/store/types/product';
import Button from '../Button';
import Price from './price';
import classes from './productFullDetail.scss';
import ProductImageCarousel from './productImageCarousel';

export interface ProductProps {
    product: TProduct 
}


const ProductFullDetail = ({ product }: ProductProps) => {
    const { name, price, images, attributes, metaDescription } = product;

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
                {attributes.map((attr: Attribute) => {
                    return (
                        <div key={attr.attrbuteId}>
                            <span>{attr.label}</span>
                            {
                                attr.values.map((value: AttributeValue) => {
                                    return (
                                        <div key={value.valueId}>
                                            <span>{value.label}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
                }
                <div className={classes.quantity}>
                    <input type="number" className={classes.quantityInput} min={1} defaultValue={1}/>
                </div>
                <div className={classes.button}>
                    <Button className={classes.button} label="ADD TO CART" priority="high" onClick={() => {}} disabled={false}/>
                </div>
            </section>
        </div>
    )
}

export default ProductFullDetail;