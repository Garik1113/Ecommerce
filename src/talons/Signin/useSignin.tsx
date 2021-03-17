import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { history, State } from "src/store";
import { getCartDetails } from 'src/store/actions/cart/asyncActions';
import { getCustomerDetails, signin } from "src/store/actions/customer/asyncActions";
import { DELETE_CART } from 'src/store/types/cart';
import { useAxiosClient } from "../Axios/useAxiosClient";

export const useSignin = () => {
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const handleSignin = useCallback(async(values) => {
        dispatch({
            type: DELETE_CART
        });
        const response: AxiosResponse = await axiosClient("POST", `customers/signin`, values);
        const { data, status } = response;
        if (data.token && status == 200) {
            dispatch(signin(data.token));
            await dispatch(getCustomerDetails());
            dispatch(getCartDetails())
            history.push('/')
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
        handleSignin,
        message
    }
}