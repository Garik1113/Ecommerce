import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { IProduct } from 'src/interfaces/product';
import { useAxiosClient } from '../Axios/useAxiosClient'

export const useHome = () => {
    const { axiosClient } = useAxiosClient();
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchLatesProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", 'products/?date=latest');
        const { status, data } = response;
        if (status == 200 && data.products) {
            setProducts(data.products)
        }
    }, [axiosClient, setProducts]);

    useEffect(() => {
        fetchLatesProducts()
    }, [fetchLatesProducts]);

    return {
        products
    }
}