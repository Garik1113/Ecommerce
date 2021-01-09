import React from 'react';
import classes from './searchInput.scss';

type Props = {
    onClick: any
}

const SearchTrigger:React.FC<Props> = (props: Props) => {
    const { onClick } = props;
    return (
        <div className={classes.searchTrigger} onClick={onClick}>
            <i className="fas fa-search"></i>  
        </div>
    )
}

export default SearchTrigger;