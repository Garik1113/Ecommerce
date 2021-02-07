import React, { ReactNode } from 'react';
import Footer from 'components/Footer/footer';
import Header from 'components/Header';
import classes from './main.scss';

type Props = {
    children: ReactNode
}

const Main:React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (
        <main className={classes.main}>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}

export default Main;