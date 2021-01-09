import React from 'react';
import { ConfigurableProduct } from 'src/store/types/product';
import Button from '../Button';
import Price from './price';
import classes from './productFullDetail.scss';
import ProductImageCarousel from './productImageCarousel';

export interface ProductProps {
    product: ConfigurableProduct 
}


const ProductFullDetail = ({ product }: ProductProps) => {
    const { title, gallery, price, options, description } = product;

    return (
        <div className={classes.root}>
            <section className={classes.carousel}>
                <ProductImageCarousel gallery={gallery}/>
            </section>
            <section className={classes.rightActions}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                </div>
                <hr/>
                <div className={classes.price}>
                    <Price value={price.value} currency={price.currency}/>
                </div>
                <div className={classes.description}>
                    <p>{description}</p>
                </div>
                {options.length 
                &&  <div className={classes.options}>
                        {options.map((opt) => (
                            <div key={opt.option_id} className={classes.option}>
                                <h4>{opt.title}</h4>
                                {opt.variant.map((variant) => (
                                    <div key={variant.id} className={classes.variant}>
                                        <input type="radio" name={opt.title}/>
                                        <span>{variant.title}</span>
                                    </div> 
                                ))}
                            </div>
                        ))}
                </div>  
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