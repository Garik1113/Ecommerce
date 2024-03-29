import React from 'react';
import { useCategoryContent } from '../../talons/Category/useCategoryContent';
import Filters from '../../components/Filters';
import Gallery from '../../components/Gallery';
import classes from './categoryContent.scss';
import Pagination from 'src/components/Pagination';
import Banner from 'src/components/Banner';
import { handleImageError } from 'src/util/handleImageError';
import { BACKEND_URL } from 'src/config/defaults';
import Title from 'src/components/Head/title';


const CategoryContent:React.FC = () => {
    const { 
        products, 
        showSortOptions, 
        setShowSortOptions,
        setView,
        rootClass,
        handleApplyPriceRange,
        minMaxPrice,
        addQueryString,
        pageControl,
        totalPages,
        attributes,
        queryParams,
        category,
        isFetchingProducts
    } = useCategoryContent({classes});
    const { sort, sort_dir } = pageControl;
    
    return (
        <div className={classes.root}>
            <Title title={category?.name || ""}/>
            {
                category && category.image 
                ?   <div className={classes.categoryImageField}>
                        <img 
                            onError={handleImageError} 
                            src={`${BACKEND_URL}/images/category/${category.image}`} 
                            className={classes.categoryImage}
                        />
                        <div className={classes.categoryTitle}>
                           <h3>{category.name}</h3> 
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
                        >Տեսակավորել ըստ
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
                                    <span className={classes.sortText}>Նոր Տեսականի</span>
                                </div> 
                                <div 
                                    className={`${classes.sortItem} ${sort=="name" && sort_dir=="asc" && classes.active}`}
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "name");
                                        addQueryString("sort_dir", "asc");
                                    }}
                                >
                                    <span className={classes.sortText}>Անուն Ա-Ֆ</span>
                                </div> 
                                <div 
                                    className={`${classes.sortItem} ${sort=="name" && sort_dir=="desc" && classes.active}`}
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "name");
                                        addQueryString("sort_dir", "desc");
                                    }}
                                >
                                    <span className={classes.sortText}>Անուն Ֆ-Ա</span>
                                </div>
                                <div 
                                    className={`${classes.sortItem} ${sort=="price" && sort_dir=="desc" && classes.active}`} 
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "price");
                                        addQueryString("sort_dir", "desc");
                                    }}
                                >
                                    <span className={classes.sortText}>Գին ցածրից բարձր</span>
                                </div>
                                <div 
                                    className={`${classes.sortItem} ${sort=="price" && sort_dir=="asc" && classes.active}`}  
                                    onClick={() => {
                                        setShowSortOptions(false); 
                                        addQueryString("sort", "price");
                                        addQueryString("sort_dir", "asc");
                                    }}
                                >
                                    <span className={classes.sortText}>Գին բարձրից ցածր</span>
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
                            minMaxPrice={minMaxPrice} 
                            handleApplyPriceRange={handleApplyPriceRange}
                            addQueryString={addQueryString}
                            attributes={attributes}
                            queryParams={queryParams}
                            isFetchingProducts={isFetchingProducts}
                        />
                        <Banner bannerId="60a13543d3628d1129b07ca4"/>
                    </div>
                    
                    {
                        products && products.length
                        ?  <Gallery products={products} rootClass={rootClass}/>
                        :   <div className={classes.emptyField}>Ապրանքներ չկան</div>
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