import React from 'react';
import classes from './carousel.scss';
import { CarouselProvider, Slider as PureSlider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IProduct } from 'src/interfaces/product';
import Item from '../Gallery/item';

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
                                <Item item={e}/>
                            </Slide>
                        ))
                    }
                    
                </PureSlider>
            </CarouselProvider> 
        </div>
    )
}

export default Carousel