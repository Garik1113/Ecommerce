import React from 'react';
import { Range } from 'react-input-range';
import { IAttribute } from 'src/interfaces/product';
import ColorSwatch from './colorSwatch';
import Swatch from './swatch';
import classes from './filters.scss';
import PricRange from './priceRange';
import Select from './select';

type Props = {
    minMaxPrice: Range,
    handleApplyPriceRange: any,
    addQueryString: any,
    attributes: IAttribute[],
    queryParams: any,
    isFetchingProducts?:any
}

const Filters:React.FC<Props> = (props: Props) => {
    const { 
        minMaxPrice, 
        handleApplyPriceRange,
        attributes,
        addQueryString,
        queryParams,
        isFetchingProducts
    } = props;

    return (
        <div className={classes.root}>
            <div>
                {
                    attributes && attributes.length
                    ?   attributes.map((e: IAttribute, i: number) => (
                            e.type == "colorSwatch"
                            ?  <div className={classes.filter}>
                                    <ColorSwatch 
                                        attribute={e} key={i} 
                                        addQueryString={addQueryString}
                                        queryParams={queryParams}
                                    />
                                </div> 
                            :   e.type == "swatch"
                            ?   <div className={classes.filter}>
                                    <Swatch 
                                        attribute={e} 
                                        key={i} 
                                        addQueryString={addQueryString}
                                        queryParams={queryParams}
                                    />
                                </div> 
                            :   e.type == "select"
                            ?   <div className={classes.filter}>
                                    <Select 
                                        attribute={e} 
                                        key={i} 
                                        addQueryString={addQueryString}
                                        queryParams={queryParams}
                                    />
                                </div>
                            :   null
                        ))
                    :   null
                }
                <PricRange 
                    minMaxPrice={minMaxPrice}
                    handleApplyPriceRange={handleApplyPriceRange}
                    isFetchingProducts={isFetchingProducts}
                />  
            </div>
            
        </div>
    )
};

export default Filters;