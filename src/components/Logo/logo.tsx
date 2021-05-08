import React from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from 'src/config/defaults';
import { useConfig } from 'src/talons/Config/useConfig';
import { handleImageError } from 'src/util/handleImageError';
import classes from './logo.scss';


const Logo:React.FC = () => {
    const { getConfigValue } = useConfig();
    const logoSrc = getConfigValue("logo");

    return (
        <div>
            <Link to="/">
                <img onError={handleImageError} className={classes.logo} src={`${BACKEND_URL}/config/${logoSrc}`}/>
            </Link>
        </div>
    )
}


export default Logo;