import { AxiosResponse } from "axios";
import { useCallback, useEffect, useRef, useState } from "react"
import { IProduct } from "src/interfaces/product";
import { useAxiosClient } from "../Axios/useAxiosClient"
import { usePageControl } from "../PageControl/usePageControl";

export const useSearch = () => {
    const { axiosClient } = useAxiosClient();
    const { addQueryString, pageControl } = usePageControl();
    const timeOutRef = useRef();
    const [results, setResults] = useState<IProduct[]>([]);
    
    const handleChange = useCallback(async(value:string) => {
        timeOutRef.current = setTimeout(async() => {
            clearTimeout(timeOutRef.current)
            addQueryString("product_name", value);
            const {status, data}: AxiosResponse = await axiosClient("GET", `products/search?search_query=${value}`);
            if (status == 200 && data.products) {
                setResults(data.products)
            }
        }, 310);
        
    }, [timeOutRef, setResults]);

    useEffect(() => {
        () => clearTimeout(timeOutRef.current)
    }, [])

    return {
        handleChange,
        results
    }
}