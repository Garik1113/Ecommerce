import { useState } from 'react';
// const productFilters:
import { ProductFilterOption } from '../../store/types/product';

const filters: ProductFilterOption[] = [
    {
        id: 1,
        title: "Price Range",
        variants: [
            {
                id: 1,
                value: "0 - 10000"
            },
            {
                id: 2,
                value: "10000 - 100000"
            },
            {
                id: 3,
                value: "100000 - 1000000"
            }
        ]
    },
    {
        id: 2,
        title: "Availability",
        variants: [
            {
                id: 1,
                value: "In stock"
            },
            {
                id: 2,
                value: "Out of stock"
            },
            
        ]
    },
    {
        id: 3,
        title: "Brand",
        variants: [
            {
                id: 1,
                value: "Adidas"
            },
            {
                id: 2,
                value: "Nike"
            },
            {
                id: 3,
                value: "New Look"
            }
        ]
    },
]


export const useFilter = () => {
    const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);
    const [isOpenStockFilter, setIsOpenStockFilter] = useState(false);
    const [isOpenBrandFilter, setIsOpenBrandFilter] = useState(false);

    return {
        filters
    }
}