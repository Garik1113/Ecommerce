import React from 'react'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import classes from './productImageCarousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from 'src/store/types/product';

interface Props {
    gallery: Image[]
}


const ProductImageCarousel:React.FC<Props> = ({gallery}: Props) => {

    return (
        <div className={classes.root}>
           <CarouselProvider 
                naturalSlideWidth={800}
                naturalSlideHeight={600}
                totalSlides={3}
                visibleSlides={1}
                className={classes.carousel}
            >
                <Slider>
                    {
                        gallery.map((image, index) => {
                            return (
                                <Slide index={index} key={index}>
                                    <img src={image.image_path} style={{width: "100%"}}/>
                                </Slide>
                            )
                        })
                    }
                </Slider>
                <div className={classes.thumbnails}>
                    {
                        gallery.map((image, index) => {
                            return (
                                <Dot slide={index} key={index} className={classes.dot}>
                                    <img src={image.thumbnail_path} className={classes.thumbnailImg}/>
                                </Dot>
                            )
                        })
                    }
                </div>
                    
            </CarouselProvider> 
        </div>
        
    )
}

export default ProductImageCarousel

{/* <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 1</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 2</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 3</div>
      </Carousel> */}