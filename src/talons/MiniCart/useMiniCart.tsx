import { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/store";
import { toggleCartDrawer } from "src/store/actions/cart/actions";
import { CartActions, TCart } from "src/store/types/cart";

export const useMiniCart = () => {
    const isActive = useSelector((state:State) => state.cart.cartDrawer);
    const dispatch:Dispatch<CartActions> = useDispatch();
    const cart:TCart  = useSelector((state: State) => state.cart.cart);
    const { items, totalPrice } = cart;
    const handleClose = useCallback(():void => {
        dispatch(toggleCartDrawer(""));
    },[dispatch, toggleCartDrawer]);
    
    return {
        isActive,
        handleClose,
        cartItems: items,
        totalPrice
    }
}