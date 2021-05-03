import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICartItem } from "src/interfaces/cart";
import { State } from "src/store";
import { getCartDetails } from "src/store/actions/cart/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient";
import { useConfig } from "../Config/useConfig";

interface Props {
    cartItem: ICartItem
}

export const useCartItem = (props:Props) => {
    const { cartItem } = props;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId || state.cart.cart._id);
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    const handleDeleteCartItem = useCallback(async() => {
        await axiosClient("PUT", 'cart/delete', {cartId, itemId: cartItem._id});
    }, [cartItem, cartId]);
    
    const handleChangeQuantity = useCallback(async(increment: boolean) => {
        if (cartItem.quantity <= 1 && !increment) {
            return
        }
        await axiosClient("PUT", 'cart/quantity', { cartId, itemId: cartItem._id, quantity: increment ? 1 : -1 });
        dispatch(getCartDetails());
    }, [cartItem, cartId]);

    return {
        handleDeleteCartItem,
        handleChangeQuantity,
        currency
    }
}