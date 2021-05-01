import React from 'react';
import { ConfigurableAttribute, IAttribute, IValue } from 'src/interfaces/product';
import classes from './attributes.scss';
import Values from './values';

interface AttributeProps {
    attributes: ConfigurableAttribute[],
}

const Attributes:React.FC<AttributeProps> = (props: AttributeProps) => {
    const { 
        attributes
    } = props;
    console.log("attributes", attributes)
    return (
        <div className={classes.root}>
            {
                attributes.map((attr: ConfigurableAttribute, index: number) => {
                    return (
                        <div key={index} className={classes.attribute}>
                            <div className={classes.attributeNameField}>
                                <span className={classes.attributeName}>{attr.attribute.name}:</span>
                            </div>
                            <div className={classes.attributeValueField}>
                                <span className={classes.attributeValue}>
                                    {attr.selectedValue.name}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Attributes;