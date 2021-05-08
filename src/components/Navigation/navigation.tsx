import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from 'src/talons/Navigation/useNavigation';
import CategoryTree from '../CategoryTree';
import NavHeader from './navHeader';
import classes from './navigation.scss';


const Navigation:React.FC = () => {
    const { 
        isActive, 
        categories,
        handleCloseDrawer,
        isSignidIn
    } = useNavigation();
    
    return (
        <div className={`${classes.root} ${isActive ? classes.root_open : null}`}>
            <header>
                <NavHeader/>
            </header>
            <section className={classes.categories}>
                <CategoryTree 
                    categories={categories}
                    handleCloseDrawer={handleCloseDrawer}
                />
            </section>
            <footer className={classes.footer}>
                {
                    isSignidIn
                    ?   <div className={classes.footerItem}>
                           <Link to="/account" onClick={() => handleCloseDrawer()}>
                                My Account
                            </Link>
                        </div>
                    :   <div>
                            <div className={classes.footerItem}>
                                <Link to="/signin" onClick={() => handleCloseDrawer()}>
                                    Sign In
                                </Link>
                            </div>
                            <div className={classes.footerItem}>
                                <Link to="/signup" onClick={() => handleCloseDrawer()}>
                                    Sign up
                                </Link>
                            </div>
                        </div>
                }
            </footer>
        </div>
    )
}

export default Navigation;