export interface IAddress {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    state: string,
    city: string,
    street: string,
    phone: string,
    zip: number,
    firstAddress: string,
    secondAddress: string,
    company: string,
    isBillingAddress: boolean,
    isShippingAddress: boolean
}