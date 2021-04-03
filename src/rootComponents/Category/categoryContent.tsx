import React, { useEffect, useState } from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import Filters from '../../components/Filters';
import Gallery from '../../components/Gallery';
import classes from './categoryContent.scss';
import { Button } from 'semantic-ui-react';
import Pagination from 'src/components/Pagination';


const CategoryContent:React.FC = () => {
    const { 
        products, 
        showSortOptions, 
        setShowSortOptions,
        setView,
        rootClass,
        handleApplyPriceRange,
        priceRange,
        setPriceRange,
        addQueryString,
        pageControl,
        totalPages
    } = useCategoryContent({classes});

    return (
        <div className={classes.root}>
            <div className={classes.options}>
                <div className={classes.sort}>
                    <span 
                        onClick={() => setShowSortOptions(!showSortOptions)}
                        className={classes.sortBy}
                    >Sort By
                        {
                            showSortOptions  
                            ? <i className={`fas fa-chevron-up ${classes.sortArrowIcon}`}></i>  
                            : <i className={`fas fa-chevron-down ${classes.sortArrowIcon}`}></i>
                        }
                    </span>
                    {showSortOptions 
                    ?   <div className={classes.sortOptions}>
                            <div className={classes.sortItem} onClick={() => {setShowSortOptions(false); addQueryString("date", "newest")}}>
                                <span className={classes.sortText}>Newest</span>
                            </div> 
                            <div className={classes.sortItem} onClick={() => {setShowSortOptions(false); addQueryString("date", "latest")}}>
                                <span className={classes.sortText}>Latest</span>
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
                <Filters priceRange={priceRange} setPriceRange={setPriceRange} handleApplyPriceRange={handleApplyPriceRange}/>
                <Gallery products={products} rootClass={rootClass}/>
            </div>
            <div className={classes.pagination}>
                <Pagination addQueryString={addQueryString} pageControl={pageControl} totalPages={totalPages}/>
            </div>
        </div>
    )
};

export default CategoryContent;