import React from 'react';
import { Range } from 'react-input-range';
import classes from './filters.scss';
import PricRange from './priceRange';

type Props = {
    priceRange: Range,
    setPriceRange: any,
    handleApplyPriceRange: any,
    addQueryString: any,
    attributes: any[]
}

const Filters:React.FC<Props> = (props: Props) => {
    const { 
        priceRange, 
        setPriceRange,
        handleApplyPriceRange
    } = props;

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

export default Filters;