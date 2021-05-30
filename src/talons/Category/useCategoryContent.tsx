import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Range } from 'react-input-range';
import { useHistory, useParams } from 'react-router';
import { ICategory } from 'src/interfaces/category';
import { IAttribute, IProduct } from 'src/interfaces/product';
import { getTotalPages } from 'src/util/getTotalPages';
import { useAxiosClient } from '../Axios/useAxiosClient';
import { useConfig } from '../Config/useConfig';
import { usePageControl } from '../PageControl/usePageControl';
type Props = {
    classes: any
}

const getQueryString = (queryParams: any={}) => {
    let str = '';
    for (const key in queryParams) {
        if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
            const element = queryParams[key];
            const item = `${String(key).toLowerCase()}=${element}&`;
            str += item;
        }
    }
    return `&${str}`;
}

export const useCategoryContent = (props: Props) => {
    const { classes } = props;
    const params: any = useParams();
    const { axiosClient } = useAxiosClient();
    const history = useHistory()
    const { id } = params;
    const { addQueryString, pageControl, queryParams } = usePageControl();
    const [minMaxPriceState, setMinMaxPrice] = useState<Range>({min: 0, max: 0});
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isFetchingProducts, setIsFetchingproducts] = useState(false);
    const [attributes, setAttributes] = useState<IAttribute[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [category, setCategory] = useState<ICategory>()
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [view, setView] = useState('grid');
    const [rootClass, setRootClass] = useState<string | undefined>(undefined);
    const { getConfigValue } = useConfig();
    const perPage = useMemo(
        () => getConfigValue("productsPerPage")
    ,[getConfigValue])

    useEffect(() => {
        if(view === 'list'){
            setRootClass(classes.galleryList);
        } else {
            setRootClass(undefined)
        }
    }, [view, setView]);

    const fetchProducts = useCallback(async() => {
        setIsFetchingproducts(true);
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/?category_id=${id}${getQueryString(queryParams)}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products);
            if (data.attributes) {
                setAttributes(data.attributes)
            }
            const { totalProducts, pageSize = 1, minPrice, maxPrice } = data;
            
            if (minPrice && maxPrice) {
                setMinMaxPrice({ min: minPrice, max: maxPrice })
            }
            if(totalProducts) {
                if(Number(totalProducts) <= Number(pageSize)) {
                    setTotalPages(0)
                } else {
                    setTotalPages(Math.ceil(Number(totalProducts)/ Number(pageSize))); 
                }
            }
        }
        setIsFetchingproducts(false)
    }, [id, pageControl, addQueryString, totalPages, setTotalPages, perPage, queryParams, setMinMaxPrice, setIsFetchingproducts]);

    const fetchCategory = useCallback(async() => {
        if (id) {
            const response: AxiosResponse = await axiosClient("GET", `categories/${id}`);
            const { status, data } = response;
            if (status == 200 && data.category) {
                setCategory(data.category)
            }
        }
    }, [id, setCategory]);

    useEffect(() => {
        fetchProducts();
        fetchCategory()
    }, [history.location.search])

    const handleApplyPriceRange = useCallback((priceRange: Range) => {
        addQueryString("price_min", String(priceRange.min));
        addQueryString("price_max", String(priceRange.max));
    }, []);
    
    
    return {
        products,
        showSortOptions,
        setShowSortOptions,
        rootClass,
        setView,
        addQueryString, 
        pageControl,
        totalPages,
        setMinMaxPrice,
        minMaxPrice: minMaxPriceState,
        handleApplyPriceRange,
        attributes,
        queryParams,
        category,
        isFetchingProducts
    }
}