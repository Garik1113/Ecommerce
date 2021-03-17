import React from 'react';
import { IAttribute, IAttributeValue } from 'src/interfaces/product';
import classes from './attributes.scss';
import Values from './values';

interface AttributeProps {
    attributes: IAttribute[],
    optionSelections: Map<string, IAttributeValue>,
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
                attributes.map((attr: IAttribute, index: number) => {
                    return (
                        <div key={index}>
                            <div className={classes.label}>
                                <span>{attr.label}</span>
                            </div>
                            <div className={classes.value}>
                                <Values 
                                    attrubuteLabel={attr.label} 
                                    attributeId={attr._id} 
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