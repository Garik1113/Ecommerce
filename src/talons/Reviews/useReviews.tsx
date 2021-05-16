import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IProduct } from 'src/interfaces/product'
import { IReview } from 'src/interfaces/review';
import { useAxiosClient } from '../Axios/useAxiosClient';

type Props = {
    product: IProduct | null,
}

export const useReviews = (props: Props) => {
    const { product } = props;
    const { axiosClient } = useAxiosClient();
    const [isSubmitting] = useState(false)
    const [reviews, setReviews] = useState<IReview[]>([]);

    const fetchReviews = useCallback(async() => {
        const response: AxiosResponse = await axiosClient("GET", `reviews/${product ? `?product_id=${product._id}` : '' }`);
        const { status, data } = response;
        if (status == 200 && data.reviews) {
            setReviews(data.reviews);
        }
    }, [product]);

    useEffect(() => {
        fetchReviews()
    }, [product])

    return {
        isSubmitting,
        reviews
    }

}