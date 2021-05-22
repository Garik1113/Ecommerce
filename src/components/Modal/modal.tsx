import React from 'react';
import classes from './modal.scss';

type Props = {
    open: boolean,
    children:  React.ReactChildren | any,
    onClose: any
}

const Modal:React.FC<Props> = (props: Props) => {
    const { open, children, onClose } = props;
    if (!open) {
        return null;
    }
    return (
        <div 
            className={classes.root} 
            id="overlay" 
            onClick={(e:any) => e.target.id == "overlay" ? onClose() : null }
        >
            <div className={classes.body}>
                <div className={classes.close} onClick={() => onClose()}>X</div>
                {children}
            </div>
        </div>
    )
}

export default Modal;