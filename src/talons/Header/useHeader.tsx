import { InMemoryCache } from '@apollo/client';
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { TCategory } from 'src/store/types/category'
import { useAxiosClient } from '../Axios/useAxiosClient'


export const useHeader = () => {
    const { axiosClient } = useAxiosClient();
    const [categories, setCategories] = useState<TCategory[]>([]);
    
    const fetchCategories = useCallback(async() => {

       const response: AxiosResponse = await axiosClient("GET", "http://localhost:5000/categories");
       const { data } = response;
       if (data && data.categories) {
           setCategories(data.categories)
       }
    }, [])

    useEffect(() => {
        fetchCategories();
    }, [])
    return {
        categories
    }
}