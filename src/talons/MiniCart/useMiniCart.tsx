import { Dispatch, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "src/interfaces/cart";
import { State } from "src/store";
import { toggleCartDrawer } from "src/store/actions/cart/actions";
import { CartActions } from "src/store/types/cart";
import { useConfig } from "../Config/useConfig";

export const useMiniCart = () => {
    const isActive = useSelector((state:State) => state.cart.cartDrawer);
    const dispatch:Dispatch<CartActions> = useDispatch();
    const cart:ICart  = useSelector((state: State) => state.cart.cart);
    const { items, totalPrice } = cart;
    const handleClose = useCallback(():void => {
        dispatch(toggleCartDrawer(""));
    },[dispatch, toggleCartDrawer]);
    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    
    return {
        isActive,
        handleClose,
        cartItems: items,
        totalPrice,
        currency
    }
}