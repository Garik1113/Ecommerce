import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { IProduct } from "src/interfaces/product";
import { useAxiosClient } from "../Axios/useAxiosClient";

type Props = {
    categoryId: string
}

export const useProductSlider = (props:Props) => {
    const { categoryId } = props;
    const { axiosClient } = useAxiosClient();
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_products/?category_id=${categoryId}`);
        const { data } = response;
        if (data && data.products) {
            setProducts(data.products);
        }
    }, [axiosClient, setProducts]);

    useEffect(() => {
        fetchProducts()
    }, []);


    return {
        products
    }
}