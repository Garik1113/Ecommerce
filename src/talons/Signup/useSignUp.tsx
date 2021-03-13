import { AxiosResponse } from "axios"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { State } from "src/store"
import { signin } from "src/store/actions/customer/asyncActions"
import { SET_CART_ID } from "src/store/types/cart"
import { useAxiosClient } from "../Axios/useAxiosClient"

export const useSignUp = () => {
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const history = useHistory();
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const handleSignup = useCallback(async(values) => {
        const response: AxiosResponse = await axiosClient("POST", `customers/signup`, values);
        const { data, status } = response;
        if (data.customer && status == 200) {
            const singinData = {
                email: values.email,
                password: values.password
            };
            const singinResponse: AxiosResponse = await axiosClient("POST", `customers/signin`, singinData);
            const { data, status } = singinResponse;
            dispatch({
                type: SET_CART_ID,
                cartId: data.customer.cartId
            });
            if (data.token && status == 200) {
                dispatch(signin(data.token));
                history.push('/');
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/'); 
        }
    }, [isSignedIn]);
    
    return {
        handleSignup
    }
}