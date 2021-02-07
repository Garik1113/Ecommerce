import React from 'react';
import classes from './slider.scss';
import { CarouselProvider, Slider as PureSlider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

const Slider:React.FC = () => {
    const products: any = []
    return (
        <div className={classes.root}>
            <CarouselProvider 
                naturalSlideWidth={400}
                naturalSlideHeight={300}
                totalSlides={products.length}
                visibleSlides={4}
                className={classes.carousel}
                infinite={true}
            >
                <PureSlider>
                    {
                        products.map((e:any, i: any) => (
                            <Slide index={i} key={i} style={{textAlign: "center"}}>
                                <div>
                                    <Link to={`/product/${e.id}`}>
                                        <img src={e.main_image} style={{width: "100%", maxWidth: "400px", height: "auto"}}/>
                                    </Link> 
                                </div>
                                <div className={classes.title}>
                                   <Link to={`/product/${e.id}`}><span>{e.title}</span></Link> 
                                </div>
                            </Slide>
                        ))
                    }
                    
                </PureSlider>
            </CarouselProvider> 
        </div>
    )
}

export default Slider