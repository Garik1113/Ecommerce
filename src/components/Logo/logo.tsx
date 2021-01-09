import React from 'react';
import { Link } from 'react-router-dom';
import classes from './logo.scss';


const Logo:React.FC = () => {
    return (
        <div>
            <Link to="/">
                <i className={`fas fa-warehouse ${classes.logo}`}></i>
            </Link>
        </div>
    )
}


export default Logo;