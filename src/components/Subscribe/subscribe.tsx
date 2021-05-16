import React from 'react';
import { useSubscribe } from 'src/talons/Subscribe/useSubscribe';
import Button from '../Button';
import classes from './subscribe.scss';

type Props = {
    productId: string,
}

const Subscribe:React.FC<Props> = (props: Props) => {
    const { productId } = props;
    const { subscribe, message } = useSubscribe();

    return (
        <div className={classes.root}>
            { message ? <span className={classes.message}>{message}</span> : null }
            <Button
                priority="high"
                label="Subscribe"
                className={classes.root} 
                onClick={() => subscribe(productId)}
            />
        </div>
        
    )
}

export default Subscribe;