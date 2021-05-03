import React from 'react';
import { IProduct } from 'src/interfaces/product';
import { useSearch } from 'src/talons/Search/useSearch';
import classes from './search.scss';
import SearchInput from './searchInput';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
    const { handleChange, results, setResults } = useSearch();

    return (
        <div className={classes.root}>
            <SearchInput handleChange={handleChange}/>
            {
                
                <div className={classes.results}>
                    {
                        results.map((e: IProduct, i: number) => (
                            <Link 
                                key={i} 
                                to={`/product/${e._id}`} 
                                className={classes.result}
                                onClick={() => setResults([])}
                            >
                                {e.name} 
                            </Link>
                        ))
                    }
                </div>
            }
            {results.length ? <div className={classes.overlay} onClick={() => setResults([])}></div> : null}
        </div>
    )
};

export default Search;