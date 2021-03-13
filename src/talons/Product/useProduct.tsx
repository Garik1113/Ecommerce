import { AxiosResponse } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TProduct } from "src/store/types/product";
import { useAxiosClient } from "../Axios/useAxiosClient";
const initialProduct:TProduct = {
    name: "",
    images: [],
    price: {
        currency: "USD",
        value: 0
    },
    categories: [],
    pageTitle: "", 
    metaDescription: "", 
    discount: {
        type: "percent",
        value: 0
    },
    averageRating: 0, 
    attributes: []
}
type Props = {
    id: string
}

export const useProduct = ({id}: Props) => {
    const { axiosClient } = useAxiosClient()
    const [product, setProduct] = useState(initialProduct);

    const fetchProduct = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `products/get_product/${id}`);
        const { data } = response;
        
        if (data && data.product) {
            setProduct(data.product);
            return data.product;
        }
    }, [id]);

    useEffect(() => {
        fetchProduct()
    }, [id]);
    
    return {
        product
    }
}