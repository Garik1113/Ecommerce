import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { IProduct } from 'src/interfaces/product'
import { useAxiosClient } from '../Axios/useAxiosClient';
import * as yup from 'yup'

type Props = {
    product: IProduct,
    isSubmittingReview: any,
    setIsSubmittingReview: any
}

export const useReviewForm = (props: Props) => {
    const { 
        product,
        setIsSubmittingReview,
    } = props;
    const { axiosClient } = useAxiosClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const validationSchema = useMemo(() => yup.object().shape({
        comment: yup.string().required("Required"),
        rating: yup.string().required("Required"),
    }), [yup]);
    const formik = useFormik({
        initialValues: {
            productId: product ? product._id : "",
            rating: 3,
            comment: ""
        },
        onSubmit: async(values) => {
            setIsSubmittingReview(true)
            setIsSubmitting(true)
            await axiosClient("POST", 'reviews/', values);
            setIsSubmitting(false);
            setIsSubmittingReview(false)
        },
        validationSchema
    })

    return {
        formik,
        isSubmitting
    }

}