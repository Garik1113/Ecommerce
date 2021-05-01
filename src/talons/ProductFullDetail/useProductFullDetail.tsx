import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { addProductToCart, getCartDetails } from 'src/store/actions/cart/asyncActions';
import { TAddItemToCartData } from 'src/store/types/cart';
import { ProductProps } from '../../components/ProductFullDetail/productFullDetail';
    

export const useProductFullDetail = (props: ProductProps) => {
    const { product } = props;
    const { name, price, images, configurableAttributes, metaDescription } = product;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId || state.customer.customer.cartId);
    const [isSubmittingReview, setIsSubmittingReview] = useState(false)
    const token = useSelector((state: State) => state.customer.token);
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const dispatch = useDispatch();
    const headers = useMemo(() => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, [token]);
    const [quantity, setQuantity] = useState<number>(1);
    const handleIncrementQuantity = useCallback(() => {
        setQuantity(quantity+1)
    },[quantity, setQuantity]);

    const handleDecrementQuantity = useCallback(() => {
        const num = quantity - 1;
        if (num >= 1) {
            setQuantity(num);
        }
    },[quantity, setQuantity]);
    
    const handleAddProductToCart = useCallback(async() => {
        if (product._id) {
            const productData = {
                productId: product._id,
                quantity,
            };
            const addItemToCartData: TAddItemToCartData = { ...productData, cartId};
            await dispatch(addProductToCart(addItemToCartData, headers));
            dispatch(getCartDetails());
        }
    },[
        product, 
        addProductToCart, 
        dispatch, 
        cartId,
        quantity
    ]);

    return {
        handleIncrementQuantity,
        handleDecrementQuantity,
        quantity,
        handleAddProductToCart,
        name, 
        price, 
        images, 
        configurableAttributes, 
        metaDescription,
        isSignedIn,
        isSubmittingReview, 
        setIsSubmittingReview
    }
}