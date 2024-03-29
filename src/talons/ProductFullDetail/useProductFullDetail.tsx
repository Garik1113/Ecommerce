import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { addProductToCart } from 'src/store/actions/cart/asyncActions';
import { getCustomerDetails } from 'src/store/actions/customer/asyncActions';
import { ProductProps } from '../../components/ProductFullDetail/productFullDetail';
import { useConfig } from '../Config/useConfig';
    

export const useProductFullDetail = (props: ProductProps) => {
    const { product } = props;
    const { name, price, images, configurableAttributes, metaDescription } = product;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId || state.customer.customer.cartId || state.cart.cart._id);
    const [activeAction, setActiveAction] = useState("description")
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const { productSubscriptions } = useSelector((state: State) => state.customer.customer);
    const [message, setMessag] = useState("");

    const { getConfigValue } = useConfig();
    const currency = useMemo(
        () => getConfigValue("baseCurrency"),
        [getConfigValue]
    )
    const dispatch = useDispatch();
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
        try {
           if (product._id) {
                await dispatch(addProductToCart(product._id, quantity));
            } 
        } catch (error) {
            console.log(error)
        }
        
    },[
        product, 
        addProductToCart, 
        dispatch, 
        cartId,
        quantity
    ]);

    useEffect(() => {
        if (isSignedIn) {
            dispatch(getCustomerDetails())
        }
    }, [isSignedIn])

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
        currency,
        activeAction, 
        setActiveAction,
        productSubscriptions
    }
}