import React from 'react';

type Props = {
    value: string,
    onChange: any,
    cols: number,
    rows: number,
    name:  string,
    className: any
}

const TextArea:React.FC<Props> = (props: Props) => {
    const { value, onChange, cols, rows, name, className } = props;
    return (
        <textarea
            name={name}
            className={className}
            value={value} 
            onChange={onChange} 
            rows={rows} 
            cols={cols}
        />
    )
}

export default TextArea;