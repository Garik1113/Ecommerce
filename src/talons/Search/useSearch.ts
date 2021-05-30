import { AxiosResponse } from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { IProduct } from "src/interfaces/product";
import { useAxiosClient } from "../Axios/useAxiosClient"
import { useConfig } from '../Config/useConfig';

export const useSearch = () => {
    const { axiosClient } = useAxiosClient();
    const timeOutRef = useRef();
    const [results, setResults] = useState<IProduct[]>([]);
    
    const handleChange = useCallback(async(value:string) => {
        if (!value) {
            setResults([]);
            return
        }
        timeOutRef.current = setTimeout(async() => {
            clearTimeout(timeOutRef.current);
            const {status, data}: AxiosResponse = await axiosClient("GET", `products/search?search_query=${value}`);
            if (status == 200 && data.products) {
                setResults(data.products)
            }
        }, 310);
        
    }, [timeOutRef, setResults]);

    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )

    useEffect(() => {
        () => clearTimeout(timeOutRef.current)
    }, []);

    return {
        handleChange,
        results,
        setResults,
        currency
    }
}