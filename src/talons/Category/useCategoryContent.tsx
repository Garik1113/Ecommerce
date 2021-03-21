import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { IProduct } from 'src/interfaces/product';
import { useAxiosClient } from '../Axios/useAxiosClient';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
type Props = {
    classes: any
}

export const useCategoryContent = (props: Props) => {
    const {classes} = props;
    const params: any = useParams();
    const { axiosClient } = useAxiosClient();
    const { id } = params;
    const [products, setProducts] = useState<IProduct[]>([]);
    const filters = queryString.parse(location.search);
   const history = useHistory();
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
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/${id}${history.location.search}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products)
        }
    }, [id, filters]);

    useEffect(() => {
        fetchProducts();
    }, [id]);
    const handleApplyFilters = useCallback(() => {
        fetchProducts()
    }, [history])
    // useEffect(() => {
    //     if (filters) {
    //         console.log(filters)
    //         fetchProducts(filters)
    //     }
    // }, [filters] )
    const handleApplySorting = useCallback((option: string) => {
        setShowSortOptions(false)
        console.log(option)
        if(!isEmpty(filters)) {
            history.push(`?sort=${option}`)
        } else {
            history.push(`&sort=${option}`)
        }
        fetchProducts()
    }, [history, filters]);


    return {
        products,
        showSortOptions,
        setShowSortOptions,
        rootClass,
        setView,
        handleApplyFilters,
        filters,
        handleApplySorting
    }
}