import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient';
import { IOrder } from 'src/interfaces/order';

export const useOrders = () => {
    const { axiosClient } = useAxiosClient();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const fetchOrders = useCallback(async() => {
        const {data, status}:AxiosResponse = await axiosClient("GET", 'orders/');
        if (status == 200 && data.orders) {
            setOrders(data.orders)
        }
    }, [orders]);

    useEffect(() => {
        fetchOrders()
    }, []);

    return {
        orders
    }
}