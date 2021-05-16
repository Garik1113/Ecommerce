import { AxiosResponse } from "axios";
import { useCallback, useEffect,useState } from "react";
import { IProduct } from 'src/interfaces/product';
import { useAxiosClient } from "../Axios/useAxiosClient";

type Props = {
    id: string
}

export const useProduct = ({id}: Props) => {
    const { axiosClient } = useAxiosClient()
    const [product, setProduct] = useState<IProduct | null>(null);

    const fetchProduct = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_product/${id}`);
        const { data } = response;
        if (data && data.product) {
            setProduct(data.product);
        }
    }, [id, setProduct]);

    useEffect(() => {
        fetchProduct()
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [fetchProduct])

    return {
        product
    }
}