import { useCallback, useState } from "react";
import { useSelector } from "react-redux"
import { State } from "src/store"

export type TStep = {
    value: String,
    index: number
}

export const useCheckout = () => {
    const cart = useSelector((state: State) => state.cart.cart);
    const [step, setStep] = useState<TStep>({value: "shipping", index: 0});
    const { items,  totalPrice, shippingAddress, billingAddress, paymentMethod } = cart;
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
        setStep,
        shippingAddress, 
        billingAddress, 
        paymentMethod 
    }
}