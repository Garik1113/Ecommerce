import { AxiosResponse } from "axios";
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { history, State } from "src/store";
import { signin } from "src/store/actions/customer/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient";

export const useSignin = () => {
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const handleSignin = useCallback(async(values) => {
        const response: AxiosResponse = await axiosClient("POST", `customers/signin`, values);
        const { data, status } = response;
        if (data.token && status == 200) {
            dispatch(signin(data.token));
            history.push('/')
        }
    }, [dispatch]);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/'); 
        }
    }, [isSignedIn]);

    return {
        handleSignin
    }
}