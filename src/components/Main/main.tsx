import React, { ReactNode } from 'react';
import Footer from 'components/Footer/footer';
import Header from 'components/Header';
import classes from './main.scss';
import { useMain } from 'src/talons/Main/useMain';

type Props = {
    children: ReactNode
}

const Main:React.FC<Props> = (props: Props) => {
    const { children } = props;
    const {
        categories,
        isMobile,
        totalQty,
    } = useMain();

    return (
        <main className={classes.main}>
            <Header categories={categories} isMobile={isMobile} totalQty={totalQty}/>
            {children}
            <Footer/>
        </main>
    )
}

export default Main;