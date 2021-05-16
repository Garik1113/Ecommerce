import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useTabs } from 'src/talons/Account/useTabs';
import classes from './tabs.scss';


const Tabs:React.FC = () => {
    const { pathname } = useLocation();
    const { handleSignOut } = useTabs();

    return (
        <div className={classes.root}>
                <div className={`${classes.item} ${pathname == '/account' && classes.active}`}>
                    <Link to='/account' className={`${classes.link} ${pathname == '/account' && classes.activeLink}`}>
                        Account
                    </Link>
                </div>
                <div className={`${classes.item} ${pathname == '/account/orders' && classes.active}`}>
                    <Link to='/account/orders' className={`${classes.link} ${pathname == '/account/orders' && classes.activeLink}`}>
                        Orders
                    </Link>
                </div>
                <div className={`${classes.item} ${pathname == '/account/addresses' && classes.active}`}>
                    <Link to='/account/addresses' className={`${classes.link} ${pathname == '/account/addresses' && classes.activeLink}`}>
                        Addresses
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/' className={classes.link} onClick={handleSignOut}>
                        Sign Out
                    </Link>
                </div>
        </div>
    )
}

export default Tabs;