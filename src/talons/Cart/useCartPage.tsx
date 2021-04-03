import { useSelector } from "react-redux";
import { ICart } from 'src/interfaces/cart';
import { State } from "src/store";

export const useCartPage = () => {
    const cart:ICart = useSelector((state: State) => state.cart.cart);
    
    return {
        cart
    }
}