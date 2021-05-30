import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IProduct } from 'src/interfaces/product';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useWishlist = () => {
    const tepmWishlist: string | null = localStorage.getItem('wishlist');
    const wishlist:string[] = tepmWishlist ? JSON.parse(tepmWishlist) : [];
    const [items, setItems] = useState<IProduct[]>([]);
    const { axiosClient } = useAxiosClient();
    const fetchProducts = useCallback(async() => {
        const {status, data}: AxiosResponse = await axiosClient("GET", `products/get_products/?ids=${wishlist}`);
        if(status == 200 && data.products) {
            setItems(data.products)
        }
    }, [wishlist])
    useEffect(() => {
        if(wishlist.length && !items.length){
            fetchProducts()
        }
    }, [wishlist]);

    return {
        items
    }
}