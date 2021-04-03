import React, { useCallback } from 'react';
import { Range } from 'react-input-range';
import { useHistory } from 'react-router';
import { Button, Checkbox } from 'semantic-ui-react';
import { useFilter } from '../../talons/Filter/useFilter';
import classes from './filters.scss';
import PricRange from './priceRange';

type Props = {
    priceRange: Range,
    setPriceRange: any,
    handleApplyPriceRange: any
}

const Filter:React.FC<Props> = (props: Props) => {
    const { priceRange, setPriceRange,handleApplyPriceRange  } = props;
    const { filters } = useFilter();
    const history = useHistory();
    const handleChange = useCallback((data:any, filter:any) => {
        const search = history.location.search;
        if(data.checked) {
            if (search[0] == "?") {
                history.push(`${search}${filter.value}=${data.value}&`) 
            } else {
                history.push(`?${search}${filter.value}=${data.value}&`) 
            }
        } else {
            const path = search.replace(`${filter.value}=${data.value}&`, "");
            history.push(path ? path : "?")
        }
    }, [history]);

    return (
        <div className={classes.root}>
            <PricRange 
                min={0} 
                max={100000} 
                value={priceRange}
                setPriceRange={setPriceRange}
                handleApplyPriceRange={handleApplyPriceRange}
            />
        </div>
    )
};

export default Filter;