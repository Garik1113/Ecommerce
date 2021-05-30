import React, { useEffect, useState } from 'react';
import { useProductSlider } from 'src/talons/ProductSlider/useProductSlider';
import classes from './productSlider.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { IProduct } from 'src/interfaces/product';
import Item from '../Gallery/item';
import { useWindowSize } from 'src/util/useWindowSize';

type Props = {
    categoryId: string,
    excludedProductId?: string
}

const ProductSlider:React.FC<Props> = (props: Props) => {
    const { categoryId, excludedProductId = "" } = props;
    const { innerWidth } = useWindowSize();
    const [visibleItems, setVisibleItems] = useState(4);
    useEffect(() => {
        if (innerWidth > 1200) {
            setVisibleItems(4)
        }
        if(innerWidth < 1100) {
            setVisibleItems(3)
        }
        if(innerWidth < 800) {
            setVisibleItems(2)
        }
        if(innerWidth < 500) {
            setVisibleItems(1)
        }
    }, [innerWidth]);
    
    const { products } = useProductSlider({categoryId});
    if (!products.length) {
        return null
    }

    if (products.length < 5) {
        return (
            <div className={classes.list}>
                {
                    products.filter(e => e._id !== excludedProductId).map((e: IProduct, i: number) => (
                        <Item item={e} key={i}/>
                    )) 
                }
            </div>
        )
    }
    
    return (
        <CarouselProvider
            totalSlides={products.filter(e => e._id !== excludedProductId).length}
            naturalSlideWidth={300}
            naturalSlideHeight={400}
            infinite={true}
            visibleSlides={visibleItems}
            className={classes.slider}
        >
            <ButtonBack className={classes.buttonBack}>
                <i className="fas fa-chevron-left"></i>
            </ButtonBack>
            <Slider>
                {
                    products.filter(e => e._id !== excludedProductId).map((e: IProduct, i: number) => (
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