import React, { useState } from 'react';
import classes from './dropDown.scss'

type Props = {
    options: any[],
    activeValue: any,
    onChange: any
}

const DropDown:React.FC<Props> = (props: Props) => {
    const { options=[], activeValue, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    console.log('options', options)
    return (
        <div className={classes.root} onClick={() => setIsOpen(!isOpen)}>
            <div className={classes.active} onClick={() => setIsOpen(true)}>{activeValue}</div>
            {
                isOpen
                ?   <div className={classes.list}>
                        {options.map((e:any, i) => 
                            ( <div 
                                key={i} 
                                onClick={() => { onChange(e.text); setIsOpen(false) }}
                                className={classes.item}
                            >
                                {e.text}
                            </div>
                            )
                        )}
                    </div>
                :   null
            }
        </div>
    )
}

export default DropDown