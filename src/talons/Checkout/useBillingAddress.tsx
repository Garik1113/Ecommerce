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

export const useBillingAddress = (props: Props) => {
    const { setStep } = props;
    const { axiosClient } = useAxiosClient();
    const [billingAndShippingAreTheSame, setBillingAndShippingAreTheSame] = useState<boolean>(true);
    const {cartId, cart } = useSelector((state: State) => state.cart);
    const { shippingAddress } = cart;
    const dispatch = useDispatch();

    const handleChange = useCallback((e, data) => {
        setBillingAndShippingAreTheSame(data.checked)
    }, []);
    const handleSubmit = useCallback(async(values: TAddress) => {
        const address: TAddress = billingAndShippingAreTheSame ? shippingAddress : values
        const response: AxiosResponse = await axiosClient("PUT", 'cart/add-billing-address', { address, cartId });
        console.log(response);
        await dispatch(getCartDetails());
        setStep("payment");
    }, [axiosClient, , cartId]);

    return {
        handleSubmit,
        billingAndShippingAreTheSame,
        handleChange
    }
}