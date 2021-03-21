import React from 'react';
import { useNavigation } from 'src/talons/Navigation/useNavigation';
import CategoryTree from '../CategoryTree';
import NavHeader from './navHeader';
import classes from './navigation.scss';


const Navigation:React.FC = () => {
    const { 
        isActive, 
        categories,
        handleCloseDrawer
    } = useNavigation();
    
    return (
        <div className={`${classes.root} ${isActive ? classes.root_open : null}`}>
            <header>
                <NavHeader/>
            </header>
            <section className={classes.categories}>
                <CategoryTree 
                    categories={categories}
                    handleCloseDrawer={handleCloseDrawer}
                />
            </section>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Navigation;