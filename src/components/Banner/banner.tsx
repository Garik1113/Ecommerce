import React from 'react';
import { BACKEND_URL } from 'src/config/defaults';
import { useBanner } from 'src/talons/Banner/useBanner';
import classes from './banner.scss';

type Props = {
    bannerId: string
}

const Banner:React.FC<Props> = (props:Props) => {
    const {bannerId} = props;
    const { banner } = useBanner({bannerId});
    if (!banner) {
        return null
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.imageFiled}>
                    <img src={`${BACKEND_URL}/images/banner/${banner.image}`}/>
                </div>
                <div className={classes.contentField}>
                    <div dangerouslySetInnerHTML={{__html: banner.content}}/>
                </div>
            </div>
        </div>
    )
}
export default Banner;