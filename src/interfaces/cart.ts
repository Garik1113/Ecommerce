import { IAddress } from "./address";
import { IProduct } from "./product";

export interface ICartItemAttribute {
    attributeId: string,
    valueId: string
}

export interface ICartItem {
    _id: string
    quantity: number,
    product: IProduct,
    cartItemAttributes: ICartItemAttribute[]
}

export interface ICart {
    _id: string,
    customerId: string,
    items: ICartItem[]
    paymentMethod: string,
    shippingAddress: IAddress,
    billingAddress: IAddress,
    totalQty: number,
    totalPrice: number
}