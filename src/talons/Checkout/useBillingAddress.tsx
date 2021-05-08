import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAddress } from "src/interfaces/address";
import { State } from "src/store";
import { getCartDetails, submitCartBillingAddress } from "src/store/actions/cart/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient"

type Props = {
    setStep: any
}

export const useBillingAddress = (props: Props) => {
    const { setStep } = props;
    const { axiosClient } = useAxiosClient();
    const [billingAndShippingAreTheSame, setBillingAndShippingAreTheSame] = useState<boolean>(true);
    const {cartId, cart } = useSelector((state: State) => state.cart);
    const isSignedIn = useSelector((state:State) => state.customer.isSignedIn);
    const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
    const [addresses, setAddresses] = useState([]);
    const { shippingAddress, billingAddress } = cart;
    const dispatch = useDispatch();

    const handleChange = useCallback((e, data) => {
        setBillingAndShippingAreTheSame(data.checked)
    }, []);
    const fetchAddresses = useCallback(async() => {
        const { data, status }:AxiosResponse = await axiosClient("GET", 'customers/');
        if (status == 200 && data.customer) {
            setAddresses(data.customer.addresses);
        }
    }, [addresses]);
    const handleSubmit = useCallback(async(values: IAddress | null) => {
        let address: IAddress | null = null;
        if (billingAndShippingAreTheSame) {
            address = shippingAddress
        }
        if (values) {
            address = values
        }
        if (selectedAddress) {
            address = selectedAddress
        }
        if (address) {
            await dispatch(submitCartBillingAddress(address))
            setStep({value: "shipping_method", index: 2});
        }
    }, [
        axiosClient, 
        cartId, 
        billingAndShippingAreTheSame, 
        shippingAddress, 
        selectedAddress,
        submitCartBillingAddress
    ]);

    useEffect(() => {
        fetchAddresses()
    }, [])
    return {
        handleSubmit,
        billingAndShippingAreTheSame,
        handleChange,
        billingAddress,
        shippingAddress,
        isSignedIn,
        addresses,
        selectedAddress, 
        setSelectedAddress
    }
}