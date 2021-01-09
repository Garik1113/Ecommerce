import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useFilter } from '../../talons/Filter/useFilter';
import classes from './filter.scss';


const Filter:React.FC = () => {
    const { filters } = useFilter();
    const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);
    const [isOpenStockFilter, setIsOpenStockFilter] = useState(false);
    const [isOpenBrandFilter, setIsOpenBrandFilter] = useState(false);
    const [priceRange, setPriceRange] = useState("");
    const [brand, setBrand] = useState("");
    const [inStock, setInStock] = useState("");
    const [pathParams, setPathParams] = useState('');
    const history = useHistory();
    useEffect(() => {
        if(priceRange){
            setPathParams(pathParams+`?price_range=${priceRange}`);
        }
        if(inStock) {
            history.push(`?in_stock=${inStock}`);
        }
        if(brand) {
            history.push(`?brand=${brand}`);
        }
    }, [priceRange, setPriceRange, inStock, setInStock, brand, setBrand]);

    
    return (
        <div className={classes.root}>
            {
                filters.map((filter) => (
                    <div className={classes.filter} key={filter.id} >
                        <span className={classes.filterTitle}>{filter.title}</span>
                        <ul>
                            {filter.variants.map((variant) => (
                                        <li key={variant.id}>
                                            <input type="checkbox" onChange={() => console.log(filter.id, variant.value)} value={variant.id} name={filter.title}/>
                                            {variant.value}
                                        </li>
                                ))
                            }  
                        </ul>
                        
                    </div>
                ))
            }
        </div>
    )
};

export default Filter;