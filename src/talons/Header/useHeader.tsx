import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { getCartDetails } from 'src/store/actions/cart/asyncActions';
import { TCategory } from 'src/store/types/category'
import { useWindowSize, WindowSize } from 'src/util/useWindowSize';
import { useAxiosClient } from '../Axios/useAxiosClient'


export const useHeader = () => {
    const { axiosClient } = useAxiosClient();
    const [categories, setCategories] = useState<TCategory[]>([]);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const {innerWidth}:WindowSize = useWindowSize();
    const { totalQty, totalPrice } = useSelector((state: State) => state.cart.cart);
    const { cartId } = useSelector((state: State) => state.cart);
    // const items: TCartItem[] = useSelector((state: State) => state.cart.cart.items) || [];
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
        if (cartId) {
            dispatch(getCartDetails())
        }
    }, [cartId]);
    
    return {
        categories,
        isSearchOpen, 
        setIsSearchOpen,
        isMobile,
        totalQty, 
        totalPrice 
    }
}