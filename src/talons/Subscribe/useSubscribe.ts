import { useCallback, useState } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient'

export const useSubscribe = () => {
    const { axiosClient } = useAxiosClient();
    const [message, setMessage] = useState("");
    const subscribe = useCallback(async(productId:string) => {
        setMessage("")
        const response = await axiosClient("POST", 'productSubscriptions/', { productId });
        setMessage("Հաջողությամբ գրանցվեցիք")
        console.log(response)
    }, [axiosClient]);

    return {
        subscribe,
        message
    }
}