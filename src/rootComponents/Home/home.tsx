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
                    <Banner bannerId="6056cabff23c773a38c338b4"/>
                    <Banner bannerId="60570355b614513038714bc1"/>
                </div>
                <div className={classes.newCollection}>
                    <div className={classes.newTitleField}>
                        <span className={classes.newTitle}>
                            New Collection
                        </span>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={products}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="605ee69d882bc407bc030708"/>
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
                            <Banner bannerId="60600977d1ed3b1c6c0c9d24"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;