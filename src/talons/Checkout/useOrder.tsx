import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { NULLIFY_CART } from 'src/store/types/cart';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useOrder = () => {
    const [showItems, setShowItems] = useState<boolean>(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const [orderNumber, setOrderNumber] = useState('');
    const { axiosClient } = useAxiosClient();
    const cartId = useSelector((state:State) => state.cart.cartId)
    const handleClick = useCallback(():void => {
            setShowItems(!showItems);
    }, [showItems, setShowItems]);
    const handleSubmit = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("POST", "orders/place_order", { cartId });
        const { status, data } = response;
        if (status == 200) {
            setMessage("success");
            setOrderNumber(data.orderId);
            dispatch({
                type: NULLIFY_CART
            })
        }
    }, [axiosClient])

    return {
        showItems,
        handleClick,
        handleSubmit,
        message,
        orderNumber
    }
}