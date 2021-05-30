import React, { useState } from 'react';
import classes from './priceRange.scss';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

type Props = {
    minMaxPrice: any,
    handleApplyPriceRange: any,
    isFetchingProducts?:any
}

const PricRange:React.FC<Props> = (props: Props) => {
    const { handleApplyPriceRange, minMaxPrice } = props;
    const [value, setValue] = useState({min: minMaxPrice.min, max: minMaxPrice.max});

    return (
        <div className={classes.slider}>
             <label className={classes.label}>Գին</label>
            <InputRange
                onChange={(data: number | Range) => setValue({min: (data.min), max: data.max})}
                minValue={minMaxPrice.min == minMaxPrice.max ? 0 : minMaxPrice.min}
                maxValue={minMaxPrice.max}
                value={value}
                draggableTrack
                onChangeComplete={handleApplyPriceRange}
                step={1}
                allowSameValues={false}
            />
        </div>
    )
}

export default PricRange;