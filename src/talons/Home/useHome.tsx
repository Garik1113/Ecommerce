import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { IProduct } from 'src/interfaces/product';
import { fetchLocations } from 'src/store/actions/app/asyncActions';
import { useAxiosClient } from '../Axios/useAxiosClient'

export const useHome = () => {
    const { axiosClient } = useAxiosClient();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [discountedProducs, setDiscountedProducts] = useState<IProduct[]>([]);
    const dispatch = useDispatch();
    const fetchLatesProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/?date=latest&limit=${6}`);
        const { status, data } = response;
        if (status == 200 && data.products) {
            setProducts(data.products)
        }
    }, [axiosClient, setProducts]);
    const fetchDiscountedProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/?limit=${6}&discount=true&date=latest`);
        const { status, data } = response;
        if (status == 200 && data.products) {
            setDiscountedProducts(data.products)
        }
    }, [axiosClient, setDiscountedProducts]);

    useEffect(() => {
        fetchLatesProducts();
        fetchDiscountedProducts();
        dispatch(fetchLocations())
    }, [fetchLatesProducts, fetchDiscountedProducts]);

    return {
        products,
        discountedProducs
    }
}