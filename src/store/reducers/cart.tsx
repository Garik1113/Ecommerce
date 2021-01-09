import { CartActions, TOGGLE_CART_DRAWER } from '../types/cart';

export interface CartInitialState {
    cartDrawer: string
}

const initialState:CartInitialState = {
    cartDrawer: ""
}

export const cartReducer = (state: CartInitialState = initialState, action:CartActions) => {
    switch(action.type) {
        case TOGGLE_CART_DRAWER:
            return {...state, cartDrawer: action.drawer};
        default: return state;
    }
};