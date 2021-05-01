import React from 'react'
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './productImageCarousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BACKEND_URL } from 'src/config/defaults';
import { handleImageError } from 'src/util/handleImageError';
import { Image } from 'src/store/types/product';
import { Icon } from 'semantic-ui-react';

interface Props {
    gallery: Image[]
}

const ProductImageCarousel:React.FC<Props> = ({gallery}: Props) => {

    return (
        <div className={classes.root}>
           <CarouselProvider 
                naturalSlideWidth={800}
                naturalSlideHeight={500}
                totalSlides={gallery.length}
                visibleSlides={1}
                className={classes.carousel}
            >
                <Slider>
                    {
                        gallery.map((image, index) => {
                            return (
                                <Slide index={index} key={index}>
                                    <img onError={handleImageError} src={`${BACKEND_URL}/images/product/${image.small_image}`} style={{width: "100%"}}/>
                                </Slide>
                            )
                        })
                    }
                </Slider>
                <div className={classes.thumbnails}>
                    <ButtonBack className={classes.arrows}>
                        <Icon name="arrow left"/>
                    </ButtonBack>
                    {
                        gallery.map((image, index) => {
                            return (
                                <Dot slide={index} key={index} className={classes.dot}>
                                    <img src={`${BACKEND_URL}/images/product/${image.small_image}`} className={classes.thumbnailImg}/>
                                </Dot>
                            )
                        })
                    }
                    <ButtonNext className={classes.arrows}>
                        <Icon name="arrow right"/>
                    </ButtonNext>
                </div>
            </CarouselProvider> 
        </div>
        
    )
}

export default ProductImageCarousel;