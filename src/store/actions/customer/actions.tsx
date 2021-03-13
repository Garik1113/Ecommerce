import { TCustomer } from "src/store/types/customer";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

interface SigninAction {
    type: typeof SIGN_IN,
    token: string
}

interface SignOutAction {
    type: typeof SIGN_OUT
}

export type CustomerActionTypes = 
    | SigninAction
    | SignOutAction