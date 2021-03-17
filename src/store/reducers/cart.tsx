import { ICart } from 'src/interfaces/cart';
import { CartActions, DELETE_CART, GET_CART_DETAILS, NULLIFY_CART, SET_CART_ID,  TOGGLE_CART_DRAWER } from '../types/cart';

export interface CartInitialState {
    cartDrawer: string,
    cart: ICart,
    cartId: string
}

const initialState: CartInitialState = {
    cartDrawer: "",
    cartId: localStorage.getItem("cartId") || "",
    cart: {
        _id: "",
        customerId: "",
        items: [],
        totalPrice: {
            currency: "",
            value: 0
        },
        totalQty: 0,
        paymentMethod: "",
        shippingAddress: {
            firstAddress: "",
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            phone: "",
            zip: "",
            email: "",
            state: "",
            street: "",
            secondAddress: "",
            company: ""
        },
        billingAddress: {
            firstAddress: "",
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            phone: "",
            zip: "",
            email: "",
            state: "",
            street: "",
            secondAddress: "",
            company: ""
        }
    }
}

export const cartReducer = (state: CartInitialState = initialState, action:CartActions) => {
    switch(action.type) {
        case TOGGLE_CART_DRAWER:
            return {...state, cartDrawer: action.drawer};
        case GET_CART_DETAILS:
            return {...state, cart: action.cart};
        case SET_CART_ID:
            localStorage.setItem("cartId", action.cartId);
            return {...state, cartId: action.cartId};
        case DELETE_CART:
            localStorage.removeItem('cartId');
            return initialState;
        case NULLIFY_CART:
            return initialState
        default: return state;
    }
};