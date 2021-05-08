import { AxiosResponse } from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { NULLIFY_CART } from 'src/store/types/cart';
import { useAxiosClient } from '../Axios/useAxiosClient';
import { useConfig } from '../Config/useConfig';

export const useOrder = () => {
    const [showItems, setShowItems] = useState<boolean>(false);
    const [message, setMessage] = useState("");
    const cart = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();
    const [orderNumber, setOrderNumber] = useState('');
    const { axiosClient } = useAxiosClient();
    const { cartId, cart: cartDetails } = cart;
    const { items, shippingMethod, totalPrice, subTotal } = cartDetails;
    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    const handleClick = useCallback(():void => {
            setShowItems(!showItems);
    }, [showItems, setShowItems]);
    const handleSubmit = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("POST", "orders/", { cartId });
        const { status, data } = response;
        if (status == 200) {
            setMessage("success");
            setOrderNumber(data.orderId);
            dispatch({
                type: NULLIFY_CART
            })
        }
    }, [axiosClient]);


    return {
        showItems,
        handleClick,
        handleSubmit,
        message,
        orderNumber,
        currency,
        items,
        totalPrice,
        shippingMethod,
        subTotal
    }
}