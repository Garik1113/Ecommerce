import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
    metaDescription: string
}

const Meta:React.FC<Props> = (props: Props) => {
    const { metaDescription } = props;

    return (
        <Helmet>
            <meta name="discription" content={metaDescription}/>
        </Helmet>
    )
}

export default Meta;