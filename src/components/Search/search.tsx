import React from 'react';
import { IProduct } from 'src/interfaces/product';
import { useSearch } from 'src/talons/Search/useSearch';
import classes from './search.scss';
import SearchInput from './searchInput';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from 'src/config/defaults';
import get from 'lodash/get';


const Search: React.FC = () => {
    const { handleChange, results, setResults, currency } = useSearch();

    return (
        <div className={classes.root}>
            <SearchInput handleChange={handleChange}/>
            {
                results.length
                ?   <div className={classes.results}>
                        {
                            results.map((e: IProduct, i: number) => (
                                <Link 
                                    key={i} 
                                    to={`/product/${e._id}`} 
                                    className={classes.result}
                                    onClick={() => setResults([])}
                                >
                                    <div className={classes.image}>
                                        <img src={`${BACKEND_URL}/images/product/${get(e, "images[0].main_image", "")}`}/>
                                    </div>
                                    <div className={classes.price}>
                                        <span>{e.defaultPrice}</span>
                                        <span className={classes.currency}>{e.currency.name}</span>
                                    </div>
                                    <div className={classes.name}>
                                        <span>{e.name}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                :   null
            }
            {results.length ? <div className={classes.overlay} onClick={() => setResults([])}></div> : null}
        </div>
    )
};

export default Search;