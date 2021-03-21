import React from 'react';
import classes from './carousel.scss';
import { CarouselProvider, Slider as PureSlider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import { IProduct } from 'src/interfaces/product';
import { handleImageError } from 'src/util/handleImageError';
import { IMAGE_BASE_URL } from 'src/config/defaults';

type Props = {
    products: IProduct[]
}

const Carousel:React.FC<Props> = (props: Props) => {
    const { products } = props;

    return (
        <div className={classes.root}>
            <CarouselProvider 
                naturalSlideWidth={500}
                naturalSlideHeight={400}
                totalSlides={products.length}
                visibleSlides={4}
                className={classes.carousel}
                infinite={true}
            >
                <PureSlider>
                    {
                        products.map((e:IProduct, i: any) => (
                            <Slide index={i} key={i} style={{textAlign: "center"}}>
                                <div className={classes.slide}>
                                    <div>
                                        <Link to={`/product/${e._id}`}>
                                            <img 
                                                onError={handleImageError} 
                                                src={`${IMAGE_BASE_URL}/products/${e.images[0].small_image}`}
                                                style={{width: "100%", maxWidth: "400px", height: "auto"}}
                                                className={classes.image}
                                            />
                                        </Link> 
                                    </div>
                                    <div className={classes.title}>
                                    <Link to={`/product/${e._id}`}><span>{e.name}</span></Link> 
                                    </div>
                                </div>
                            </Slide>
                        ))
                    }
                    
                </PureSlider>
            </CarouselProvider> 
        </div>
    )
}

export default Carousel