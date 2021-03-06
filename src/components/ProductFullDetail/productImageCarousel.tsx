import React from 'react'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import classes from './productImageCarousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IMAGE_BASE_URL } from 'src/config/defaults';
import { handleImageError } from 'src/util/handleImageError';

interface Props {
    gallery: string[]
}


const ProductImageCarousel:React.FC<Props> = ({gallery}: Props) => {

    return (
        <div className={classes.root}>
           <CarouselProvider 
                naturalSlideWidth={800}
                naturalSlideHeight={600}
                totalSlides={gallery.length}
                visibleSlides={1}
                className={classes.carousel}
            >
                <Slider>
                    {
                        gallery.map((image, index) => {
                            return (
                                <Slide index={index} key={index}>
                                    <img onError={handleImageError} src={`${IMAGE_BASE_URL}/${image}`} style={{width: "100%"}}/>
                                </Slide>
                            )
                        })
                    }
                </Slider>
                <div className={classes.thumbnails}>
                    {/* {
                        gallery.map((image, index) => {
                            return (
                                <Dot slide={index} key={index} className={classes.dot}>
                                    <img src={image.thumbnail_path} className={classes.thumbnailImg}/>
                                </Dot>
                            )
                        })
                    } */}
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