import { useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardNumberElement, StripeElements } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaymentMethod } from 'src/interfaces/cart';
import { State } from 'src/store';
import { submitCartPaymentMethod } from 'src/store/actions/cart/asyncActions';
import { useAxiosClient } from '../Axios/useAxiosClient';

type Props = {
    setStep: any,
    method: PaymentMethod
}

export const useCreditCard = (props: Props) => {
    const { setStep, method } = props;
    const { axiosClient } = useAxiosClient();
    const cartId = useSelector((state: State) => state.cart.cartId);
    const elements:StripeElements | null = useElements();
    const dispatch = useDispatch();
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
                    await dispatch(submitCartPaymentMethod(method))
                    setStep({ value: "order", index: 3 });
                }
            }
        }
    }, [axiosClient, elements, cartId, method]);

    return {
        handleSubmit
    }
}