import { Product } from 'src/store/types/product';
import { productExample } from '../Product/useProduct';

const arr:Array<Product>= [];
    for (let index = 0; index < 10; index++) {
        arr.push(productExample)
    }

export const useCategoryContent = () => {
    
    return {
        products: arr
    }
}