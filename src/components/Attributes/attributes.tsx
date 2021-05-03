import React from 'react';
import { ConfigurableAttribute } from 'src/interfaces/product';
import mergeClasses from 'src/util/classify';
import defaultClasses from './attributes.scss';

interface AttributeProps {
    attributes: ConfigurableAttribute[],
    classes?: any
}

const Attributes:React.FC<AttributeProps> = (props: AttributeProps) => {
    const { 
        attributes
    } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    if (!attributes || !attributes.length) {
        return null
    }
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