import React from 'react';
import classes from './mask.scss';
import { useMask } from '../../talons/Mask/useMask';


const Mask:React.FC= () => {
    const { handleClick, toggleCart, toggleDrawer } = useMask()
    return (
        <div className={
               `${classes.root} 
                ${toggleCart ? classes.root_hidden : toggleDrawer 
                ? classes.root_active : ""}`
            } 
            onClick={handleClick}
        ></div>
    )
}


export default Mask