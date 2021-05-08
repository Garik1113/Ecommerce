import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShippingMethod } from "src/interfaces/cart";
import { State } from "src/store";
import { submitCartPaymentMethod, submitCartShippingMethod } from "src/store/actions/cart/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient"
import { useConfig } from "../Config/useConfig";

type Props = {
    setStep: any
}
const getDefaultShippingMethod = (methods: ShippingMethod[]):ShippingMethod | null => {
    return methods && methods.length ? methods.find(e => e.enabled) || null : null
}

export const useShippingMethod = (props: Props) => {
    const { setStep } = props;
    const { getConfigValue } = useConfig();
    const { cartId, cart:cartDetails } = useSelector((state: State) => state.cart);
    const shippingMethods: ShippingMethod[] = getConfigValue("shippingMethods");
    const [method, setMethod] = useState<ShippingMethod | null>(cartDetails.shippingMethod || getDefaultShippingMethod(shippingMethods));
    const { axiosClient } = useAxiosClient();
    const dispatch = useDispatch();


    const handleSubmit = useCallback(async() => {
        if (method) {
            await dispatch(submitCartShippingMethod(method))
            setStep({ value: "payment", index: 4 });
        }
    }, [axiosClient, cartId, method, setMethod, submitCartPaymentMethod]);

    return {
        handleSubmit,
        method,
        setMethod,
        shippingMethods
    }
}