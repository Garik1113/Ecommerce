import Slider from 'src/components/Slider';
import React from 'react';
import Banner from 'src/components/Banner';
import classes from './home.scss';
import { useHome } from 'src/talons/Home/useHome';
import Gallery from 'src/components/Gallery';

const Home:React.FC = () => {
    const { products, discountedProducs } = useHome();

    return (
        <div className={classes.root}>
            <Slider/>
            <div className={classes.body}>
                <div className={classes.banners}>
                    <Banner bannerId="6092de73197629334653838e"/>
                    <Banner bannerId="6092def1ee214c33c32ab15d"/>
                </div>
                <div className={classes.newCollection}>
                    <div className={classes.newTitleField}>
                        <span className={classes.newTitle}>
                            Last Products
                        </span>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={products}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="6092def1ee214c33c32ab15d"/>
                        </div>
                    </div>
                </div>
                <div className={classes.sales}>
                    <div className={classes.newTitleField}>
                        <span className={classes.newTitle}>
                            Sales
                        </span>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={discountedProducs}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="6092de73197629334653838e"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;