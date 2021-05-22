import React, { useState } from 'react';
import { IFaq } from 'src/interfaces/faq';
import classes from './item.scss';

type Props = {
    faq: IFaq
}

const Item:React.FC<Props>= (props: Props) => {
    const { faq } = props;
    const [open, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classes.faq}>
            <div className={classes.questionField} onClick={() => setIsOpen(!open)}>
                <span className={classes.question}>{faq.question}</span>
                {open 
                    ?   <i className="fas fa-chevron-up"></i>
                    :   <i className="fas fa-chevron-down"></i>
                } 
            </div>
            {
                open
                ?   <div className={classes.answerField}>
                        <p className={classes.answer}>{faq.answer}</p>
                    </div>
                :   null
            }
        </div>
    )
}

export default Item;