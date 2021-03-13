import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/store";
import { getCartDetails } from "src/store/actions/cart/asyncActions";
import { TAddress } from "src/store/types/cart";
import { useAxiosClient } from "../Axios/useAxiosClient"

type Props = {
    setStep: any
}

export const useShippingAddress = (props: Props) => {
    const { setStep } = props;
    const { axiosClient } = useAxiosClient();
    const cartId = useSelector((state: State) => state.cart.cartId);
    const dispatch = useDispatch();
    const handleSubmit = useCallback(async(values: TAddress) => {
        console.log(values);
        const response: AxiosResponse = await axiosClient("PUT", 'cart/add-shipping-address', { address: values, cartId });
        console.log(response);
        await dispatch(getCartDetails());
        setStep("billing");
    }, [axiosClient, , cartId]);

    return {
        handleSubmit
    }
}