import axios, { AxiosResponse } from 'axios';
import { Dispatch } from "react";
import { BACKEND_URL } from 'src/config/defaults';
import { State } from 'src/store';
import { CartActions, DELETE_CART, SET_CART_ID } from 'src/store/types/cart';
import { CustomerActionTypes, GET_CUSTOMER_DETAILS, SIGN_IN, SIGN_OUT } from "./actions";

export const signin = (token: string) => (dispatch:Dispatch<CustomerActionTypes>) => {
    dispatch({
        type: SIGN_IN,
        token
    })
}

export const signOut = () => (dispatch:Dispatch<CustomerActionTypes | CartActions>) => {
    dispatch({
        type: SIGN_OUT
    });
    dispatch({
        type: DELETE_CART
    });
}

export const getCustomerDetails = () => async(dispatch: Dispatch<CustomerActionTypes | CartActions>, getState: () => State) => {
    const token = getState().customer.token;
    const response: AxiosResponse = await axios.get(
        `${BACKEND_URL}/customers`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    );
    const { data, status } = response;
    if (status == 200) {
        dispatch({
            type: GET_CUSTOMER_DETAILS,
            customer: data.customer
        })
        dispatch({
            type: SET_CART_ID,
            cartId: data.customer.cartId
        });
    }
}