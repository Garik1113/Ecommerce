import { AxiosResponse } from "axios"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { State } from "src/store"
import { signin } from "src/store/actions/customer/asyncActions"
import { SET_CART_ID } from "src/store/types/cart"
import { useAxiosClient } from "../Axios/useAxiosClient"

export const useSignUp = () => {
    const { axiosClient } = useAxiosClient();
    const [message, setMessage] = useState("")
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
            dispatch({
                type: SET_CART_ID,
                cartId: data.customer.cartId
            });
            const singinResponse: AxiosResponse = await axiosClient("POST", `customers/signin`, singinData);
            const { data: signInData, status: signInStatus } = singinResponse;
            if ( signInData.token && signInStatus == 200) {
                dispatch(signin(signInData.token));
                history.push('/');
            }
        } else if(status == 203 && data.status == "error") {
            setMessage(data.message);
        }
    }, [dispatch]);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/'); 
        }
    }, [isSignedIn]);
    
    return {
        handleSignup,
        message
    }
}