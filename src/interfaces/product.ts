export interface IPrice {
    currency: string,
    value: number
}

export interface IDiscount {
    type: string,
    value: number
}

export interface IImage {
    _id: string,
    thumbnail_image: string,
    small_image: string,
    main_image: string
}

export interface IValue {
    _id: string,
    name: String
}

export interface IAttribute {
    _id: string,
    name: String,
    type: string,
    values: IValue[]
}

export type ConfigurableAttribute = {
    attribute: IAttribute,
    selectedValue: IValue
}


export interface IProduct {
    _id: string,
    name: string,
    categories: string[],
    pageTitle: string,
    description: string,
    metaDescription: string,
    quantity: number,
    price: number,
    discount: number,
    discountedPrice: number,
    averageRating: number,
    configurableAttributes: ConfigurableAttribute[],
    images: IImage[]
}