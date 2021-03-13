import { useSelector } from "react-redux";
import { State } from "src/store";
import { TCart } from "src/store/types/cart";

export const useCartPage = () => {
    const cart:TCart = useSelector((state: State) => state.cart.cart);
    
    return {
        cart
    }
}