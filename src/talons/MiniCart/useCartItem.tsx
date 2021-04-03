import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/store";
import { getCartDetails } from "src/store/actions/cart/asyncActions";
import { TCartItem } from "src/store/types/cart";
import { useAxiosClient } from "../Axios/useAxiosClient";

interface Props {
    cartItem: TCartItem
}

export const useCartItem = (props:Props) => {
    const { cartItem } = props;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId || state.cart.cart._id);
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const handleDeleteCartItem = useCallback(async() => {
        await axiosClient("PUT", 'cart/delete', {cartId, itemId: cartItem._id});
        dispatch(getCartDetails())
    }, [cartItem, cartId]);
    
    const handleChangeQuantity = useCallback(async(increment: boolean) => {
        await axiosClient("PUT", 'cart/quantity', { cartId, itemId: cartItem._id, quantity: increment? 1 : -1 });
        dispatch(getCartDetails())
    }, [cartItem, cartId]);

    return {
        handleDeleteCartItem,
        handleChangeQuantity
    }
}