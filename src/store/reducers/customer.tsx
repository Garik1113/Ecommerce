import { SIGN_IN, SIGN_OUT, CustomerActionTypes } from "../actions/customer/actions";
import { TCustomer } from "../types/customer";


export interface ICustomerInterface {
    customer: TCustomer,
    isSignedIn: boolean,
    token: string | null
}

const initialState: ICustomerInterface = {
    customer: {
        id: '',
        firstName: "",
        lastName: "",
        email: "",
        password: ''
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
            return {...state, 
                isSignedIn: false, 
                token: ""
            };
        default: return state;
    }
};