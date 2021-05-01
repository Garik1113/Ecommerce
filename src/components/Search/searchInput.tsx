import React from 'react';
import classes from './searchInput.scss'

type Props = {
    handleChange: any
}

const SearchInput:React.FC<Props> = (props: Props) => {
    const { handleChange } = props;

    return (
        <div className={classes.root}>
            <span className={classes.icon}>
                <i className="fas fa-search"></i>  
            </span>
            <input 
                type="text" 
                placeholder="Search" 
                className={classes.input} 
                onChange={(e:any) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchInput;