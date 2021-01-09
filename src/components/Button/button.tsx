import React from 'react';
import classes from './button.scss';

interface Props {
    priority: string,
    label: string,
    onClick?: any,
    disabled?: boolean,
    className?: string
}

const Button:React.FC<Props> = ({ priority, label, onClick, disabled, className}: Props) => {
    const btnClass = priority
    return (
        <button 
            className={`${classes.root} ${classes[btnClass]} ${disabled && classes.disabled} ${className}`}
            onClick={onClick}
            disabled={disabled}
            type="submit"
        >
            {label}
        </button>
    )
}

export default Button;