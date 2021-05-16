import React from 'react';
import { useDispatch } from 'react-redux';
import { useConfig } from 'src/talons/Config/useConfig';
import { toggleDrawer } from '../../store/actions/app/actions';
import classes from './navHeader.scss';


const NavHeader:React.FC = () => {
    const dispatch = useDispatch();
    const { getConfigValue } = useConfig();
    const storePhone = getConfigValue("storePhone");

    return (
        <div className={classes.root}>
            <div className={classes.close}>
                <i className={`fas fa-window-close ${classes.closeIcon}`} onClick={() => dispatch(toggleDrawer(""))}></i>
            </div>
            <div className={classes.phone}>
                <a href={`tel: ${storePhone}`}>
                    <i className="fas fa-phone"></i>
                </a>
            </div>
        </div>
    )
}

export default NavHeader;