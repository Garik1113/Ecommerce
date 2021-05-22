import CartTrigger from 'src/components/MiniCart/cartTrigger';
import Logo from 'components/Logo';
import SearchInput from 'components/Search';
import React from 'react';
import MenuTrigger from '../Menu';
import classes from './header.scss';
import SearchTrigger from 'components/Search/searchTrigger';
import { Link } from 'react-router-dom';
import { useHeader } from '../../talons/Header/useHeader';
import AuthActions from '../AuthActions';
import { ICategory } from 'src/interfaces/category';

type Props = {
    categories: ICategory[], 
    isMobile: boolean,
    totalQty: number
}

const Header:React.FC<Props> = (props: Props) => {
    const { 
        setIsSearchOpen, 
        isSearchOpen,
    } = useHeader();
    const { 
        categories,
        isMobile, 
        totalQty
    } = props

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
                    <AuthActions isMobile={isMobile}/>
                </div>
                <div className={classes.wishlist}>
                    <Link to="/wishlist">
                        {isMobile 
                            ?   <i className="fas fa-star"></i>
                            :   <span>Նախընտրելիներ</span> 
                            }
                    </Link> 
                </div>
                <div className={classes.cart}>
                    <CartTrigger totalQty={totalQty}/>
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
                                    <Link to={`/category/${cat._id}?name=${cat.name}`}>
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