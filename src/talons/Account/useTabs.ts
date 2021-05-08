import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { State } from "src/store";
import { signOut } from 'src/store/actions/customer/asyncActions';
import { DELETE_CART } from "src/store/types/cart";
import { useAxiosClient } from "../Axios/useAxiosClient";

export const useTabs = () => {
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const isSignedIn = useSelector((state:State) => state.customer.isSignedIn);
    const history = useHistory();
    useEffect(() => {
        if(!isSignedIn) {
            history.push('/')
        }
    }, [isSignedIn]);

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