import { useCallback, useMemo, useState } from 'react';
import { IProduct } from 'src/interfaces/product';
import get from 'lodash/get';
import { BACKEND_URL } from 'src/config/defaults';
import { useConfig } from '../Config/useConfig';

interface Props {
    item: IProduct
}
export const useItem = (props: Props) => {
    const { item } = props;
    const {price, name, discountedPrice } = item;
    const tepmWishlist: string | null = localStorage.getItem('wishlist') || "";
    const wishlist:string[] = tepmWishlist ? JSON.parse(tepmWishlist) : [];
    const [inWishList, setInWishList] = useState(wishlist.includes(item._id));
    const { getConfigValue } = useConfig()
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    const imageSrc = useMemo(() => {
        const image = get(item, "images[0].main_image", "");
        return `${BACKEND_URL}/product/${image}`
    }, [item]);

    const handleAddToWishlist = useCallback((id: string):void => {
        const tepmWishlist: string | null = localStorage.getItem('wishlist');
        const wishlist:string[] = tepmWishlist ? JSON.parse(tepmWishlist) : [];
        if(wishlist.includes(id)) {
            const filtered: string[] = wishlist.filter(e => e !== id);
            localStorage.setItem("wishlist", JSON.stringify(filtered));
            setInWishList(false);
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...wishlist, id]));
            setInWishList(true);
        }
    }, [inWishList, setInWishList]);

    return {
        handleAddToWishlist,
        imageSrc,
        name,
        price,
        inWishList,
        discountedPrice,
        currency
    }
}