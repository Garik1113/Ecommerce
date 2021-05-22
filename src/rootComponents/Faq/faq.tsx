import React from 'react';
import FaqContent from 'src/components/FaqContent';
import Title from 'src/components/Head/title';
import { useFaq } from 'src/talons/Faq/useFaq';
import classes from './faq.scss';

const Faq:React.FC = () => {
    const { faqs } = useFaq();
    
    if (!faqs.length) {
        return <h2>empty</h2>
    }

    return (
        <div className={classes.root}>
            <Title title={"Հաճախ տրվող հարցեր"}/>
            <FaqContent faqs={faqs}/>
        </div>
        
    )
};

export default Faq