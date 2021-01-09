import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../../store/actions/app/actions';
import classes from './navHeader.scss';


const NavHeader:React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div className={classes.root}>
            <div className={classes.close}>
                <i className={`fas fa-window-close ${classes.closeIcon}`} onClick={() => dispatch(toggleDrawer(""))}></i>
            </div>
            <div className={classes.title}>
                <span>Title</span>
            </div>
            <div className={classes.phone}>
                <i className="fas fa-phone"></i>
            </div>
        </div>
    )
}

export default NavHeader;