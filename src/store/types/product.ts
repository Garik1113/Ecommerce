export interface Price {
    currency: string,
    value: number
}

export interface Image {
    image_path: string,
    small_image_path: string,
    thumbnail_path: string
}

export interface Product {
    __type: string,
    id: string,
    title: string,
    description: string,
    price: Price,
    gallery: Image[],
    category_id: string,
    main_image: string
}

type OptionVariant = {
    id: number,
    title: string
}

interface Option {
    option_id: number,
    title: string,
    variant: OptionVariant[]
}

export interface ConfigurableProduct extends Product {
    options: Option[]
}

export interface FilterVariant {
    id: number,
    value: string
}

export interface ProductFilterOption {
    id: number,
    title: string,
    variants: FilterVariant[]
}

