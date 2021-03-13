import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "src/config/defaults";
import { State } from "src/store";

export const useAxiosClient = () => {
    const token = useSelector((state: State) => state.customer.token);

    // const dispatch = useDispatch();
    const headers = useMemo(() => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, []);

    const axiosClient = useCallback( async(method: Method, url: string, data?: any) => {
        const config: AxiosRequestConfig = {
            headers,
            method,
            url: `${BACKEND_URL}/${url}`,
            data
        }
        const response: AxiosResponse = await axios(config);
        
        // if (response.status !== 200) {
        //     dispatch(handleThrowError(response.data))
        // }
        
        return response;
    }, [headers]);

    return {
        axiosClient
    }
}