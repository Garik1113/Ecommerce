import Carousel from 'components/Carousel';
import React from 'react';
import Slider from '../../components/Slider';
import Banner from '../../components/Banner';

const Home:React.FC = () => {
    return (
        <div>
            <Carousel/>
            <Banner/>
            <Slider/>
        </div>
    )
}


export default Home;