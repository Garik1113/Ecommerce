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
    const [priceRange, setPriceRange] = useState<Range>({min: Number(pageControl.price_min) || 0, max: Number(pageControl.price_max) || 200000});
    const [products, setProducts] = useState<IProduct[]>([]);
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
        // RIGHT WAY const response: AxiosResponse = await axiosClient("GET", `products/get_products/${id}?page=${pageControl.page}&sort=${pageControl.sort}&sort_dir=${pageControl.sort_dir}&price_min=${pageControl.price_min}&price_max=${pageControl.price_max}`);
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/?category_id=${id}${getQueryString(queryParams)}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products);
            if(data.attributes) {
                setAttributes(data.attributes)
            }
            const { totalProducts } = data;
            if(totalProducts) {
                if(Number(totalProducts) < Number(perPage)) {
                    setTotalPages(0)
                } else {
                    const newTotalpages = getTotalPages(Number(totalProducts), Number(perPage));
                    setTotalPages(newTotalpages); 
                }
            }
        }
    }, [id, pageControl, addQueryString, totalPages, setTotalPages, perPage, queryParams]);
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
    }, [history.location.search, perPage])

    const handleApplyFilters = useCallback(() => {
        
    }, [])
    const handleApplyPriceRange = useCallback((priceRange: Range) => {
        addQueryString("price_min", String(priceRange.min))
        addQueryString("price_max", String(priceRange.max))
    }, []);
    
    
    return {
        products,
        showSortOptions,
        setShowSortOptions,
        rootClass,
        setView,
        handleApplyFilters,
        addQueryString, 
        pageControl,
        totalPages,
        setPriceRange,
        priceRange,
        handleApplyPriceRange,
        attributes,
        queryParams,
        category
    }
}