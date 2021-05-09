import React from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import Filters from '../../components/Filters';
import Gallery from '../../components/Gallery';
import classes from './categoryContent.scss';
import Pagination from 'src/components/Pagination';
import Banner from 'src/components/Banner';
import { handleImageError } from 'src/util/handleImageError';
import { BACKEND_URL } from 'src/config/defaults';


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
        totalPages,
        attributes,
        queryParams,
        category
    } = useCategoryContent({classes});
    const { sort, sort_dir } = pageControl;
console.log(category)
    return (
        <div className={classes.root}>
            {
                category && category.image 
                ?   <div className={classes.categoryImageField}>
                        <img 
                            onError={handleImageError} 
                            src={`${BACKEND_URL}/images/category/${category.image}`} 
                            className={classes.categoryImage}
                        />
                        <div className={classes.categoryTitle}>
                            {category.name}
                        </div>
                    </div>
                :   null
            }
            <div className={classes.rootBody}>
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
                                <div 
                                    className={`${classes.sortItem} ${sort=="date" && sort_dir=="asc" && classes.active}`} 
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "date");
                                        addQueryString("sort_dir", "asc");
                                    }}
                                >
                                    <span className={classes.sortText}>New Collection</span>
                                </div> 
                                <div 
                                    className={`${classes.sortItem} ${sort=="name" && sort_dir=="desc" && classes.active}`}
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "name");
                                        addQueryString("sort_dir", "desc");
                                    }}
                                >
                                    <span className={classes.sortText}>Name from A-Z</span>
                                </div> 
                                <div 
                                    className={`${classes.sortItem} ${sort=="name" && sort_dir=="asc" && classes.active}`}
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "name");
                                        addQueryString("sort_dir", "asc");
                                    }}
                                >
                                    <span className={classes.sortText}>Name from Z-A</span>
                                </div>
                                <div 
                                    className={`${classes.sortItem} ${sort=="price" && sort_dir=="desc" && classes.active}`} 
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "price");
                                        addQueryString("sort_dir", "desc");
                                    }}
                                >
                                    <span className={classes.sortText}>Price low to high</span>
                                </div>
                                <div 
                                    className={`${classes.sortItem} ${sort=="price" && sort_dir=="asc" && classes.active}`}  
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "price");
                                        addQueryString("sort_dir", "asc");
                                    }}
                                >
                                    <span className={classes.sortText}>Price high to low</span>
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
                    <div className={classes.filterAndBanner}>
                        <Filters 
                            priceRange={priceRange} 
                            setPriceRange={setPriceRange} 
                            handleApplyPriceRange={handleApplyPriceRange}
                            addQueryString={addQueryString}
                            attributes={attributes}
                            queryParams={queryParams}
                        />
                        <Banner bannerId="607fa92a68565d154970ade7"/>
                    </div>
                    
                    {
                        products && products.length
                        ?  <Gallery products={products} rootClass={rootClass}/>
                        :   <div className={classes.emptyField}>There Are no items</div>
                    }
                </div>
                <div className={classes.pagination}>
                    <Pagination addQueryString={addQueryString} pageControl={pageControl} totalPages={totalPages}/>
                </div>
            </div>
        </div>
    )
};

export default CategoryContent;