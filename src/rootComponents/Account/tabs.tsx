import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import classes from './tabs.scss';


const Tabs:React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className={classes.root}>
            <div className={classes.body}>
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
                <div className={`${classes.item} ${pathname == '/account/billingAddress' && classes.active}`}>
                    <Link to='/account/billingAddress' className={`${classes.link} ${pathname == '/account/billingAddress' && classes.activeLink}`}>
                        Billing Address
                    </Link>
                </div>
                <div className={`${classes.item} ${pathname == '/account/shippingAddress' && classes.active}`}>
                    <Link to='/account/shippingAddress' className={`${classes.link} ${pathname == '/account/shippingAddress' && classes.activeLink}`}>
                        Shipping Address
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tabs;