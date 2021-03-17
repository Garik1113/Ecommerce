import React, { useMemo } from 'react';
import { IMAGE_BASE_URL } from 'src/config/defaults';
import { IAttributeValue } from 'src/interfaces/product';
import { AttributeValue } from 'src/store/types/product';
import { handleImageError } from 'src/util/handleImageError';
import classes from './values.scss';

interface ValueProps {
    values: IAttributeValue[],
    attributeId: string,
    attrubuteLabel: String,
    optionSelections: Map<string, IAttributeValue>,
    handleChangeOptionSelections: Function
}

const Values:React.FC<ValueProps> = (props: ValueProps) => {
    const { 
        values, 
        attrubuteLabel, 
        attributeId,
        optionSelections,
        handleChangeOptionSelections
    } = props;
    const currentValue = useMemo(
        () => optionSelections.get(attributeId),
        [optionSelections, attributeId]
    );

    return (
        <div className={classes.root}>
            {
                values.map((val: AttributeValue, index: number) => {
                    return (
                        <div key={index} className={classes.body}>
                            <div className={classes.imageField}>
                                <img 
                                    className={classes.image}
                                    onError={handleImageError}
                                    src={`${IMAGE_BASE_URL}/products/${val.images[0].small_image}`}
                                />
                            </div>
                            <div className={classes.label}>
                                <label htmlFor={val.label}>{val.label}</label>
                            </div>
                            <div className={classes.radioField}>
                                <input 
                                    type="radio"
                                    id={val.label}
                                    name={attrubuteLabel} 
                                    checked={currentValue?.id == val.id}
                                    onChange={() => handleChangeOptionSelections(attributeId, val)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Values;