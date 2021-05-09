import React from 'react';
import { ConfigurableAttribute, IAttribute } from 'src/interfaces/product';
import mergeClasses from 'src/util/classify';
import ColorSwatch from '../Filters/colorSwatch';
import Swatch from '../Filters/swatch';
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
                    if (attr.attribute.type == "swatch") {
                        const attribute: IAttribute = { 
                            name: attr.attribute.name,
                            _id: attr.attribute._id,
                            type: attr.attribute.type,
                            values: [{...attr.selectedValue}]
                            }
                        return <Swatch  
                                    key={index} 
                                    attribute={attribute} 
                                    queryParams={{}} 
                                    addQueryString={() => {}} 
                                    classes={{
                                        root: classes.swatchRoot,
                                        circle: classes.circle,
                                        swatch: classes.swatch
                                    }}
                                />
                    } else if (attr.attribute.type == "colorSwatch") {
                        const attribute: IAttribute = { 
                            name: attr.attribute.name,
                            _id: attr.attribute._id,
                            type: attr.attribute.type,
                            values: [{...attr.selectedValue}]
                            }
                        return <ColorSwatch 
                                    key={index} 
                                    attribute={attribute} 
                                    queryParams={{}} 
                                    addQueryString={() => {}}
                                    classes={{
                                        root: classes.swatchRoot,
                                        circle: classes.circle,
                                        swatch: classes.swatch
                                    }}
                                />
                    } else {
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
                    }
                    
                })
            }
        </div>
    )
}


export default Attributes;