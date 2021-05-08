import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ICart } from 'src/interfaces/cart';
import { State } from "src/store";
import { useConfig } from "../Config/useConfig";

export const useCartPage = () => {
    const cart:ICart = useSelector((state: State) => state.cart.cart);
    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    return {
        cart,
        currency
    }
}