import React from 'react';
import classes from './priceRange.scss';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

type Props = {
    min: number,
    max: number,
    value: Range,
    setPriceRange: any,
    handleApplyPriceRange: any
}

const PricRange:React.FC<Props> = (props: Props) => {
    const { min, max, setPriceRange, value, handleApplyPriceRange } = props;
    return (
        <div className={classes.slider}>
             <label>Price</label>
            <InputRange
                onChange={(data: Range) => setPriceRange(data)}
                minValue={min}
                maxValue={max}
                value={value}
                draggableTrack
                onChangeComplete={handleApplyPriceRange}
                step={1}
            />
        </div>
    )
}

export default PricRange;