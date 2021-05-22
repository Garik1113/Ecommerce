import React from 'react';
import { IFaq } from 'src/interfaces/faq';
import classes from './faqContent.scss';
import Item from './item';

type Props = {
    faqs: IFaq[]
}

const FaqContent:React.FC<Props>= (props: Props) => {
    const { faqs } = props;

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h3>Հաճախ տրվող հարցեր</h3>
            </div>
            <div className={classes.content}>
                {
                    faqs.map((e: IFaq) => {
                        return (
                            <Item faq={e} key={e._id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaqContent;