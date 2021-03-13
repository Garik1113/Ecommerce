import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/store";
import { getCartDetails } from "src/store/actions/cart/asyncActions";
import { TAddress } from "src/store/types/cart";
import { useAxiosClient } from "../Axios/useAxiosClient"

type Props = {
    setStep: any
}

export const usePaymentMethod = (props: Props) => {
    const { setStep } = props;
    const [method, setMethod] = useState("credit_cart");
    const { axiosClient } = useAxiosClient();
    const [billingAndShippingAreTheSame, setBillingAndShippingAreTheSame] = useState<boolean>(true);
    const {cartId, cart } = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();

    const handleChange = useCallback((e, data) => {
        setBillingAndShippingAreTheSame(data.checked)
    }, []);
    const handleSubmit = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("PUT", 'cart/add-payment-method', { method, cartId });
        await dispatch(getCartDetails());
        setStep("order");
    }, [axiosClient, , cartId, method, setMethod]);

    return {
        handleSubmit,
        billingAndShippingAreTheSame,
        handleChange,
        method,
        setMethod
    }
}