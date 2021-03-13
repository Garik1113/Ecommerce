import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TProduct } from 'src/store/types/product';
import { useAxiosClient } from '../Axios/useAxiosClient';


export const useCategoryContent = () => {
    const params: any = useParams();
    const { axiosClient } = useAxiosClient();
    const { id } = params;
    const [products, setProducts] = useState<TProduct[]>([]);

    const fetchProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/${id}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products)
        }
    }, [id]);

    useEffect(() => {
        fetchProducts();
    }, [id]);

    return {
        products
    }
}