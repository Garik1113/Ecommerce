import Slider from 'src/components/Slider';
import React from 'react';
import Carousel from 'src/components/Carousel';
import Banner from 'src/components/Banner';
import classes from './home.scss';
import { useHome } from 'src/talons/Home/useHome';

const Home:React.FC = () => {
    const { products } = useHome();
    console.log(products)
    return (
        <div>
            <Slider/>
            <div className={classes.banners}>
                <Banner bannerId="6056cabff23c773a38c338b4"/>
                <Banner bannerId="60570355b614513038714bc1"/>
            </div>
            <div className={classes.lastViews}>
                <h2 className={classes.salesTitle}>Best Sales</h2>
                <Carousel products={products}/>
            </div>
        </div>
    )
}


export default Home;