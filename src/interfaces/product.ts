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

export interface IAttributeValue {
    _id: string,
    label: String,
    images: IImage[]
}

export interface IAttribute {
    _id: string,
    label: String,
    values: IAttributeValue[]
}

export interface IProduct {
    _id: string,
    name: string,
    pageTitle: string,
    description: string,
    metaDescription: string,
    price: number,
    discount: number,
    discountedPrice: number,
    averageRating: number,
    categories: string[],
    attributes: IAttribute[],
    images: IImage[],
    quantity: number
}