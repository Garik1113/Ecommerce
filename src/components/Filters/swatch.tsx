import React from 'react';
import { IAttribute, IValue } from 'src/interfaces/product';
import mergeClasses from 'src/util/classify';
import defaultClasses from './swatch.scss';
type Props = {
    attribute: IAttribute,
    addQueryString: any,
    queryParams: any,
    classes?: any
}

const Swatch: React.FC<Props> = (props: Props) => {
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
                                        className={`${classes.circle} ${queryParams[String(attribute.code)] == e.id && classes.selected}`} 
                                        onClick={(() => {
                                                if (queryParams[String(attribute.code)] == e.id) {
                                                    addQueryString(String(attribute.code), "")
                                                } else {
                                                    addQueryString("page", 0);
                                                    addQueryString(String(attribute.code), e.id);
                                                }
                                            })
                                        }
                                    >
                                        <div className={classes.swatch}>{e.name}</div>
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

export default Swatch;