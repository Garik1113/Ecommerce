import { Dispatch } from "react";
import { CustomerActionTypes, SIGN_IN, SIGN_OUT } from "./actions";

export const signin = (token: string) => (dispatch:Dispatch<CustomerActionTypes>) => {
    dispatch({
        type: SIGN_IN,
        token
    })
}

export const signOut = () => (dispatch:Dispatch<CustomerActionTypes>) => {
    dispatch({
        type: SIGN_OUT
    })
}