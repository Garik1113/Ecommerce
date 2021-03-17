import { AxiosResponse } from 'axios';
import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { State } from 'src/store'
import { GET_CUSTOMER_DETAILS } from 'src/store/actions/customer/actions';
import { getCustomerDetails } from 'src/store/actions/customer/asyncActions';
import { useAxiosClient } from '../Axios/useAxiosClient';

export const useAccount = () => {
    const isSignedIn = useSelector((state:State) => state.customer.isSignedIn);
    const { firstName, lastName } = useSelector((state: State) => state.customer.customer);
    const dispatch = useDispatch();
    const { axiosClient } = useAxiosClient();
    
    const handleSubmit = useCallback(async (values) => {
        const {status, data}:AxiosResponse =  await axiosClient("PUT", 'customers/', { data: values })
        if (status == 200 && data.customer) {
            dispatch({
                type: GET_CUSTOMER_DETAILS,
                customer: data.customer
            })
        }
    }, [axiosClient, getCustomerDetails]);
    useEffect(() => {
        dispatch(getCustomerDetails())
    }, [])
    const formik = useFormik({
        initialValues: {firstName, lastName},
        onSubmit: handleSubmit
    });
    const history = useHistory();

    useEffect(() => {
        if(!isSignedIn) {
            history.push('/')
        }
    }, [isSignedIn]);


    return {
        isSignedIn,
        firstName,
        lastName,
        formik,
        handleSubmit
    }
}