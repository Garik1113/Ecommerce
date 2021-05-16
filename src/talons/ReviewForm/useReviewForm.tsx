import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { IProduct } from 'src/interfaces/product'
import { useAxiosClient } from '../Axios/useAxiosClient';
import * as yup from 'yup'

type Props = {
    product: IProduct,
}

export const useReviewForm = (props: Props) => {
    const { 
        product,
    } = props;
    const { axiosClient } = useAxiosClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
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
            setIsSubmitting(true)
            setMessage('');
            await axiosClient("POST", 'reviews/', values);
            setIsSubmitting(false);
            formik.setFieldValue("comment", "");
            formik.setFieldValue("rating", 3);
            setMessage("Review has been added")
        },
        validationSchema
    })

    return {
        formik,
        isSubmitting,
        message
    }

}