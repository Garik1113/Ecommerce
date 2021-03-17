import { IAddress } from "./address";

export interface ICustomerInput {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    addresses: IAddress[],
    cartId: string
}

export interface ICustomer {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    addresses: IAddress[],
    cartId: string
}