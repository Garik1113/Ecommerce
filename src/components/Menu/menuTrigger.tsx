import React, { Dispatch, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppActions } from 'src/store/types/app';
import {toggleDrawer} from '../../store/actions/app/actions';
import classes from './menuTrigger.scss';


const MenuTrigger:React.FC = () => {
    const dispatch:Dispatch<AppActions> = useDispatch();

    const handleClick = useCallback(():void => 
        dispatch(toggleDrawer("MAIN_MENU")),
    [toggleDrawer, dispatch])

    return (
        <div className={classes.root}>
            <i className={`fas fa-bars ${classes.icon}`} onClick={handleClick}></i>
        </div>
    )
}

export default MenuTrigger;