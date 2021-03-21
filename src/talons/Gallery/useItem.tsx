import { useCallback, useMemo } from 'react';
import { IProduct } from 'src/interfaces/product';
import get from 'lodash/get';
import { IMAGE_BASE_URL } from 'src/config/defaults';

const arrayFromString = (str: String):Array<string> => {
    return str.split(",")
}

interface Props {
    item: IProduct
}
export const useItem = (props: Props) => {
    const { item } = props;
    const {price, name } = item;
    const { currency, value } = price;
    const imageSrc = useMemo(() => {
        const image = get(item, "images[0].main_image", "");
        return `${IMAGE_BASE_URL}/products/${image}`
    }, [item]);

    const handleAddToWishlist = useCallback((id: string):void => {
        const wishlist: String | Array<String> = localStorage.getItem('wishlist') || [];

        if(wishlist instanceof Array) {
            wishlist.push(id);
            localStorage.setItem('wishlist', String(wishlist)) ;
        } else {
           const arr = arrayFromString(wishlist);
           arr.push(id);
           localStorage.setItem('wishlist', String(arr));
        }
    }, []);

    return {
        handleAddToWishlist,
        imageSrc,
        name,
        currency,
        value
    }
}