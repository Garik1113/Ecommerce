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
    const shippingAddress: TAddress = useSelector((state: State) => state.cart.cart.shippingAddress)
    const cartId = useSelector((state: State) => state.cart.cartId);
    const dispatch = useDispatch();
    const handleSubmit = useCallback(async(values: TAddress) => {
        await axiosClient("PUT", 'cart/add-shipping-address', { address: values, cartId });
        await dispatch(getCartDetails());
        setStep({value: "billing", index: 1});
    }, [axiosClient, cartId]);

    return {
        handleSubmit,
        shippingAddress
    }
}