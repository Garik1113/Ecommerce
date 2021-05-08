import { IAddress } from './address';
import { PaymentMethod, ShippingMethod } from './cart';
import { IPrice, IProduct } from './product';

export interface ICartItemAttribute  {
    attributeId: string,
    valueId: string
}

export interface ICartItem {
    _id: string,
    quantity: number,
    product: IProduct,
    cartItemAttributes: ICartItemAttribute[]
}

export interface IOrder {
    _id: string,
    cartId: string,
    customerId: string,
    items: ICartItem[],
    paymentMethod: PaymentMethod,
    shippingMethod: ShippingMethod,
    currency: any,
    shippingAddress: IAddress,
    billingAddress: IAddress,
    totalQty: number,
    totalPrice: IPrice,
    status: string
    createdAt: string
}