import Slider from 'src/components/Slider';
import React from 'react';
import Banner from 'src/components/Banner';
import classes from './home.scss';
import { useHome } from 'src/talons/Home/useHome';
import Gallery from 'src/components/Gallery';
import Title from 'src/components/Head/title';

const Home:React.FC = () => {
    const { products, discountedProducs } = useHome();

    return (
        <div className={classes.root}>
            <Title title={"G-SHOP"}/>
            <Slider/>
            <div className={classes.body}>
                <div className={classes.banners}>
                    <Banner bannerId="60a13543d3628d1129b07ca4"/>
                    <Banner bannerId="60a1354cd3628d1129b07ca5"/>
                </div>
                <div className={classes.newCollection}>
                    <div className={classes.newTitleField}>
                        <div className={classes.line}></div>
                        <span className={classes.newTitle}>
                            Նոր Տեսականի
                        </span>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={products}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="60a13557d3628d1129b07ca6"/>
                        </div>
                    </div>
                </div>
                <div className={classes.sales}>
                    <div className={classes.newTitleField}>
                        <div className={classes.line}></div>
                        <span className={classes.newTitle}>
                            Զեղջված Ապրանքներ
                        </span>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={discountedProducs}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="60a13560d3628d1129b07ca7"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;