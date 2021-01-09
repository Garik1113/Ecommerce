import React from 'react';
import { img2 } from '../../talons/Product/useProduct';
import classes from './banner.scss';

const Banner:React.FC = () => {
    return (
        <div className={classes.root}>
            <div className={classes.body} style={{backgroundImage: 'url('+ img2 + ')' }}>
                <p className={classes.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Consequuntur accusantium odit, totam corporis 
                    vitae magni placeat minima vel nemo officiis consectetur 
                    quas tempora vero voluptates non harum, qui a! 
                    Nesciunt.
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Consequuntur accusantium odit, totam corporis 
                    vitae magni placeat minima vel nemo officiis consectetur 
                    quas tempora vero voluptates non harum, qui a! 
                    Nesciunt.
                </p>
            </div>
        </div>
    )
}
export default Banner;