import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { BACKEND_URL } from "src/config/defaults";
import { State } from "src/store";
import { CartActions, DELETE_CART, GET_CART_DETAILS, SET_CART_ID, TAddItemToCartData } from "src/store/types/cart";

export const createCart = () => async (dispatch: Dispatch<CartActions>) => {
    const response: AxiosResponse = await axios.post(`${BACKEND_URL}/cart/create`);
    const { data, status } = response;
    if (data.cartId && status == 200) {
        dispatch({
            type: SET_CART_ID,
            cartId: data.cartId
        });
    }
};
export const getCartDetails = () => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const cartId = getState().cart.cartId || getState().customer.customer.cartId;
    if (cartId) {
        const response: AxiosResponse = await axios.get(`${BACKEND_URL}/cart/${cartId}`);
        const { data, status } = response;
        if (data.cart && status == 200) {
            dispatch({
                type: GET_CART_DETAILS,
                cart: data.cart
            });
        }
    }
};


export const addProductToCart =  (addItemToCartData: TAddItemToCartData, headers: HeadersInit) => async (dispatch: Dispatch<CartActions>) => {
    const response: AxiosResponse = await axios.put(
        `${BACKEND_URL}/cart/add_item`,
        addItemToCartData,
        { headers }
    );
    const { data, status } = response;
    if (data.cartId && status == 200) {
        dispatch({
            type: SET_CART_ID,
            cartId: data.cartId
        });
    }
}
//84Cuqa
export const deleteCart = () => (dispatch: Dispatch<CartActions>) => {
    dispatch({
        type: DELETE_CART
    })
}