import { TPrice, TProduct } from "./product";

export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER';
export const GET_CART_DETAILS = "GET_CART_DETAILS";
export const SET_CART_ID = "SET_CART_ID";
export const DELETE_CART = "DELETE_CART";

export type TAddress = {
    firstName: string,
    lastName: string,
    country: string,
    state?: string,
    city: string,
    street?: string,
    phone: string,
    zip: number,
    firstAddress: string,
    secondAddress?: string,
    company?: string
}

export type TCartItemAttribute = {
    _id?: string,
    attributeId: string,
    valueId: string
}

export type TCartItem = {
    _id: string,
    id: string,
    quantity: number,
    product: TProduct,
    cartItemAttributes: TCartItemAttribute[]
}


export type TCart = {
    _id?: string,
    items: TCartItem[],
    paymentMethod: string,
    shippingAddress: TAddress,
    billingAddress: TAddress,
    totalQty: number,
    totalPrice: TPrice,
    userId?: string
}


export type TAddItemToCartData = {
    productId: String,
    quantity: number,
    cartItemAttributes: TCartItemAttribute[] | null,
    cartId: string | null
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
    cart: TCart
}

export interface deleteCart {
    type: typeof DELETE_CART
}



export type CartActions = 
    | ToggleCartDrawer
    | CreateCart
    | deleteCart
    | GetCartDetails
