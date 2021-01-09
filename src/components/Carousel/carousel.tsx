import React from 'react';
import { CarouselProvider, Slider, Slide,ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './carousel.scss'
import { img2 } from '../../talons/Product/useProduct';

const CarouselSlider:React.FC = () => {

    return (
        <CarouselProvider 
            naturalSlideWidth={800}
            naturalSlideHeight={500}
            totalSlides={3}
            visibleSlides={1}
            className={classes.carousel}
            infinite={true}
        >
            <Slider>
                <Slide index={1}>
                    <img src={img2} style={{width:"100%"}}/>
                </Slide>
                <Slide index={2}>
                    <img src={img2} style={{width:"100%"}}/>
                </Slide>
                <Slide index={3}>
                    <img src={img2} style={{width:"100%"}}/>
                </Slide>
            </Slider>
            <ButtonBack className={classes.arrowLeft}>
                <i className="fas fa-chevron-left"></i>
            </ButtonBack>
            <ButtonNext className={classes.arrowRight}>
                <i className="fas fa-chevron-right"></i>
            </ButtonNext>
        </CarouselProvider> 
    )
}

export default CarouselSlider;