import { IAddress } from "./address";
import { IProduct } from "./product";

export type PaymentMethod = {
    methodName: string,
    methodCode: string,
    enabled: boolean
}

export type ShippingMethod = {
    methodName: string,
    methodCode: string,
    price: number,
    enabled: boolean
}

export interface ICartItemAttribute {
    attributeId: string,
    valueId: string
}

export interface ICartItem {
    _id: string
    quantity: number,
    product: IProduct
}

export interface ICart {
    _id: string,
    customerId: string,
    items: ICartItem[]
    paymentMethod: PaymentMethod | null,
    shippingMethod: ShippingMethod | null,
    shippingAddress: IAddress | null,
    billingAddress: IAddress | null,
    subTotal: number,
    totalQty: number,
    totalPrice: number
}