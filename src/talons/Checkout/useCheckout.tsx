import { useCallback, useState } from "react";
import { useSelector } from "react-redux"
import { State } from "src/store"

export type TStep = {
    value: String,
    index: number
}

export const useCheckout = () => {
    const cart = useSelector((state: State) => state.cart.cart);
    const [step, setStep] = useState<TStep>({value: "order", index: 3});
    const { items,  totalPrice } = cart;
    const [billingAndShippingAreTheSame, setBillingAndShippingAreTheSame] = useState<boolean>(true);
    const handleChange = useCallback((e, data) => {
        setBillingAndShippingAreTheSame(data.checked)
    }, []);

    return {
        items: items || [],
        totalPrice,
        handleChange,
        billingAndShippingAreTheSame,
        step,
        setStep
    }
}