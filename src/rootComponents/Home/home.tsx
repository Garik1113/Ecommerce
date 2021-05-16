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
                    <Banner bannerId="6097c893a542162c589d27d5"/>
                    <Banner bannerId="6097c92aa542162c589d27d6"/>
                </div>
                <div className={classes.newCollection}>
                    <div className={classes.newTitleField}>
                        <span className={classes.newTitle}>
                            Նոր Տեսականի
                        </span>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={products}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="6097c934a542162c589d27d7"/>
                        </div>
                    </div>
                </div>
                <div className={classes.sales}>
                    <div className={classes.newTitleField}>
                        <span className={classes.newTitle}>
                            Զեղջված Ապրանքներ
                        </span>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={discountedProducs}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="6097c93da542162c589d27d8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;