import { useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardNumberElement, StripeElements } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useCreditCard = () => {
    const { axiosClient } = useAxiosClient();
    const elements:StripeElements | null = useElements();
    const stripe = useStripe();
    const handleSubmit = useCallback(async(event) => {
        event.preventDefault();
        if (elements) {
            const card:StripeCardNumberElement | null = elements.getElement("cardNumber");
            if (card) {
                const response = await stripe?.createPaymentMethod({type: "card", card});
                const paymentMethod = response?.paymentMethod;
                if (paymentMethod) {
                    await axiosClient("POST", 'stripe/payment', { id: paymentMethod.id, amount: 1000 });
                }
            }
        }
    }, [axiosClient, elements]);

    return {
        handleSubmit
    }
}