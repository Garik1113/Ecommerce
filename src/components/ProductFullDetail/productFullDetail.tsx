import React from 'react';
import { IProduct } from 'src/interfaces/product';
import { useProductFullDetail } from 'src/talons/ProductFullDetail/useProductFullDetail';
import Attributes from '../Attributes';
import Button from '../Button';
import Quantity from '../Qunatity';
import ReviewForm from '../ReviewForm';
import Reviews from '../Reviews';
import Price from './price';
import classes from './productFullDetail.scss';
import ProductImageCarousel from './productImageCarousel';

export interface ProductProps {
    product: IProduct 
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
        handleAddProductToCart,
        isSignedIn,
        isSubmittingReview, 
        setIsSubmittingReview
    } = talonProps;

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <section className={classes.carousel}>
                    <ProductImageCarousel gallery={images}/>
                </section>
                <section className={classes.rightActions}>
                    <div className={classes.title}>
                        <h2>{name}</h2>
                    </div>
                    <hr/>
                    <div className={classes.price}>
                        <Price price={product.price}/>
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
                    <div className={classes.reviews}>
                        <div>
                            <h3>Reviews</h3>
                        </div>
                        {
                            isSignedIn
                            ?   <Reviews 
                                    product={product}
                                    isSubmittingReview={isSubmittingReview}
                                />
                            :   <div>
                                    <span>Only logged in customers can see reviews for this product</span>
                                </div>
                        }  
                    </div>
                </section>
            </div>
            <div className={classes.footerActions}>
                <div dangerouslySetInnerHTML={{__html: product.description}}/>
                {
                    isSignedIn
                    ?   <div className={classes.reviews}>
                            <ReviewForm 
                                product={product}
                                isSubmittingReview={isSubmittingReview}
                                setIsSubmittingReview={setIsSubmittingReview}
                            />
                        </div>
                    :   null
                }
            </div>
        </div>
    )
}

export default ProductFullDetail;