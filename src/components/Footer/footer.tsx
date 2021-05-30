import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from 'src/talons/Config/useConfig';
import classes from './footer.scss';

const Footer:React.FC = () => {
    const { getConfigValue } = useConfig();
    const storeEmail = getConfigValue("storeEmail");
    const storePhone = getConfigValue("storePhone");
    const socialSites = getConfigValue("socialSites");

    return (
        <footer className={classes.footer}>
           <div className={classes.sittings}>
                <div className={classes.field}>
                    <div className={classes.fielTitle}>
                        ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
                    </div>
                    <div className={classes.fieldValue}>
                        <Link 
                            className={classes.linkFieldValue}
                            to="/faqs"
                        >
                            Հաճախ տրվող հարցեր
                        </Link> 
                    </div>
                    <div className={classes.fieldValue}>
                        Առաքում
                    </div>
                    <div className={classes.fieldValue}>
                        Նվեր քարտ
                    </div>
                    <div className={classes.fieldValue}>
                        Դրույթներ և Պայմաններ
                    </div>
                </div>
                <div className={classes.field}>
                    <div className={classes.fielTitle}>
                        ԻՄ ԷՋԸ
                    </div>
                    <Link to="/signup" className={classes.linkFieldValue}>
                        Գրանցվել
                    </Link>
                    <Link to="/signin" className={classes.linkFieldValue}>
                        Մուտք Գործել
                    </Link>
                    <Link to="/account/orders" className={classes.linkFieldValue}>
                        Իմ Պատվերները
                    </Link>
                </div>
                <div className={classes.field}>
                    <div className={classes.fielTitle}>
                        ԿԱՊ ՄԵԶ ՀԵՏ
                    </div>
                    <div className={classes.fieldValue}>
                        <i className="fas fa-envelope"></i>{storeEmail}
                    </div>
                    <div className={classes.fieldValue}>
                        <i className="fas fa-phone"></i>{storePhone}
                    </div>
                    <div className={classes.socialList}>
                        {
                            socialSites && socialSites.length 
                            ?     socialSites.map((e:any, i: number) => {
                                    if (e.name.includes("book")) {
                                        return (
                                            <a href={e.url} target="_blank" key={i}>
                                                <img src="/fb.png" key={i} className={classes.image}/>
                                            </a>
                                        )
                                    } else if (e.name.includes("sta")) {
                                        return (
                                            <a href={e.url} key={i} target="_blank">
                                                <img src="/insta.png" key={i} className={classes.image}/>
                                            </a>
                                        )
                                    } else if (e.name.includes("telegram")) {
                                        return (
                                            <a href={e.url} key={i} target="_blank">
                                                <img src="/telegram.png" key={i} className={classes.image}/>
                                            </a>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            :   null
                        }
                    </div>
                </div>
           </div>
           <div className={classes.bottom}>
                ©2021 Բոլոր Իրավունքները Պաշտպանված են
           </div>
        </footer>
    )
}


export default Footer;