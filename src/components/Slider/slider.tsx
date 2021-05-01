import React from 'react';
import { CarouselProvider, Slider as PureSlider, Slide,ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './slider.scss'
import { useSlider } from 'src/talons/Slider/useSlider';
import { BACKEND_URL, IMAGE_BASE_URL } from 'src/config/defaults';

const Slider:React.FC = () => {
    const { slider } = useSlider();
    if (!slider.slides) {
        return null
    } 

    return (
            <CarouselProvider 
                naturalSlideWidth={800}
                naturalSlideHeight={400}
                totalSlides={3}
                visibleSlides={1}
                className={classes.carousel}
                infinite={true}
            >
                <PureSlider>
                    {
                        slider.slides.map((slide: any) => {
                            return (
                                <Slide index={slide._id} key={slide._id}>
                                    <img src={`${BACKEND_URL}/images/slider/${slide.image}`} className={classes.image}/>
                                </Slide>
                                
                            )
                        })
                    }
                </PureSlider>
                <ButtonBack className={classes.arrowLeft}>
                    <i className="fas fa-chevron-left"></i>
                </ButtonBack>
                <ButtonNext className={classes.arrowRight}>
                    <i className="fas fa-chevron-right"></i>
                </ButtonNext>
            </CarouselProvider> 
        )
}

export default Slider;