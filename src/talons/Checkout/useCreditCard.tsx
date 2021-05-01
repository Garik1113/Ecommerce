import { useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardNumberElement, StripeElements } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'src/store';
import { useAxiosClient } from '../Axios/useAxiosClient';

type Props = {
    setStep: any
}

export const useCreditCard = (props: Props) => {
    const { setStep } = props;
    const { axiosClient } = useAxiosClient();
    const cartId = useSelector((state: State) => state.cart.cartId);
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
                    await axiosClient("PUT", 'cart/add-stripe-id', { cartId, stripePaymentMethodId: paymentMethod.id });
                    setStep({ value: "order", index: 3 });
                }
            }
        }
    }, [axiosClient, elements, cartId]);

    return {
        handleSubmit
    }
}