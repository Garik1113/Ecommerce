import { ICustomer } from 'src/interfaces/customer';
import { SIGN_IN, SIGN_OUT, CustomerActionTypes, GET_CUSTOMER_DETAILS } from "../actions/customer/actions";


export interface ICustomerInterface {
    customer: ICustomer,
    isSignedIn: boolean,
    token: string | null
}

const initialState: ICustomerInterface = {
    customer: {
        _id: '',
        firstName: "",
        lastName: "",
        email: "",
        password: '',
        cartId: "",
        addresses: []
    },
    token: localStorage.getItem('token'),
    isSignedIn: !!localStorage.getItem('token')
}

export const customerReducer = (state: ICustomerInterface = initialState, action: CustomerActionTypes ) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.setItem("token", action.token);
            return {...state,
                token: action.token,
                isSignedIn: true
            };
        case SIGN_OUT:
            localStorage.removeItem('token');
            localStorage.removeItem("cartId");
            return {...initialState, token: "", isSignedIn: false};
        case GET_CUSTOMER_DETAILS:
            if (action.customer && action.customer.cartId) {
                localStorage.setItem("cartId", action.customer.cartId)
            }
            return {
                ...state,
                customer: action.customer
            }
        default: return state;
    }
};