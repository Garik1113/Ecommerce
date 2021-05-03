import { fromPairs } from 'lodash';
import React from 'react';
import { useProductSlider } from 'src/talons/ProductSlider/useProductSlider';
import classes from './productSlider.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { IProduct } from 'src/interfaces/product';
import Item from '../Gallery/item';

type Props = {
    categoryId: string
}

const ProductSlider:React.FC<Props> = (props: Props) => {
    const { categoryId } = props;
    const { products } = useProductSlider({categoryId});
    if (!products.length) {
        return null
    }

    if (products.length < 5) {
        return (
            <div className={classes.list}>
                {
                    products.map((e: IProduct, i: number) => (
                        <Item item={e} key={i}/>
                    )) 
                }
            </div>
        )
    } 

    return (
        <CarouselProvider
            totalSlides={products.length}
            naturalSlideWidth={300}
            naturalSlideHeight={400}
            infinite={true}
            visibleSlides={5}
            className={classes.slider}
        >
            <ButtonBack className={classes.buttonBack}>
                <i className="fas fa-chevron-left"></i>
            </ButtonBack>
            <Slider>
                {
                    products.map((e: IProduct, i: number) => (
                        <Slide index={i} key={i}>
                            <Item item={e}/>
                        </Slide>
                    ))
                }
            </Slider>
            <ButtonNext className={classes.buttonNext}>
                <i className="fas fa-chevron-right"></i>
            </ButtonNext>
        </CarouselProvider>
        
    )
}

export default ProductSlider;