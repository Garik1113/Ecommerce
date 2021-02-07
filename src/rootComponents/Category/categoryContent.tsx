import React, { useEffect, useState } from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import Filter from '../../components/Filter';
import Gallery from '../../components/Gallery';
import classes from './categoryContent.scss';


const CategoryContent:React.FC = () => {
    const { products } =  useCategoryContent();
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [view, setView] = useState('grid');
    const [rootClass, setRootClass] = useState<string | undefined>(undefined);
    
    useEffect(() => {
        if(view === 'list'){
            setRootClass(classes.galleryList);
        } else {
            setRootClass(undefined)
        }
    }, [view, setView])

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Category Title</h1>
            </div>
            <div className={classes.options}>
                <div className={classes.sort}>
                    <span 
                        onClick={() => setShowSortOptions(!showSortOptions)}
                    >Sort By
                        {
                            showSortOptions  
                            ? <i className={`fas fa-chevron-up ${classes.sortArrowIcon}`}></i>  
                            : <i className={`fas fa-chevron-down ${classes.sortArrowIcon}`}></i>
                        }
                    </span>
                    {showSortOptions 
                    ?   <div className={classes.sortOptions}>
                            <div>
                                <span>Price: Low to High</span>
                            </div> 
                            <div>
                                <span>Price: High to Low</span>
                            </div>
                        </div>
                    :null
                    }
                </div>
                <div className={classes.viewBtns}>
                    <i className="fas fa-th" onClick={() => setView('grid')}></i>
                    <i className="fas fa-list" onClick={() => setView('list')}></i>
                </div>
            </div>
            <div className={classes.body}>
                <Filter/>
                <Gallery products={products} rootClass={rootClass}/> 
            </div>
            
        </div>
    )
};

export default CategoryContent;