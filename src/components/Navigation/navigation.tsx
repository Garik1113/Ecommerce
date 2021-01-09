import React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'src/store';
import { useHeader } from '../../talons/Header/useHeader';
import CategoryTree from '../CategoryTree';
import NavHeader from './navHeader';
import classes from './navigation.scss';


const Navigation:React.FC = () => {
    const isActive:boolean =  !!useSelector((state:State) => state.app.drawer);
    const { categories } = useHeader();
    return (
        <div className={`${classes.root} ${isActive ? classes.root_open : null}`}>
            <header>
                <NavHeader/>
            </header>
            <section>
                <CategoryTree categories={categories}/>
            </section>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Navigation;