import React from 'react';
import { IAttribute, IValue } from 'src/interfaces/product';
import mergeClasses from 'src/util/classify';
import defaultClasses from './select.scss';
type Props = {
    attribute: IAttribute,
    addQueryString: any,
    queryParams: any,
    classes?: any
}

const Select: React.FC<Props> = (props: Props) => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { attribute, addQueryString, queryParams } = props;

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                {attribute.name}
            </div>
            {
                attribute.values && attribute.values.length
                ?   <div className={classes.list}>
                        {
                            attribute.values.map((e:IValue,i:number) => {
                                return (
                                    <div 
                                        key={i} 
                                        className={`${classes.item} ${queryParams[String(attribute.code)] == e.id && classes.selected}`} 
                                        onClick={() => queryParams[String(attribute.code)] == e.id ? addQueryString(attribute.code, "") : addQueryString(attribute.code, e.id)}
                                    >
                                        <span className={classes.itemName}>{e.name}</span>
                                    </div>
                               )
                            }) 
                        }
                    </div>
                :   null
            }
        </div>
    )
}

export default Select;