import React from 'react';
import classes from './searchInput.scss'

const SearchTrigger:React.FC = () => {
    return (
        <div className={classes.root}>
            <span className={classes.icon}>
              <i className="fas fa-search"></i>  
            </span>
            
            <input type="text" placeholder="Search" className={classes.input}/>
        </div>
    )
}

export default SearchTrigger;