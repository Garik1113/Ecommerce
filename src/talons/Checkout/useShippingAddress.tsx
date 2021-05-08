import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAddress } from "src/interfaces/address";
import { State } from "src/store";
import { submitCartShippingAddress } from "src/store/actions/cart/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient"

type Props = {
    setStep: any
}

export const useShippingAddress = (props: Props) => {
    const { setStep } = props;
    const { axiosClient } = useAxiosClient();
    const [addresses, setAddresses] = useState([]);
    const shippingAddress: IAddress = useSelector((state: State) => state.cart.cart.shippingAddress);
    const isSignedIn = useSelector((state:State) => state.customer.isSignedIn);
    const cartId = useSelector((state: State) => state.cart.cartId);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const fetchAddresses = useCallback(async() => {
        const { data, status }:AxiosResponse = await axiosClient("GET", 'customers/');
        if (status == 200 && data.customer) {
            setAddresses(data.customer.addresses);
        }
    }, [addresses]);
    const dispatch = useDispatch();
    
    const handleSubmit = useCallback(async(values: IAddress) => {
        await dispatch(submitCartShippingAddress(values));
        setStep({value: "billing", index: 1});
    }, [axiosClient, cartId]);

    useEffect(() => {
        fetchAddresses()
    }, [])
    return {
        handleSubmit,
        shippingAddress,
        isSignedIn,
        addresses,
        selectedAddress, 
        setSelectedAddress
    }
}