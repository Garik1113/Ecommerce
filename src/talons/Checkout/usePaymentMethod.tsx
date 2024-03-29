import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentMethod } from "src/interfaces/cart";
import { State } from "src/store";
import { submitCartPaymentMethod } from "src/store/actions/cart/asyncActions";
import { useAxiosClient } from "../Axios/useAxiosClient"
import { useConfig } from "../Config/useConfig";

type Props = {
    setStep: any
}
const getDefaultpaymentMethod = (methods: PaymentMethod[]):PaymentMethod | null => {
    return methods && methods.length ? methods.find(e => e.enabled) || null : null
}

export const usePaymentMethod = (props: Props) => {
    const { setStep } = props;
    const { getConfigValue } = useConfig();
    const paymentMethods: PaymentMethod[] = getConfigValue("paymentMethods");
    const [method, setMethod] = useState<PaymentMethod | null>(getDefaultpaymentMethod(paymentMethods));
    const { axiosClient } = useAxiosClient();
    const {cartId } = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();
    const handleSubmit = useCallback(async() => {
        if (method) {
            await dispatch(submitCartPaymentMethod(method))
            setStep({ value: "order", index: 5 });
        }
    }, [axiosClient, cartId, method, setMethod, submitCartPaymentMethod]);

    return {
        handleSubmit,
        method,
        setMethod,
        paymentMethods
    }
}