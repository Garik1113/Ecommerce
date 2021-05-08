import { AxiosResponse } from 'axios';
import { Dispatch, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ICategory } from 'src/interfaces/category';
import { State } from 'src/store';
import { toggleDrawer } from 'src/store/actions/app/actions';
import { AppActions } from 'src/store/types/app';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useNavigation = () => {
    const isActive:string = useSelector((state:State) => state.app.drawer);
    const isSignidIn = useSelector((state: State) => state.customer.isSignedIn);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const dispatch:Dispatch<AppActions> = useDispatch()
    const { axiosClient } = useAxiosClient();
    const fetchCategories = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `categories/`);
        const { data } = response;
        if (data && data.categories) {
            setCategories(data.categories)
        }
    }, [axiosClient]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCloseDrawer = useCallback(() => {
        dispatch(toggleDrawer(""))
    }, [dispatch, toggleDrawer])
    return {
        isActive,
        categories,
        handleCloseDrawer,
        isSignidIn
    }
}