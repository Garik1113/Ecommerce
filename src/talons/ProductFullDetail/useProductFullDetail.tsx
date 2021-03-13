import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { addProductToCart, getCartDetails } from 'src/store/actions/cart/asyncActions';
import { TAddItemToCartData, TCartItemAttribute } from 'src/store/types/cart';
import { Attribute, AttributeValue, TAttributeData, TProduct } from 'src/store/types/product';
import { ProductProps } from '../../components/ProductFullDetail/productFullDetail';


const deriveOptionSelectionsFromProduct = (product: TProduct) => {
    const { attributes } = product;
    if (attributes.length == 0) {
        return new Map();
    }
    const optionSelections = new Map();
    attributes.map((attr: Attribute) => {
        optionSelections.set(attr.id, attr.values[0])
    });

    return optionSelections;
}

const getAttributeDataFromOptionSelections = (optionSelections:Map<number, AttributeValue> = new Map()) => {
    const attributeIds: number[] = Array.from(optionSelections.keys());
    const valueIds: number[] = Array.from(optionSelections.values()).map(e => e.id);
    const attributeData: TCartItemAttribute[] = [];
    for (let index = 0; index < attributeIds.length; index++) {
        const data: TCartItemAttribute = {
            attributeId: String(attributeIds[index]),
            valueId: String(valueIds[index])
        };
        attributeData.push(data)
    };

    return attributeData
}

export const useProductFullDetail = (props: ProductProps) => {
    const { product } = props;
    const { name, price, images, attributes, metaDescription } = product;
    const cartId: string | null = useSelector((state: State) => state.cart.cartId);
    const token = useSelector((state: State) => state.customer.token);
    const dispatch = useDispatch();
    const headers = useMemo(() => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, [token]);
    const [quantity, setQuantity] = useState<number>(1);
    const derivedOptionSelections = useMemo(
        () => deriveOptionSelectionsFromProduct(product),
        [product]
    );
    const [optionSelections, setOptionSelections] = useState<Map<number, AttributeValue>>(derivedOptionSelections);

    const handleChangeOptionSelections = useCallback((optionId, value) => {
        const nextOptionSelections = new Map([...optionSelections]);
        nextOptionSelections.set(optionId, value);
        setOptionSelections(nextOptionSelections);
    }, [product, optionSelections, setOptionSelections])

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
            const attributes: TCartItemAttribute[] | null = getAttributeDataFromOptionSelections(optionSelections);
            const addItemToCartData: TAddItemToCartData = { ...productData, cartId,  cartItemAttributes: attributes };
            await dispatch(addProductToCart(addItemToCartData, headers));
            dispatch(getCartDetails());
        }
    },[
        product, 
        addProductToCart, 
        dispatch, 
        cartId, 
        optionSelections, 
        handleChangeOptionSelections,
        quantity
    ]);

    return {
        handleIncrementQuantity,
        handleDecrementQuantity,
        quantity,
        handleAddProductToCart,
        handleChangeOptionSelections,
        optionSelections,
        name, 
        price, 
        images, 
        attributes, 
        metaDescription
    }
}