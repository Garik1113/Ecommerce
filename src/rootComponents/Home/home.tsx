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
                    <Banner bannerId="60b383ea6929272368897544"/>
                    <Banner bannerId="60b383f06929272368897545"/>
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
                            <Banner bannerId="60b383f66929272368897546"/>
                        </div>
                    </div>
                </div>
                <div className={classes.sales}>
                    <div className={classes.newTitleField}>
                        <div className={classes.line}></div>
                        <span className={classes.newTitle}>
                            Զեղչված Ապրանքներ
                        </span>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.newBody}>
                        <div className={classes.list}>
                            <Gallery products={discountedProducs}/>
                        </div>
                        <div className={classes.banner}>
                            <Banner bannerId="60b383f06929272368897545"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;