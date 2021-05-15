import { AxiosResponse } from "axios";
import { useCallback, useEffect,useState } from "react";
import { IProduct } from 'src/interfaces/product';
import { useAxiosClient } from "../Axios/useAxiosClient";
const initialProduct:IProduct = {
    _id: "",
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
    attributes: [],
    description: "",
    quantity: 0
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [fetchProduct])

    
    return {
        product
    }
}