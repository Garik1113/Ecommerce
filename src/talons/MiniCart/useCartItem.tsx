import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICartItem } from "src/interfaces/cart";
import { State } from "src/store";
import { changeItemQuantity, deleteCartItem } from "src/store/actions/cart/asyncActions";
interface Props {
    cartItem: ICartItem
}

export const useCartItem = (props:Props) => {
    const { cartItem } = props;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId || state.cart.cart._id);
    const dispatch = useDispatch();
    
    const handleDeleteCartItem = useCallback(async() => {
        await dispatch(deleteCartItem(cartItem._id))
    }, [cartItem, cartId]);
    
    const handleChangeQuantity = useCallback(async(increment: boolean) => {
        if (cartItem.quantity <= 1 && !increment) {
            return
        }
        dispatch(changeItemQuantity(cartItem._id, increment ? 1 : -1));
    }, [cartItem, cartId]);

    return {
        handleDeleteCartItem,
        handleChangeQuantity
    }
}