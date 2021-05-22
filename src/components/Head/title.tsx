import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
    title: string
}

const Title:React.FC<Props> = (props: Props) => {
    const { title } = props;
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

export default Title;