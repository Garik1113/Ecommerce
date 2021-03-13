import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { deleteCart } from 'src/store/actions/cart/asyncActions';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useOrder = () => {
    const [showItems, setShowItems] = useState<boolean>(false);
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const cartId = useSelector((state:State) => state.cart.cartId)
    const handleClick = useCallback(():void => {
            setShowItems(!showItems);
    }, [showItems, setShowItems]);
    const handleSubmit = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("POST", "orders/place_order", { cartId });
        const { status } = response;
        if (status == 200) {
            await axiosClient("DELETE", 'cart/remove', { cartId });
            dispatch(deleteCart())
        }
    }, [axiosClient])

    return {
        showItems,
        handleClick,
        handleSubmit
    }
}