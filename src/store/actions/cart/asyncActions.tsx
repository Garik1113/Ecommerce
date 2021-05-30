import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { BACKEND_URL } from "src/config/defaults";
import { IAddress } from "src/interfaces/address";
import { ShippingMethod, PaymentMethod } from "src/interfaces/cart";
import { State } from "src/store";
import { getAxiosClient } from "src/store/Axios/axiosClient";
import { CartActions, DELETE_CART, GET_CART_DETAILS, SET_CART_ID } from "src/store/types/cart";

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


export const addProductToCart = (productId: string, quantity: number,) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient }  = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/add_item', { cartId: cartId || "", productId, quantity });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const changeItemQuantity = (itemId: string, quantity: number) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/quantity', { cartId, itemId, quantity });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const submitCartBillingAddress = (address: IAddress) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/add-billing-address', { address, cartId });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const submitCartShippingAddress = (address: IAddress) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/add-shipping-address', { address, cartId });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const submitCartPaymentMethod = (method: PaymentMethod) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/add-payment-method', { method, cartId });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const submitCartShippingMethod = (method: ShippingMethod) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/add-shipping-method', { method, cartId });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const deleteCartItem = (itemId: string) => async (dispatch: Dispatch<CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const { cartId } = getState().cart;
    const { axiosClient } = getAxiosClient(token);
    const response: AxiosResponse = await axiosClient("PUT", 'cart/delete', { cartId, itemId });
    const { data, status } = response;
    if (status == 200 && data.cart) {
        dispatch({
            type: GET_CART_DETAILS,
            cart: data.cart
        })
    }
}

export const deleteCart = () => (dispatch: Dispatch<CartActions>) => {
    dispatch({
        type: DELETE_CART
    })
}