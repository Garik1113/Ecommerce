import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { signOut } from 'src/store/actions/customer/asyncActions';
import { DELETE_CART } from "src/store/types/cart";
import { useAxiosClient } from "../Axios/useAxiosClient";

export const useTabs = () => {
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();

    const handleSignOut = useCallback(async() => {
        await axiosClient("PUT", `customers/signout`);
        dispatch(signOut());
        dispatch({
            type: DELETE_CART
        });
    }, []);

    return {
        handleSignOut
    }
}