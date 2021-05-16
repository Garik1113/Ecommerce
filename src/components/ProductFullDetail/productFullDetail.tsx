import React from 'react';
import { IProduct } from 'src/interfaces/product';
import { useProductFullDetail } from 'src/talons/ProductFullDetail/useProductFullDetail';
import Attributes from '../Attributes';
import Button from '../Button';
import ProductSlider from '../ProductSlider';
import Quantity from '../Qunatity';
import ReviewForm from '../ReviewForm';
import Reviews from '../Reviews';
import Price from './price';
import classes from './productFullDetail.scss';
import ProductImageCarousel from './productImageCarousel';
import Rating from 'react-star-ratings';
import Subscribe from '../Subscribe';

export interface ProductProps {
    product: IProduct 
}


const ProductFullDetail:React.FC<ProductProps> = ({ product }: ProductProps) => {
    const talonProps = useProductFullDetail({ product });
    const {
        name,
        images,
        configurableAttributes,
        quantity,
        handleIncrementQuantity,
        handleDecrementQuantity,
        handleAddProductToCart,
        isSignedIn,
        activeAction, 
        setActiveAction,
        currency,
        productSubscriptions
    } = talonProps;

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <section className={classes.carousel}>
                    <ProductImageCarousel gallery={images}/>
                    <div className={classes.actions}>
                        <div className={classes.actionHeader}>
                            <div 
                                className={classes.discriptionTitle}
                                onClick={() => setActiveAction("description")}
                            >
                                Description
                            </div>
                            <div
                                className={classes.discriptionTitle}
                                onClick={() => setActiveAction("review")}>
                                Reviews
                            </div>
                        </div>
                        {
                            activeAction == "description"
                            ?   <div className={classes.footerActions}>
                                    <div dangerouslySetInnerHTML={{__html: product.description}} className={classes.description}/>
                                </div>
                            :   isSignedIn 
                                ?   <Reviews 
                                        product={product}
                                    />
                                :   <span>Only logged in customers can see reviews for this product</span>
                        }
                    </div>
                </section>
                <section className={classes.rightActions}>
                    <div className={classes.title}>
                        <h2>{name}</h2>
                    </div>
                    <hr className={classes.line}/>
                    <div className={classes.rating}>
                        <Rating 
                            maxRating={6} 
                            rating={product.averageRating} 
                            starDimension="28px"
                            starSpacing="0px"
                            starRatedColor="#00ff50"
                            starHoverColor="#00ff50"
                            isSelectable={false}
                        />
                        <span>{product.averageRating} (5)</span>
                    </div>
                    <div className={classes.price}>
                        <Price product={product} currency={currency}/>
                    </div>
                    <Attributes 
                        attributes={configurableAttributes}
                    />
                    <Quantity 
                        quantity={quantity}
                        handleIncrementQuantity={handleIncrementQuantity}
                        handleDecrementQuantity={handleDecrementQuantity}
                    />
                    {
                        product.quantity < 1 && isSignedIn && productSubscriptions
                        ?   <div className={classes.subscribe}>
                                <span>Product is out of stock now.. you can subscribe and receive email about this product</span>
                                <Subscribe productId={product._id}/>
                            </div> 
                        :   <div className={classes.button}>
                                <Button 
                                    className={classes.button} 
                                    label="ADD TO CART" 
                                    priority="high" 
                                    onClick={handleAddProductToCart} 
                                    disabled={false}
                                />
                            </div>
                    }
                    {
                        !isSignedIn
                        ?   <div className={classes.button}>
                                <Button 
                                    className={classes.button} 
                                    label="ADD TO CART" 
                                    priority="high" 
                                    onClick={handleAddProductToCart} 
                                    disabled={false}
                                />
                            </div>
                        :   null
                    }
                    {
                        isSignedIn
                        ?   <div className={classes.reviews}>
                                <ReviewForm 
                                    product={product}
                                />
                            </div>
                        :   null
                    }
                </section>
            </div>
            <div className={classes.relatedProducts}>
                <div className={classes.relatedTitle}>Related Products</div>
                <ProductSlider categoryId={product.categories[0]}/>
            </div>
        </div>
    )
}

export default ProductFullDetail;