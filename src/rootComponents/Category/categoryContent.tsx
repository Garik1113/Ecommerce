import React, { useEffect, useState } from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import Filter from '../../components/Filter';
import Gallery from '../../components/Gallery';
import classes from './categoryContent.scss';
import { Button } from 'semantic-ui-react';


const CategoryContent:React.FC = () => {
    const { 
        products, 
        showSortOptions, 
        setShowSortOptions,
        setView,
        rootClass,
        handleApplyFilters,
        filters,
        handleApplySorting
    } = useCategoryContent({classes});

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>{filters.name}</h1>
                <Button onClick={handleApplyFilters}>Apply Filters</Button>
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
                            <div className={classes.sortItem} onClick={() => handleApplySorting("low")}>
                                <span className={classes.sortText}>Price: Low to High</span>
                            </div> 
                            <div className={classes.sortItem} onClick={() => handleApplySorting("high")}>
                                <span className={classes.sortText}>Price: High to Low</span>
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