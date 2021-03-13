import React from 'react';
import { Attribute, AttributeValue } from 'src/store/types/product';
import classes from './attributes.scss';
import Values from './values';

interface AttributeProps {
    attributes: Attribute[],
    optionSelections: Map<number, AttributeValue>,
    handleChangeOptionSelections: Function
}

const Attributes:React.FC<AttributeProps> = (props: AttributeProps) => {
    const { 
        attributes, 
        optionSelections, 
        handleChangeOptionSelections 
    } = props;
    
    return (
        <div className={classes.root}>
            {
                attributes.map((attr: Attribute, index: number) => {
                    return (
                        <div key={index}>
                            <div className={classes.label}>
                                <span>{attr.label}</span>
                            </div>
                            <div className={classes.value}>
                                <Values 
                                    attrubuteLabel={attr.label} 
                                    attributeId={attr.id} 
                                    values={attr.values}
                                    optionSelections={optionSelections}
                                    handleChangeOptionSelections={handleChangeOptionSelections}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Attributes;