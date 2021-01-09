import { useCallback } from 'react';

const arrayFromString = (str: String):Array<string> => {
    return str.split(",")
} 
export const useItem = () => {
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
        handleAddToWishlist
    }
}