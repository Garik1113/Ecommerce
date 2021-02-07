import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router"
import { BACK_END_URL } from "src/config/defaults";
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

export const useProduct = () => {
    const params:any = useParams();
    const { id } = params;
    const { axiosClient } = useAxiosClient()
    const [product, setProduct] = useState<TProduct>(initialProduct);

    const fetchProduct = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `${BACK_END_URL}/products/get_product/${id}`);
        const { data } = response;
        
        if (data && data.product) {
            setProduct(data.product)
        }
    }, [id]);

    useEffect(() => {
        fetchProduct()
    }, [id]);
    
    return {
        product
    }
}