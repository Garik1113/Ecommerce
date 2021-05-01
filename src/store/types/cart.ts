import { ICart } from 'src/interfaces/cart';

export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER';
export const GET_CART_DETAILS = "GET_CART_DETAILS";
export const SET_CART_ID = "SET_CART_ID";
export const DELETE_CART = "DELETE_CART";
export const NULLIFY_CART = "NULLIFY_CART"


export type TAddItemToCartData = {
    productId: String,
    quantity: number,
    cartId: string
}

export interface ToggleCartDrawer {
    type: typeof TOGGLE_CART_DRAWER,
    drawer: string
}

export interface CreateCart {
    type: typeof SET_CART_ID,
    cartId: string
}

export interface GetCartDetails {
    type: typeof GET_CART_DETAILS,
    cart: ICart
}

export interface deleteCart {
    type: typeof DELETE_CART
}

export interface nullifyCart {
    type: typeof NULLIFY_CART
}

export type CartActions = 
    | ToggleCartDrawer
    | CreateCart
    | deleteCart
    | GetCartDetails
    | nullifyCart
