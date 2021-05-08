import React from 'react';
import { Range } from 'react-input-range';
import { IAttribute, IValue } from 'src/interfaces/product';
import classes from './filters.scss';
import PricRange from './priceRange';

type Props = {
    priceRange: Range,
    setPriceRange: any,
    handleApplyPriceRange: any,
    addQueryString: any,
    attributes: IAttribute[]
}

const Filters:React.FC<Props> = (props: Props) => {
    const { 
        priceRange, 
        setPriceRange,
        handleApplyPriceRange,
        attributes
    } = props;

    return (
        <div className={classes.root}>
            {
                attributes && attributes.length
                ?   attributes.map((e: IAttribute, i: number) => (
                        <div key={i}>
                            <div>
                                {e.name}
                            </div>
                            {
                                e.values.map((v:IValue, a:number) => {
                                    return (
                                        <div key={a}>
                                            {v.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                :   null
            }
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