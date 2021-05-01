import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Range } from 'react-input-range';
import { useHistory, useParams } from 'react-router';
import { IProduct } from 'src/interfaces/product';
import { getTotalPages } from 'src/util/getTotalPages';
import { useAxiosClient } from '../Axios/useAxiosClient';
import { usePageControl } from '../PageControl/usePageControl';
type Props = {
    classes: any
}

export const useCategoryContent = (props: Props) => {
    const {classes} = props;
    const params: any = useParams();
    const { axiosClient } = useAxiosClient();
    const history = useHistory()
    const { id } = params;
    const { addQueryString, pageControl  } = usePageControl();
    const [priceRange, setPriceRange] = useState<Range>({min: Number(pageControl.price_min) || 0, max: Number(pageControl.price_max) || 100000});
    const [products, setProducts] = useState<IProduct[]>([]);
    const [totalPages, setTotalPages] = useState(0);
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

    const fetchProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/${id}?page=${pageControl.page}&limit=${pageControl.perPage}&date=${pageControl.date}&price_min=${pageControl.price_min}&price_max=${pageControl.price_max}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products);
            const { totalProducts } = data;
            if(totalProducts) {
                if(Number(totalProducts) < Number(pageControl.perPage)) {
                    setTotalPages(0)
                } else {
                    const newTotalpages = getTotalPages(Number(totalProducts), Number(pageControl.perPage));
                    setTotalPages(newTotalpages); 
                }
            }
        }
    }, [id, pageControl, addQueryString, totalPages, setTotalPages]);

    useEffect(() => {
        fetchProducts()
    }, [history.location.search])

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
        handleApplyPriceRange
    }
}