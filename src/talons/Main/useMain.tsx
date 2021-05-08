import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICategory } from 'src/interfaces/category';
import { State } from 'src/store';
import { fetchConfigs } from 'src/store/actions/app/asyncActions';
import { getCartDetails } from 'src/store/actions/cart/asyncActions';
import { useWindowSize, WindowSize } from 'src/util/useWindowSize';
import { useAxiosClient } from '../Axios/useAxiosClient'


export const useMain = () => {
    const { axiosClient } = useAxiosClient();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { innerWidth }:WindowSize = useWindowSize();
    const { totalQty, totalPrice } = useSelector((state: State) => state.cart.cart);
    const { cartId } = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        if (innerWidth < 700){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [innerWidth]);

    const fetchCategories = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `categories/?include_in_menu=true`);
        const { data } = response;
        if (data && data.categories) {
            setCategories(data.categories)
        }
    }, [axiosClient]);

    useEffect(() => {
        fetchCategories();
        dispatch(fetchConfigs())
        if (cartId) {
            dispatch(getCartDetails());
        }
    }, [cartId]);
    
    return {
        categories,
        isMobile,
        totalQty, 
        totalPrice 
    }
}