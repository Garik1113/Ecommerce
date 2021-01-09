import { ProductProps } from '../../components/ProductFullDetail/productFullDetail';

export const useProductFullDetail = ({ product }: ProductProps) => {
    const { gallery } = product;
    return {
        gallery
    }
}