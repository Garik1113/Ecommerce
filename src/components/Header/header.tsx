import CartTrigger from 'components/Cart';
import Logo from 'components/Logo';
import SearchInput from 'components/Search';
import React, { useEffect, useState } from 'react';
import { useWindowSize, WindowSize } from '../../util/useWindowSize';
import MenuTrigger from '../Menu';
import classes from './header.scss';
import SearchTrigger from 'components/Search/searchTrigger';
import { Link } from 'react-router-dom';
import { useHeader } from '../../talons/Header/useHeader';

const Header:React.FC = () => {
    const windowSize:WindowSize = useWindowSize();
    const { innerWidth} = windowSize;
    const { categories } = useHeader();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(innerWidth < 700){
            setIsMobile(true);
        }else {
            setIsMobile(false);
        }
    }, [innerWidth])
    
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.logo}>
                    <Logo/>
                </div>
                <div className={`${isMobile ? classes.searchMobile : classes.search}`}>
                    {isMobile ? <SearchTrigger onClick={() => setIsSearchOpen(!isSearchOpen)}/> : <SearchInput/>}
                </div>
                <div className={classes.signin}>
                    <Link to="/signin" className={classes.signinLink}>
                        {isMobile ? <i className="fas fa-user"></i> : <span>Sign In</span> }
                    </Link>
                </div>
                <div className={classes.wishlist}>
                    <Link to="/wishlist">
                        {isMobile 
                            ?   <i className="fas fa-star"></i>
                            :   <span>Wishlist</span> 
                            }
                    </Link> 
                </div>
                <div className={classes.cart}>
                    <CartTrigger/>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.menu}>
                    <MenuTrigger/>
                </div>
                {!isMobile 
                ?  <div className={classes.categories}>
                        {
                            categories.map((cat, index) => (
                                <div className={classes.category} key={index}>
                                    <Link to={`/category/${cat._id}`}>
                                        <span>{cat.name}</span>
                                    </Link>
                                    
                                </div>
                            ))
                        }
                    </div>
                : null
                }
                { isSearchOpen && isMobile ? <div className={classes.searching}><SearchInput/></div> : null}
            </div>
        </div>
    )
}

export default Header