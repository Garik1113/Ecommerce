import { AxiosResponse } from 'axios';
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { State } from 'src/store'
import { GET_CUSTOMER_DETAILS } from 'src/store/actions/customer/actions';
import { getCustomerDetails } from 'src/store/actions/customer/asyncActions';
import { useAxiosClient } from '../Axios/useAxiosClient';

type Message = {
    type: string,
    value: string
}

export const useAccount = () => {
    const isSignedIn = useSelector((state:State) => state.customer.isSignedIn);
    const { firstName, lastName, email } = useSelector((state: State) => state.customer.customer);
    const dispatch = useDispatch();
    const { axiosClient } = useAxiosClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<Message>({type: "", value: ""})
    const history = useHistory();
    const [isChangingPassword, setIsChangingPassword] = useState(false)
    const handleSubmit = useCallback(async (values) => {
        setMessage({type: "", value: ""})
        setIsSubmitting(true)
        const {status, data}: AxiosResponse =  await axiosClient("PUT", 'customers/', { data: values })
        if (status == 200 && data.customer) {
            dispatch({
                type: GET_CUSTOMER_DETAILS,
                customer: data.customer
            })
            setMessage({type: "success", value: "Succesfuly updated"})
        } else {
            setMessage({type: "error", value: "Something wents wrong"})
        }
        setIsSubmitting(false)
    }, [axiosClient, getCustomerDetails, setMessage]);

    useEffect(() => {
        dispatch(getCustomerDetails())
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName, 
            lastName,
            email,
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        },
        onSubmit: handleSubmit
    });

    useEffect(() => {
        if(!isSignedIn) {
            history.push('/')
        }
    }, [isSignedIn]);


    return {
        isSignedIn,
        firstName,
        lastName,
        email,
        formik,
        handleSubmit,
        isSubmitting,
        message,
        isChangingPassword, 
        setIsChangingPassword
    }
}