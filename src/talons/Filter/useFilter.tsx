import { useState } from 'react';
// const productFilters:
import { ProductFilterOption } from '../../store/types/product';

const filters: ProductFilterOption[] = [
    {
        id: 1,
        title: "Price Range",
        value: "price-range",
        variants: [
            {
                id: 1,
                label: "0 - 10000",
                value: "0-10000"
            },
            {
                id: 2,
                label: "10000 - 100000",
                value: "10000-100000"
            },
            {
                id: 3,
                label: "100000 - 1000000",
                value: "100000-1000000"
            }
        ]
    },
    {
        id: 2,
        title: "Availability",
        value: 'availability',
        variants: [
            {
                id: 1,
                label: "In stock",
                value: "in-stock"
            },
            {
                id: 2,
                label: "Out of stock",
                value: "out-of-stock"
            },
            
        ]
    }
]


export const useFilter = () => {
    const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);
    const [isOpenStockFilter, setIsOpenStockFilter] = useState(false);
    const [isOpenBrandFilter, setIsOpenBrandFilter] = useState(false);

    return {
        filters
    }
}