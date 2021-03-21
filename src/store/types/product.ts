export interface FilterVariant {
    id: number,
    label: string,
    value: string
}

export interface ProductFilterOption {
    id: number,
    title: string,
    value: string,
    variants: FilterVariant[]
}

export type Image = {
    thumbnail_image: string,
    small_image: string,
    main_image: string
}

export type TPrice = {
    currency: string,
    value: number
}


export type Discount = {
    type: string,
    value: number
}

export type AttributeValue = {
    id: number,
    label: string,
    images: Image[]
}

export type Attribute = {
    id: number,
    label: string,
    values: AttributeValue[]
}

export type TAttributeData = {
    attributeId: number,
    valueId: number
}

export type TProduct = {
    _id?: string,
    name: string,
    pageTitle: string,
    metaDescription: string,
    description: string,
    price: TPrice,
    discount: Discount,
    averageRating: number,
    categories: string[],
    attributes: Attribute[],
    images: Image[],
    quantity: number
};