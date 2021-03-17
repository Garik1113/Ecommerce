import { TCustomer } from "src/store/types/customer";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const GET_CUSTOMER_DETAILS = "GET_CUSTOMER_DETAILS";

interface SigninAction {
    type: typeof SIGN_IN,
    token: string
}

interface SignOutAction {
    type: typeof SIGN_OUT
}

interface GetUserDetails {
    type: typeof GET_CUSTOMER_DETAILS,
    customer: TCustomer
}

export type CustomerActionTypes = 
    | SigninAction
    | SignOutAction
    | GetUserDetails